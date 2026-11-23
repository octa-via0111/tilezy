/**
 * Tilezy - Cozy Pastel Onet Game Logic
 * Full Home Screen, Difficulty Modes (No Gravity / Static Empty Cells),
 * Dark Mode, Dynamic 5 Themes, and Clean Flat Styling.
 */

(() => {
  // Difficulty Configurations - NO GRAVITY: Tiles stay in place, deleted cells stay empty!
  const DIFFICULTY_CONFIG = {
    easy: {
      name: 'Mudah',
      badge: '🟢',
      rows: 6,
      cols: 6,
      types: 8,
      gravity: 'none',
      time: 180
    },
    medium: {
      name: 'Sedang',
      badge: '🟡',
      rows: 8,
      cols: 8,
      types: 12,
      gravity: 'none',
      time: 150
    },
    hard: {
      name: 'Sulit',
      badge: '🔴',
      rows: 8,
      cols: 12,
      types: 16,
      gravity: 'none',
      time: 120
    }
  };

  // State
  let currentDifficulty = localStorage.getItem('tilezy_diff') || 'easy';
  let currentLevel = 1;
  let totalScore = parseInt(localStorage.getItem('tilezy_score') || '0', 10);
  let bestScores = {
    easy: parseInt(localStorage.getItem('tilezy_best_easy') || '0', 10),
    medium: parseInt(localStorage.getItem('tilezy_best_medium') || '0', 10),
    hard: parseInt(localStorage.getItem('tilezy_best_hard') || '0', 10)
  };

  let boosters = {
    hint: parseInt(localStorage.getItem('tilezy_hint_count') || '3', 10),
    shuffle: parseInt(localStorage.getItem('tilezy_shuffle_count') || '3', 10),
    time: parseInt(localStorage.getItem('tilezy_time_count') || '2', 10)
  };

  let activeTheme = localStorage.getItem('tilezy_theme') || 'fruits';
  let isDarkMode = localStorage.getItem('tilezy_dark_mode') === 'true';

  // Game Engine State
  let engine = null;
  let selectedTile = null;
  let isProcessingMatch = false;
  let remainingTime = 180;
  let maxTime = 180;
  let timerInterval = null;
  let isPaused = false;
  let currentLevelScore = 0;
  let comboCount = 0;
  let lastMatchTime = 0;
  let tileSize = 44;

  // DOM Views
  const viewHome = document.getElementById('view-home');
  const viewGame = document.getElementById('view-game');

  // DOM Elements - Home
  const diffPills = document.querySelectorAll('.diff-pill');
  const btnHomePlay = document.getElementById('btn-home-play');
  const tabHome = document.getElementById('tab-home');
  const tabScore = document.getElementById('tab-score');
  const tabThemes = document.getElementById('tab-themes');
  const tabSettings = document.getElementById('tab-settings');
  const btnToggleDarkMode = document.getElementById('btn-toggle-dark-mode');

  // DOM Elements - Game
  const btnBackHome = document.getElementById('btn-back-home');
  const levelDisplay = document.getElementById('level-display');
  const scoreDisplay = document.getElementById('score-display');
  const timeText = document.getElementById('time-text');
  const timerFill = document.getElementById('timer-fill');
  const btnPause = document.getElementById('btn-pause');
  const boardArea = document.getElementById('board-area');
  const boardContainer = document.getElementById('board-container');
  const tileGrid = document.getElementById('tile-grid');
  const lineCanvas = document.getElementById('line-canvas');
  const canvasCtx = lineCanvas.getContext('2d');
  const floatLayer = document.getElementById('float-layer');

  // Booster Elements
  const hintCountEl = document.getElementById('hint-count');
  const shuffleCountEl = document.getElementById('shuffle-count');
  const timeCountEl = document.getElementById('time-count');
  const btnHint = document.getElementById('btn-hint');
  const btnShuffle = document.getElementById('btn-shuffle');
  const btnTimePlus = document.getElementById('btn-time-plus');
  const btnThemeQuick = document.getElementById('btn-theme-quick');
  const quickThemeIcon = document.getElementById('quick-theme-icon');

  // Modals
  const modalScore = document.getElementById('modal-score');
  const modalThemes = document.getElementById('modal-themes');
  const themesContainer = document.getElementById('themes-container');
  const modalSettings = document.getElementById('modal-settings');
  const modalPause = document.getElementById('modal-pause');
  const modalWin = document.getElementById('modal-win');
  const modalGameOver = document.getElementById('modal-gameover');
  const toggleDarkModeSettings = document.getElementById('toggle-dark-mode-settings');

  // PWA Banner
  const pwaBanner = document.getElementById('pwa-install-banner');
  const btnCloseInstall = document.getElementById('btn-close-install');
  let deferredInstallPrompt = null;

  // Initialize Tilezy
  function init() {
    applyDarkMode(isDarkMode);
    setupDifficultySelector();
    setupTabNavigation();
    setupThemesUI();
    setupModals();
    setupGameControls();
    updateBoosterBadges();
    setupPWA();

    window.addEventListener('resize', handleResize);
  }

  // Dark Mode Management
  function applyDarkMode(enable) {
    isDarkMode = enable;
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('tilezy_dark_mode', isDarkMode);

    const icon = btnToggleDarkMode.querySelector('.mode-icon');
    const text = btnToggleDarkMode.querySelector('.mode-text');
    if (isDarkMode) {
      if (icon) icon.textContent = '☀️';
      if (text) text.textContent = 'Light';
      toggleDarkModeSettings.textContent = 'ON';
      toggleDarkModeSettings.classList.add('on');
    } else {
      if (icon) icon.textContent = '🌙';
      if (text) text.textContent = 'Dark';
      toggleDarkModeSettings.textContent = 'OFF';
      toggleDarkModeSettings.classList.remove('on');
    }
  }

  function toggleDarkMode() {
    applyDarkMode(!isDarkMode);
  }

  // Difficulty Selector Setup
  function setupDifficultySelector() {
    diffPills.forEach(pill => {
      pill.classList.toggle('active', pill.dataset.diff === currentDifficulty);

      pill.addEventListener('click', () => {
        soundController.playClick();
        diffPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentDifficulty = pill.dataset.diff;
        localStorage.setItem('tilezy_diff', currentDifficulty);
      });
    });
  }

  // View Switcher
  function switchView(viewName) {
    if (viewName === 'game') {
      viewHome.classList.remove('active');
      viewGame.classList.add('active');
      startRound();
    } else {
      stopTimer();
      viewGame.classList.remove('active');
      viewHome.classList.add('active');
      updateBestScoresDisplay();
    }
  }

  // Setup Home Tabs
  function setupTabNavigation() {
    tabHome.addEventListener('click', () => {
      soundController.playClick();
      setActiveTab(tabHome);
    });

    tabScore.addEventListener('click', () => {
      soundController.playClick();
      updateBestScoresDisplay();
      modalScore.classList.add('active');
    });

    tabThemes.addEventListener('click', () => {
      soundController.playClick();
      renderThemesList();
      modalThemes.classList.add('active');
    });

    tabSettings.addEventListener('click', () => {
      soundController.playClick();
      updateSettingsUI();
      modalSettings.classList.add('active');
    });

    btnHomePlay.addEventListener('click', () => {
      soundController.playClick();
      switchView('game');
    });

    btnBackHome.addEventListener('click', () => {
      soundController.playClick();
      switchView('home');
    });

    btnToggleDarkMode.addEventListener('click', () => {
      soundController.playClick();
      toggleDarkMode();
    });

    toggleDarkModeSettings.addEventListener('click', () => {
      soundController.playClick();
      toggleDarkMode();
    });
  }

  function setActiveTab(activeEl) {
    [tabHome, tabScore, tabThemes, tabSettings].forEach(tab => {
      tab.classList.toggle('active', tab === activeEl);
    });
  }

  // Start a new game round
  function startRound() {
    const cfg = DIFFICULTY_CONFIG[currentDifficulty] || DIFFICULTY_CONFIG.easy;
    // Note: gravity is 'none', tiles stay in place and empty cells stay empty!
    engine = new OnetEngine(cfg.rows, cfg.cols, cfg.types, 'none');

    currentLevelScore = 0;
    comboCount = 0;
    lastMatchTime = 0;
    selectedTile = null;
    isProcessingMatch = false;
    isPaused = false;

    maxTime = cfg.time;
    remainingTime = maxTime;

    updateHeaderUI();
    calculateAndRenderGrid();
    startTimer();
  }

  // Update Top Bar Displays
  function updateHeaderUI() {
    const cfg = DIFFICULTY_CONFIG[currentDifficulty];
    levelDisplay.textContent = `${cfg.badge} ${cfg.name} · Lv. ${currentLevel}`;
    scoreDisplay.textContent = currentLevelScore.toLocaleString();
    updateTimerDisplay();
  }

  // Timer handlers
  function startTimer() {
    stopTimer();
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      if (isPaused) return;
      remainingTime--;
      updateTimerDisplay();

      if (remainingTime <= 0) {
        stopTimer();
        handleGameOver();
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function updateTimerDisplay() {
    const mins = Math.floor(Math.max(0, remainingTime) / 60);
    const secs = Math.max(0, remainingTime) % 60;
    timeText.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    const pct = Math.max(0, Math.min(100, (remainingTime / maxTime) * 100));
    timerFill.style.width = `${pct}%`;

    if (pct < 20) {
      timerFill.classList.add('danger');
    } else {
      timerFill.classList.remove('danger');
    }
  }

  // Responsive Grid Calculation
  function calculateAndRenderGrid() {
    const cfg = DIFFICULTY_CONFIG[currentDifficulty];
    const availWidth = Math.max(260, boardArea.clientWidth - 48);
    const availHeight = Math.max(260, boardArea.clientHeight - 48);

    const colsWithBorder = cfg.cols + 0.8;
    const rowsWithBorder = cfg.rows + 0.8;

    const sizeW = Math.floor(availWidth / colsWithBorder);
    const sizeH = Math.floor(availHeight / rowsWithBorder);
    tileSize = Math.min(64, Math.max(34, Math.min(sizeW, sizeH)));

    const gap = tileSize > 50 ? 5 : 3;

    tileGrid.style.gridTemplateColumns = `repeat(${cfg.cols}, ${tileSize}px)`;
    tileGrid.style.gap = `${gap}px`;

    renderBoardDOM();
    updateCanvasSize();
  }

  function updateCanvasSize() {
    const rect = boardContainer.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    lineCanvas.width = rect.width * dpr;
    lineCanvas.height = rect.height * dpr;
    lineCanvas.style.width = `${rect.width}px`;
    lineCanvas.style.height = `${rect.height}px`;
    canvasCtx.scale(dpr, dpr);
  }

  // Render DOM Tiles from Engine
  function renderBoardDOM() {
    tileGrid.innerHTML = '';
    const theme = THEMES[activeTheme] || THEMES.fruits;
    const cfg = DIFFICULTY_CONFIG[currentDifficulty];

    for (let r = 1; r <= cfg.rows; r++) {
      for (let c = 1; c <= cfg.cols; c++) {
        const val = engine.board[r][c];
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.dataset.r = r;
        tile.dataset.c = c;
        tile.style.width = `${tileSize}px`;
        tile.style.height = `${tileSize}px`;

        if (val === 0) {
          tile.classList.add('empty');
        } else {
          const iconSvg = theme.icons[(val - 1) % theme.icons.length];
          tile.innerHTML = iconSvg;
        }

        tileGrid.appendChild(tile);
      }
    }
  }

  function getTileEl(r, c) {
    return tileGrid.querySelector(`.tile[data-r="${r}"][data-c="${c}"]`);
  }

  // Tile Selection & Matching Logic
  function handleTileClick(r, c) {
    if (isPaused || isProcessingMatch) return;
    if (engine.board[r][c] === 0) return;

    soundController.playClick();
    clearHints();

    const clickedEl = getTileEl(r, c);

    if (!selectedTile) {
      selectedTile = { r, c };
      clickedEl.classList.add('selected');
      soundController.playSelect();
      return;
    }

    if (selectedTile.r === r && selectedTile.c === c) {
      clickedEl.classList.remove('selected');
      selectedTile = null;
      return;
    }

    const prevEl = getTileEl(selectedTile.r, selectedTile.c);

    if (engine.board[r][c] !== engine.board[selectedTile.r][selectedTile.c]) {
      if (prevEl) prevEl.classList.remove('selected');
      selectedTile = { r, c };
      clickedEl.classList.add('selected');
      soundController.playSelect();
      return;
    }

    // Same type -> Check Path
    const path = engine.findPath(selectedTile.r, selectedTile.c, r, c);

    if (path) {
      isProcessingMatch = true;
      clickedEl.classList.add('selected');
      executeMatch(selectedTile, { r, c }, path);
    } else {
      soundController.playWrong();
      soundController.vibrate(50);
      clickedEl.classList.add('shake');
      setTimeout(() => {
        clickedEl.classList.remove('shake');
      }, 400);
    }
  }

  // Execute Match
  function executeMatch(p1, p2, path) {
    const now = Date.now();
    if (now - lastMatchTime < 3500) {
      comboCount++;
    } else {
      comboCount = 1;
    }
    lastMatchTime = now;

    drawConnectingPath(path);
    soundController.playLine();
    soundController.playMatch(comboCount);
    soundController.vibrate(30);

    const basePts = 100;
    const comboPts = comboCount > 1 ? comboCount * 50 : 0;
    const earned = basePts + comboPts;
    currentLevelScore += earned;
    updateHeaderUI();

    remainingTime = Math.min(maxTime, remainingTime + (comboCount > 2 ? 4 : 2));
    updateTimerDisplay();

    const el1 = getTileEl(p1.r, p1.c);
    const el2 = getTileEl(p2.r, p2.c);
    if (el2) spawnFloatingScore(`+${earned}`, el2);
    if (comboCount > 1) showComboBanner(`COMBO x${comboCount}! ✨`);

    setTimeout(() => {
      if (el1) el1.classList.add('clearing');
      if (el2) el2.classList.add('clearing');
    }, 120);

    // CRITICAL: Tiles are removed, NO gravity/shifting! Their spot remains empty!
    setTimeout(() => {
      engine.removePair(p1.r, p1.c, p2.r, p2.c);
      clearCanvas();
      selectedTile = null;

      renderBoardDOM();
      isProcessingMatch = false;

      if (engine.isCleared()) {
        handleLevelWin();
      } else if (!engine.hasValidMoves()) {
        handleDeadlock();
      }
    }, 240);
  }

  // Draw connecting beam
  function drawConnectingPath(path) {
    clearCanvas();
    if (!path || path.length < 2) return;

    const coords = path.map(pt => getPixelCoordForGridCell(pt.r, pt.c));

    canvasCtx.save();
    canvasCtx.strokeStyle = '#FFD66B';
    canvasCtx.lineWidth = 6;
    canvasCtx.lineCap = 'round';
    canvasCtx.lineJoin = 'round';

    canvasCtx.beginPath();
    canvasCtx.moveTo(coords[0].x, coords[0].y);
    for (let i = 1; i < coords.length; i++) {
      canvasCtx.lineTo(coords[i].x, coords[i].y);
    }
    canvasCtx.stroke();
    canvasCtx.restore();

    canvasCtx.save();
    canvasCtx.strokeStyle = '#FF8B7B';
    canvasCtx.lineWidth = 2.5;
    canvasCtx.lineCap = 'round';
    canvasCtx.lineJoin = 'round';

    canvasCtx.beginPath();
    canvasCtx.moveTo(coords[0].x, coords[0].y);
    for (let i = 1; i < coords.length; i++) {
      canvasCtx.lineTo(coords[i].x, coords[i].y);
    }
    canvasCtx.stroke();

    coords.forEach(pt => {
      canvasCtx.fillStyle = '#FF8B7B';
      canvasCtx.beginPath();
      canvasCtx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
      canvasCtx.fill();
    });
    canvasCtx.restore();
  }

  function clearCanvas() {
    canvasCtx.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
  }

  function getPixelCoordForGridCell(r, c) {
    const cfg = DIFFICULTY_CONFIG[currentDifficulty];
    const containerRect = boardContainer.getBoundingClientRect();
    const gridRect = tileGrid.getBoundingClientRect();

    const gridOffsetX = gridRect.left - containerRect.left;
    const gridOffsetY = gridRect.top - containerRect.top;

    let x = 0;
    let y = 0;

    if (r >= 1 && r <= cfg.rows && c >= 1 && c <= cfg.cols) {
      const tileEl = getTileEl(r, c);
      if (tileEl) {
        const tRect = tileEl.getBoundingClientRect();
        x = (tRect.left + tRect.width / 2) - containerRect.left;
        y = (tRect.top + tRect.height / 2) - containerRect.top;
        return { x, y };
      }
    }

    const gap = tileSize > 50 ? 5 : 3;
    const cellStep = tileSize + gap;

    if (c === 0) {
      x = gridOffsetX - 11;
    } else if (c > cfg.cols) {
      x = gridOffsetX + gridRect.width + 11;
    } else {
      const refColTile = getTileEl(1, c);
      if (refColTile) {
        const tRect = refColTile.getBoundingClientRect();
        x = (tRect.left + tRect.width / 2) - containerRect.left;
      } else {
        x = gridOffsetX + ((c - 1) * cellStep) + (tileSize / 2);
      }
    }

    if (r === 0) {
      y = gridOffsetY - 11;
    } else if (r > cfg.rows) {
      y = gridOffsetY + gridRect.height + 11;
    } else {
      const refRowTile = getTileEl(r, 1);
      if (refRowTile) {
        const tRect = refRowTile.getBoundingClientRect();
        y = (tRect.top + tRect.height / 2) - containerRect.top;
      } else {
        y = gridOffsetY + ((r - 1) * cellStep) + (tileSize / 2);
      }
    }

    return { x, y };
  }

  function spawnFloatingScore(text, targetEl) {
    const rect = targetEl.getBoundingClientRect();
    const containerRect = boardContainer.getBoundingClientRect();

    const floatEl = document.createElement('div');
    floatEl.className = 'floating-score';
    floatEl.textContent = text;
    floatEl.style.left = `${(rect.left + rect.width / 2) - containerRect.left}px`;
    floatEl.style.top = `${(rect.top + rect.height / 2) - containerRect.top}px`;

    floatLayer.appendChild(floatEl);
    setTimeout(() => floatEl.remove(), 800);
  }

  function showComboBanner(text) {
    const banner = document.createElement('div');
    banner.className = 'combo-banner';
    banner.textContent = text;
    floatLayer.appendChild(banner);
    setTimeout(() => banner.remove(), 950);
  }

  function handleDeadlock() {
    showComboBanner('🔀 Mengacak Ubin...');
    soundController.playShuffle();
    setTimeout(() => {
      engine.shuffle();
      renderBoardDOM();
    }, 600);
  }

  // Level Win
  function handleLevelWin() {
    stopTimer();
    soundController.playWin();

    const timeRatio = remainingTime / maxTime;
    let stars = 1;
    if (timeRatio > 0.4) stars = 2;
    if (timeRatio > 0.65) stars = 3;

    const timeBonus = remainingTime * 20;
    const finalLevelScore = currentLevelScore + timeBonus;
    totalScore += finalLevelScore;

    if (finalLevelScore > bestScores[currentDifficulty]) {
      bestScores[currentDifficulty] = finalLevelScore;
      localStorage.setItem(`tilezy_best_${currentDifficulty}`, finalLevelScore);
    }
    localStorage.setItem('tilezy_score', totalScore);

    document.getElementById('win-score').textContent = `+${finalLevelScore.toLocaleString()}`;
    document.getElementById('win-time').textContent = `${remainingTime}s`;
    document.getElementById('win-total').textContent = totalScore.toLocaleString();

    const starContainer = document.getElementById('win-stars');
    const starEls = starContainer.querySelectorAll('.star');
    starEls.forEach((el, idx) => {
      el.classList.remove('earned');
      if (idx < stars) {
        setTimeout(() => el.classList.add('earned'), 200 + idx * 150);
      }
    });

    modalWin.classList.add('active');
  }

  // Game Over
  function handleGameOver() {
    soundController.playGameOver();
    document.getElementById('gameover-score').textContent = currentLevelScore.toLocaleString();
    document.getElementById('gameover-remaining').textContent = engine.getRemainingCount();
    modalGameOver.classList.add('active');
  }

  // Boosters
  function useHint() {
    if (isPaused || isProcessingMatch) return;
    if (boosters.hint <= 0) {
      showComboBanner('Bantuan Habis!');
      return;
    }

    const hintMove = engine.getHint();
    if (!hintMove) {
      showComboBanner('Tidak ada langkah!');
      return;
    }

    boosters.hint--;
    updateBoosterBadges();
    soundController.playHint();

    clearHints();
    const el1 = getTileEl(hintMove.p1.r, hintMove.p1.c);
    const el2 = getTileEl(hintMove.p2.r, hintMove.p2.c);

    if (el1) el1.classList.add('hinted');
    if (el2) el2.classList.add('hinted');

    drawConnectingPath(hintMove.path);
    setTimeout(clearCanvas, 1200);
  }

  function useShuffle() {
    if (isPaused || isProcessingMatch) return;
    if (boosters.shuffle <= 0) {
      showComboBanner('Acak Habis!');
      return;
    }

    boosters.shuffle--;
    updateBoosterBadges();
    soundController.playShuffle();

    clearHints();
    if (selectedTile) {
      const prevEl = getTileEl(selectedTile.r, selectedTile.c);
      if (prevEl) prevEl.classList.remove('selected');
      selectedTile = null;
    }

    engine.shuffle();
    renderBoardDOM();
    showComboBanner('Papan Diacak! 🔀');
  }

  function useTimePlus() {
    if (isPaused) return;
    if (boosters.time <= 0) {
      showComboBanner('Booster Waktu Habis!');
      return;
    }

    boosters.time--;
    updateBoosterBadges();
    soundController.playHint();

    remainingTime = Math.min(maxTime, remainingTime + 15);
    updateTimerDisplay();
    showComboBanner('+15 Detik! ⏱️');
  }

  function clearHints() {
    tileGrid.querySelectorAll('.tile.hinted').forEach(el => el.classList.remove('hinted'));
  }

  function updateBoosterBadges() {
    hintCountEl.textContent = boosters.hint;
    shuffleCountEl.textContent = boosters.shuffle;
    timeCountEl.textContent = boosters.time;

    localStorage.setItem('tilezy_hint_count', boosters.hint);
    localStorage.setItem('tilezy_shuffle_count', boosters.shuffle);
    localStorage.setItem('tilezy_time_count', boosters.time);

    btnHint.disabled = boosters.hint <= 0;
    btnShuffle.disabled = boosters.shuffle <= 0;
    btnTimePlus.disabled = boosters.time <= 0;
  }

  // Theme Management (5 Themes)
  function setupThemesUI() {
    quickThemeIcon.textContent = THEMES[activeTheme]?.badge || '🍬';
    renderThemesList();
  }

  function renderThemesList() {
    themesContainer.innerHTML = '';
    for (const key in THEMES) {
      const theme = THEMES[key];
      const isAct = key === activeTheme;

      const card = document.createElement('div');
      card.className = `theme-card ${isAct ? 'active' : ''}`;
      card.dataset.theme = key;

      card.innerHTML = `
        <div class="preview-box">
          <span class="theme-preview">${theme.badge}</span>
          <span>${theme.name}</span>
        </div>
        <span class="theme-check">${isAct ? '✓' : ''}</span>
      `;

      card.addEventListener('click', () => {
        soundController.playClick();
        setTheme(key);
      });

      themesContainer.appendChild(card);
    }
  }

  function setTheme(newTheme) {
    if (!THEMES[newTheme]) return;
    activeTheme = newTheme;
    localStorage.setItem('tilezy_theme', activeTheme);
    quickThemeIcon.textContent = THEMES[activeTheme].badge;

    renderThemesList();

    if (viewGame.classList.contains('active')) {
      renderBoardDOM();
    }
  }

  function toggleNextTheme() {
    soundController.playClick();
    const themeKeys = Object.keys(THEMES);
    const curIdx = themeKeys.indexOf(activeTheme);
    const nextIdx = (curIdx + 1) % themeKeys.length;
    setTheme(themeKeys[nextIdx]);
    showComboBanner(`Tema: ${THEMES[activeTheme].name}`);
  }

  function updateBestScoresDisplay() {
    document.getElementById('best-easy').textContent = bestScores.easy.toLocaleString();
    document.getElementById('best-medium').textContent = bestScores.medium.toLocaleString();
    document.getElementById('best-hard').textContent = bestScores.hard.toLocaleString();
  }

  function updateSettingsUI() {
    const sfxBtn = document.getElementById('toggle-sfx');
    const musicBtn = document.getElementById('toggle-music');
    sfxBtn.textContent = soundController.soundEnabled ? 'ON' : 'OFF';
    sfxBtn.classList.toggle('on', soundController.soundEnabled);
    musicBtn.textContent = soundController.musicEnabled ? 'ON' : 'OFF';
    musicBtn.classList.toggle('on', soundController.musicEnabled);
    toggleDarkModeSettings.textContent = isDarkMode ? 'ON' : 'OFF';
    toggleDarkModeSettings.classList.toggle('on', isDarkMode);
  }

  // Controls & Modals Setup
  function setupGameControls() {
    tileGrid.addEventListener('click', (e) => {
      const tile = e.target.closest('.tile');
      if (tile && !tile.classList.contains('empty')) {
        const r = parseInt(tile.dataset.r, 10);
        const c = parseInt(tile.dataset.c, 10);
        handleTileClick(r, c);
      }
    });

    btnHint.addEventListener('click', useHint);
    btnShuffle.addEventListener('click', useShuffle);
    btnTimePlus.addEventListener('click', useTimePlus);
    btnThemeQuick.addEventListener('click', toggleNextTheme);

    btnPause.addEventListener('click', () => {
      soundController.playClick();
      isPaused = true;
      modalPause.classList.add('active');
    });

    document.getElementById('btn-resume').addEventListener('click', () => {
      soundController.playClick();
      isPaused = false;
      modalPause.classList.remove('active');
    });

    document.getElementById('btn-pause-restart').addEventListener('click', () => {
      soundController.playClick();
      modalPause.classList.remove('active');
      startRound();
    });

    document.getElementById('btn-pause-home').addEventListener('click', () => {
      soundController.playClick();
      modalPause.classList.remove('active');
      switchView('home');
    });

    document.getElementById('btn-win-replay').addEventListener('click', () => {
      soundController.playClick();
      modalWin.classList.remove('active');
      startRound();
    });

    document.getElementById('btn-win-next').addEventListener('click', () => {
      soundController.playClick();
      modalWin.classList.remove('active');
      currentLevel++;
      startRound();
    });

    document.getElementById('btn-gameover-retry').addEventListener('click', () => {
      soundController.playClick();
      modalGameOver.classList.remove('active');
      startRound();
    });

    document.getElementById('btn-gameover-home').addEventListener('click', () => {
      soundController.playClick();
      modalGameOver.classList.remove('active');
      switchView('home');
    });
  }

  function setupModals() {
    document.getElementById('btn-close-score').addEventListener('click', () => {
      soundController.playClick();
      modalScore.classList.remove('active');
      setActiveTab(tabHome);
    });

    document.getElementById('btn-close-themes').addEventListener('click', () => {
      soundController.playClick();
      modalThemes.classList.remove('active');
      setActiveTab(tabHome);
    });

    document.getElementById('btn-close-settings').addEventListener('click', () => {
      soundController.playClick();
      modalSettings.classList.remove('active');
      setActiveTab(tabHome);
    });

    document.getElementById('toggle-sfx').addEventListener('click', (e) => {
      const enabled = soundController.toggleSound();
      e.target.textContent = enabled ? 'ON' : 'OFF';
      e.target.classList.toggle('on', enabled);
      soundController.playClick();
    });

    document.getElementById('toggle-music').addEventListener('click', (e) => {
      const enabled = soundController.toggleMusic();
      e.target.textContent = enabled ? 'ON' : 'OFF';
      e.target.classList.toggle('on', enabled);
      soundController.playClick();
    });
  }

  function handleResize() {
    if (viewGame.classList.contains('active')) {
      calculateAndRenderGrid();
    }
  }

  // PWA setup
  function setupPWA() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js?v=2.1')
          .then(reg => {
            reg.update();
            console.log('Tilezy PWA Ready!');
          })
          .catch(err => console.log('SW error:', err));
      });
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      pwaBanner.style.display = 'flex';
    });

    pwaBanner.addEventListener('click', (e) => {
      if (e.target === btnCloseInstall) return;
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then(() => {
          deferredInstallPrompt = null;
          pwaBanner.style.display = 'none';
        });
      }
    });

    btnCloseInstall.addEventListener('click', (e) => {
      e.stopPropagation();
      pwaBanner.style.display = 'none';
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
