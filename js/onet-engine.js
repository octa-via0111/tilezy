/**
 * Onet Classic Game Engine
 * Handles board grid with virtual border, 0-2 turn pathfinding,
 * gravity shifts, shuffle, and hint generation.
 */

class OnetEngine {
  constructor(rows = 8, cols = 12, numTypes = 16, gravity = 'none') {
    this.rows = rows;
    this.cols = cols;
    this.numTypes = numTypes;
    this.gravity = gravity;
    
    // Grid size includes a 1-tile outer empty padding border:
    // Padded rows: 0 .. rows + 1
    // Padded cols: 0 .. cols + 1
    this.paddedRows = rows + 2;
    this.paddedCols = cols + 2;
    this.board = [];
    this.initBoard();
  }

  /**
   * Initializes or resets the board with pairs of tiles.
   * Guarantees at least one valid path exists at the start.
   */
  initBoard() {
    this.board = Array.from({ length: this.paddedRows }, () =>
      Array(this.paddedCols).fill(0)
    );

    const totalTiles = this.rows * this.cols;
    if (totalTiles % 2 !== 0) {
      throw new Error('Total playable tiles must be even!');
    }

    // Generate balanced pairs of tile types
    const pairsNeeded = totalTiles / 2;
    const tilePool = [];
    for (let i = 0; i < pairsNeeded; i++) {
      const type = (i % this.numTypes) + 1;
      tilePool.push(type, type);
    }

    // Fisher-Yates shuffle
    let attempts = 0;
    do {
      attempts++;
      this._shuffleArray(tilePool);
      let idx = 0;
      for (let r = 1; r <= this.rows; r++) {
        for (let c = 1; c <= this.cols; c++) {
          this.board[r][c] = tilePool[idx++];
        }
      }
    } while (!this.hasValidMoves() && attempts < 200);

    // If still no valid moves (rare), force at least one adjacent pair on edge
    if (!this.hasValidMoves()) {
      this._forceValidMove();
    }
  }

  _shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  _forceValidMove() {
    // Put same type on (1,1) and (1,2)
    const t = this.board[1][1];
    for (let r = 1; r <= this.rows; r++) {
      for (let c = 1; c <= this.cols; c++) {
        if ((r !== 1 || c !== 2) && this.board[r][c] === t) {
          // swap with (1, 2)
          const temp = this.board[1][2];
          this.board[1][2] = t;
          this.board[r][c] = temp;
          return;
        }
      }
    }
  }

  /**
   * Checks if two cells can be connected with a straight horizontal or vertical line
   * traversing ONLY empty cells (0).
   * Note: The endpoints themselves are allowed to be non-zero (since they are the tiles being connected).
   */
  canDirectConnect(r1, c1, r2, c2) {
    if (r1 !== r2 && c1 !== c2) return false;

    if (r1 === r2) {
      const minC = Math.min(c1, c2);
      const maxC = Math.max(c1, c2);
      for (let c = minC + 1; c < maxC; c++) {
        if (this.board[r1][c] !== 0) return false;
      }
      return true;
    } else {
      const minR = Math.min(r1, r2);
      const maxR = Math.max(r1, r2);
      for (let r = minR + 1; r < maxR; r++) {
        if (this.board[r][c1] !== 0) return false;
      }
      return true;
    }
  }

  /**
   * Finds a valid Onet connecting path between (r1, c1) and (r2, c2) with at most 2 turns (3 segments).
   * Returns array of path points [{r, c}, ...] or null if no valid path exists.
   */
  findPath(r1, c1, r2, c2) {
    // Basic validations
    if (r1 === r2 && c1 === c2) return null;
    const type1 = this.board[r1][c1];
    const type2 = this.board[r2][c2];
    if (type1 === 0 || type2 === 0 || type1 !== type2) return null;

    // 1. Check 0-turn (direct line)
    if (this.canDirectConnect(r1, c1, r2, c2)) {
      return [{ r: r1, c: c1 }, { r: r2, c: c2 }];
    }

    // 2. Check 1-turn (L-shape / 2 segments)
    // Corner A: (r1, c2)
    if (this.board[r1][c2] === 0) {
      if (this.canDirectConnect(r1, c1, r1, c2) && this.canDirectConnect(r1, c2, r2, c2)) {
        return [{ r: r1, c: c1 }, { r: r1, c: c2 }, { r: r2, c: c2 }];
      }
    }
    // Corner B: (r2, c1)
    if (this.board[r2][c1] === 0) {
      if (this.canDirectConnect(r1, c1, r2, c1) && this.canDirectConnect(r2, c1, r2, c2)) {
        return [{ r: r1, c: c1 }, { r: r2, c: c1 }, { r: r2, c: c2 }];
      }
    }

    // 3. Check 2-turns (Z/U-shape / 3 segments)
    // Scan horizontally from (r1, c1) across all empty cells (including virtual borders)
    const candidates = [];

    // Right from c1
    for (let c = c1 + 1; c < this.paddedCols; c++) {
      if (this.board[r1][c] !== 0) break;
      // Now from (r1, c) we need a 1-turn connection to (r2, c2)
      // Since first segment is horizontal, second segment must be vertical to (r2, c)
      if (this.board[r2][c] === 0 || (r2 === r1 && c === c2) || (c === c2)) {
        if (this.canDirectConnect(r1, c, r2, c) && this.canDirectConnect(r2, c, r2, c2)) {
          candidates.push([
            { r: r1, c: c1 },
            { r: r1, c: c },
            { r: r2, c: c },
            { r: r2, c: c2 }
          ]);
        }
      }
    }

    // Left from c1
    for (let c = c1 - 1; c >= 0; c--) {
      if (this.board[r1][c] !== 0) break;
      if (this.board[r2][c] === 0 || (r2 === r1 && c === c2) || (c === c2)) {
        if (this.canDirectConnect(r1, c, r2, c) && this.canDirectConnect(r2, c, r2, c2)) {
          candidates.push([
            { r: r1, c: c1 },
            { r: r1, c: c },
            { r: r2, c: c },
            { r: r2, c: c2 }
          ]);
        }
      }
    }

    // Down from r1
    for (let r = r1 + 1; r < this.paddedRows; r++) {
      if (this.board[r][c1] !== 0) break;
      // Since first segment is vertical, second segment must be horizontal to (r, c2)
      if (this.board[r][c2] === 0 || (r === r2 && c1 === c2) || (r === r2)) {
        if (this.canDirectConnect(r, c1, r, c2) && this.canDirectConnect(r, c2, r2, c2)) {
          candidates.push([
            { r: r1, c: c1 },
            { r: r, c: c1 },
            { r: r, c: c2 },
            { r: r2, c: c2 }
          ]);
        }
      }
    }

    // Up from r1
    for (let r = r1 - 1; r >= 0; r--) {
      if (this.board[r][c1] !== 0) break;
      if (this.board[r][c2] === 0 || (r === r2 && c1 === c2) || (r === r2)) {
        if (this.canDirectConnect(r, c1, r, c2) && this.canDirectConnect(r, c2, r2, c2)) {
          candidates.push([
            { r: r1, c: c1 },
            { r: r, c: c1 },
            { r: r, c: c2 },
            { r: r2, c: c2 }
          ]);
        }
      }
    }

    if (candidates.length > 0) {
      // Pick shortest path in total Manhattan distance for cleanest visual
      candidates.sort((pA, pB) => this._pathLength(pA) - this._pathLength(pB));
      return candidates[0];
    }

    return null;
  }

  _pathLength(path) {
    let len = 0;
    for (let i = 0; i < path.length - 1; i++) {
      len += Math.abs(path[i].r - path[i + 1].r) + Math.abs(path[i].c - path[i + 1].c);
    }
    return len;
  }

  /**
   * Find all currently valid matching pairs on board
   */
  findAllMoves() {
    const moves = [];
    const positionsByType = {};

    for (let r = 1; r <= this.rows; r++) {
      for (let c = 1; c <= this.cols; c++) {
        const type = this.board[r][c];
        if (type > 0) {
          if (!positionsByType[type]) positionsByType[type] = [];
          positionsByType[type].push({ r, c });
        }
      }
    }

    for (const type in positionsByType) {
      const list = positionsByType[type];
      for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
          const p1 = list[i];
          const p2 = list[j];
          const path = this.findPath(p1.r, p1.c, p2.r, p2.c);
          if (path) {
            moves.push({ p1, p2, path, type: Number(type) });
          }
        }
      }
    }

    return moves;
  }

  /**
   * Checks if at least one valid move exists
   */
  hasValidMoves() {
    const positionsByType = {};
    for (let r = 1; r <= this.rows; r++) {
      for (let c = 1; c <= this.cols; c++) {
        const type = this.board[r][c];
        if (type > 0) {
          if (!positionsByType[type]) positionsByType[type] = [];
          positionsByType[type].push({ r, c });
        }
      }
    }

    for (const type in positionsByType) {
      const list = positionsByType[type];
      for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
          const p1 = list[i];
          const p2 = list[j];
          if (this.findPath(p1.r, p1.c, p2.r, p2.c)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  /**
   * Get a hint: returns the first available valid pair or null
   */
  getHint() {
    const moves = this.findAllMoves();
    if (moves.length === 0) return null;
    // Prefer shorter paths or random valid move
    moves.sort((a, b) => this._pathLength(a.path) - this._pathLength(b.path));
    return moves[0];
  }

  /**
   * Shuffles remaining tiles on board, guaranteeing at least one valid move
   */
  shuffle() {
    const remaining = [];
    const positions = [];

    for (let r = 1; r <= this.rows; r++) {
      for (let c = 1; c <= this.cols; c++) {
        if (this.board[r][c] !== 0) {
          remaining.push(this.board[r][c]);
          positions.push({ r, c });
        }
      }
    }

    if (remaining.length === 0) return true;

    let attempts = 0;
    do {
      attempts++;
      this._shuffleArray(remaining);
      for (let i = 0; i < positions.length; i++) {
        const pos = positions[i];
        this.board[pos.r][pos.c] = remaining[i];
      }
    } while (!this.hasValidMoves() && attempts < 150);

    return this.hasValidMoves();
  }

  /**
   * Removes matching pair and applies gravity shift if configured
   */
  removePair(r1, c1, r2, c2) {
    this.board[r1][c1] = 0;
    this.board[r2][c2] = 0;

    if (this.gravity && this.gravity !== 'none') {
      this.applyGravity();
    }
  }

  /**
   * Applies gravity shift to tiles
   * Supports: 'down', 'up', 'left', 'right', 'split_v', 'split_h'
   */
  applyGravity() {
    switch (this.gravity) {
      case 'down':
        for (let c = 1; c <= this.cols; c++) {
          let writeRow = this.rows;
          for (let r = this.rows; r >= 1; r--) {
            if (this.board[r][c] !== 0) {
              const val = this.board[r][c];
              this.board[r][c] = 0;
              this.board[writeRow][c] = val;
              writeRow--;
            }
          }
        }
        break;

      case 'up':
        for (let c = 1; c <= this.cols; c++) {
          let writeRow = 1;
          for (let r = 1; r <= this.rows; r++) {
            if (this.board[r][c] !== 0) {
              const val = this.board[r][c];
              this.board[r][c] = 0;
              this.board[writeRow][c] = val;
              writeRow++;
            }
          }
        }
        break;

      case 'left':
        for (let r = 1; r <= this.rows; r++) {
          let writeCol = 1;
          for (let c = 1; c <= this.cols; c++) {
            if (this.board[r][c] !== 0) {
              const val = this.board[r][c];
              this.board[r][c] = 0;
              this.board[r][writeCol] = val;
              writeCol++;
            }
          }
        }
        break;

      case 'right':
        for (let r = 1; r <= this.rows; r++) {
          let writeCol = this.cols;
          for (let c = this.cols; c >= 1; c--) {
            if (this.board[r][c] !== 0) {
              const val = this.board[r][c];
              this.board[r][c] = 0;
              this.board[r][writeCol] = val;
              writeCol--;
            }
          }
        }
        break;

      case 'split_v': {
        const midRow = Math.floor(this.rows / 2);
        // Top half floats up
        for (let c = 1; c <= this.cols; c++) {
          let writeRow = 1;
          for (let r = 1; r <= midRow; r++) {
            if (this.board[r][c] !== 0) {
              const val = this.board[r][c];
              this.board[r][c] = 0;
              this.board[writeRow][c] = val;
              writeRow++;
            }
          }
        }
        // Bottom half falls down
        for (let c = 1; c <= this.cols; c++) {
          let writeRow = this.rows;
          for (let r = this.rows; r > midRow; r--) {
            if (this.board[r][c] !== 0) {
              const val = this.board[r][c];
              this.board[r][c] = 0;
              this.board[writeRow][c] = val;
              writeRow--;
            }
          }
        }
        break;
      }

      case 'split_h': {
        const midCol = Math.floor(this.cols / 2);
        // Left half shifts left
        for (let r = 1; r <= this.rows; r++) {
          let writeCol = 1;
          for (let c = 1; c <= midCol; c++) {
            if (this.board[r][c] !== 0) {
              const val = this.board[r][c];
              this.board[r][c] = 0;
              this.board[r][writeCol] = val;
              writeCol++;
            }
          }
        }
        // Right half shifts right
        for (let r = 1; r <= this.rows; r++) {
          let writeCol = this.cols;
          for (let c = this.cols; c > midCol; c--) {
            if (this.board[r][c] !== 0) {
              const val = this.board[r][c];
              this.board[r][c] = 0;
              this.board[r][writeCol] = val;
              writeCol--;
            }
          }
        }
        break;
      }
    }
  }

  getRemainingCount() {
    let count = 0;
    for (let r = 1; r <= this.rows; r++) {
      for (let c = 1; c <= this.cols; c++) {
        if (this.board[r][c] !== 0) count++;
      }
    }
    return count;
  }

  isCleared() {
    return this.getRemainingCount() === 0;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = OnetEngine;
}
