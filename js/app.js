/**
 * Tilezy - Cozy Pastel Onet Game Logic
 * Dedicated Themes Page with 4-tile previews,
 * Relaxed No-Timer Mode, Magic Auto-Pair Booster,
 * and Cute Dancing Mascot + Confetti Level Complete Celebration!
 */

(() => {
  // Difficulty Configurations (NO TIMER, NO GRAVITY - tiles stay in place!)
  const DIFFICULTY_CONFIG = {
    easy: {
      name: 'Mudah',
      rows: 6,
      cols: 6,
      types: 8
    },
    medium: {
      name: 'Sedang',
      rows: 8,
      cols: 8,
      types: 12
    },
    hard: {
      name: 'Sulit',
      rows: 8,
      cols: 12,
      types: 16
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
    magic: parseInt(localStorage.getItem('tilezy_magic_count') || '2', 10)
  };

  let activeTheme = localStorage.getItem('tilezy_theme') || 'animals';
  let isDarkMode = localStorage.getItem('tilezy_dark_mode') === 'true';
  let playerUsername = localStorage.getItem('tilezy_username') || '';

  // Game Engine State
  let engine = null;
  let selectedTile = null;
  let isProcessingMatch = false;
  let isPaused = false;
  let currentLevelScore = 0;
  let comboCount = 0;
  let maxComboInRound = 1;
  let lastMatchTime = 0;
  let tileSize = 44;
  let previousView = 'home';

  // State Persistence: Simpan & Lanjutkan Langkah Terakhir
  const SAVE_GAME_KEY = 'tilezy_saved_game';

  function saveGameState() {
    if (!engine || !viewGame || !viewGame.classList.contains('active')) return;
    if (engine.isCleared()) {
      clearSavedGameState();
      return;
    }
    const state = {
      difficulty: currentDifficulty,
      level: currentLevel,
      levelScore: currentLevelScore,
      totalScore: totalScore,
      theme: activeTheme,
      rows: engine.rows,
      cols: engine.cols,
      numTypes: engine.numTypes,
      board: engine.board,
      savedAt: Date.now()
    };
    try {
      localStorage.setItem(SAVE_GAME_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Gagal menyimpan progres:', e);
    }
  }

  function getSavedGameState() {
    try {
      const raw = localStorage.getItem(SAVE_GAME_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (parsed && parsed.board && Array.isArray(parsed.board) && parsed.difficulty === currentDifficulty) {
        return parsed;
      }
    } catch (e) { }
    return null;
  }

  function clearSavedGameState() {
    try {
      localStorage.removeItem(SAVE_GAME_KEY);
    } catch (e) { }
  }

  // DOM Views
  const viewWelcome = document.getElementById('view-welcome');
  const viewHome = document.getElementById('view-home');
  const viewThemesPage = document.getElementById('view-themes-page');
  const viewGame = document.getElementById('view-game');

  // DOM Elements - Welcome Screen
  const btnToggleDarkWelcome = document.getElementById('btn-toggle-dark-welcome');
  const btnWelcomeBack = document.getElementById('btn-welcome-back');
  const btnWelcomeLogout = document.getElementById('btn-welcome-logout');
  const inputWelcomeUsername = document.getElementById('input-welcome-username');
  const welcomeUsernameHelper = document.getElementById('welcome-username-helper');
  const btnWelcomeSubmit = document.getElementById('btn-welcome-submit');

  // DOM Elements - Home
  const diffPills = document.querySelectorAll('.diff-pill');
  const btnHomePlay = document.getElementById('btn-home-play');
  const tabHome = document.getElementById('tab-home');
  const tabScore = document.getElementById('tab-score');
  const tabThemes = document.getElementById('tab-themes');
  const tabSettings = document.getElementById('tab-settings');
  const btnToggleDarkMode = document.getElementById('btn-toggle-dark-mode');

  // DOM Elements - Themes Page
  const btnBackThemes = document.getElementById('btn-back-themes');
  const themesPageGrid = document.getElementById('themes-page-grid');

  // DOM Elements - Game
  const btnBackHome = document.getElementById('btn-back-home');
  const levelDisplay = document.getElementById('level-display');
  const remainingDisplay = document.getElementById('remaining-display');
  const scoreDisplay = document.getElementById('score-display');
  const btnGameReload = document.getElementById('btn-game-reload');
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
  const magicCountEl = document.getElementById('magic-count');
  const btnHint = document.getElementById('btn-hint');
  const btnShuffle = document.getElementById('btn-shuffle');
  const btnMagicPair = document.getElementById('btn-magic-pair');
  const btnThemeQuick = document.getElementById('btn-theme-quick');
  const quickThemeIcon = document.getElementById('quick-theme-icon');

  // Modals
  const modalScore = document.getElementById('modal-score');
  const modalSettings = document.getElementById('modal-settings');
  const modalPause = document.getElementById('modal-pause');
  const modalWin = document.getElementById('modal-win');
  const toggleDarkModeSettings = document.getElementById('toggle-dark-mode-settings');

  // Profile Elements
  const btnOpenProfile = document.getElementById('btn-open-profile');
  const homeUsernameBadge = document.getElementById('home-username-badge');
  const scoreUsernameDisplay = document.getElementById('score-username-display');
  const btnEditUsernameScore = document.getElementById('btn-edit-username-score');
  const btnLogoutScore = document.getElementById('btn-logout-score');
  const btnEditUsernameSettings = document.getElementById('btn-edit-username-settings');
  const btnLogoutSettings = document.getElementById('btn-logout-settings');

  // Confetti Canvas
  const confettiCanvas = document.getElementById('confetti-canvas');
  const confettiCtx = confettiCanvas.getContext('2d');
  let confettiParticles = [];
  let confettiAnimId = null;

  // PWA Banner
  const pwaBanner = document.getElementById('pwa-install-banner');
  const btnTriggerInstall = document.getElementById('btn-trigger-install');
  const btnCloseInstall = document.getElementById('btn-close-install');
  let deferredInstallPrompt = null;
  let isInstallDismissed = sessionStorage.getItem('tilezy_pwa_dismissed') === 'true';
  const isPwaInstalled = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  function showInstallBanner() {
    if (!pwaBanner || isPwaInstalled || isInstallDismissed) return;
    if (viewHome.classList.contains('active')) {
      pwaBanner.style.display = 'flex';
    }
  }

  // Initialize Tilezy
  function init() {
    // Check clean link parameter ?new=1 or ?reset=1
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('new') || urlParams.has('reset')) {
      resetAllGameData(false);
      playerUsername = '';
      localStorage.removeItem('tilezy_username');
    }

    applyDarkMode(isDarkMode);
    updateUsernameDisplay();
    setupDifficultySelector();
    setupTabNavigation();
    setupThemesPage();
    setupModals();
    setupWelcomeScreen();
    setupGameControls();
    updateBoosterBadges();
    setupPWA();
    setupPullToRefresh();
    setupSwipeToBack();
    setupOfflineDetection();

    // Tampilan awal: jika belum memiliki username, tampilkan view-welcome yang mandiri
    if (!playerUsername) {
      switchView('welcome', false);
    } else {
      switchView('home', false);
    }

    window.addEventListener('resize', handleResize);
  }

  function resetAllGameData(notify = true) {
    clearSavedGameState();
    localStorage.removeItem('tilezy_score');
    localStorage.removeItem('tilezy_best_easy');
    localStorage.removeItem('tilezy_best_medium');
    localStorage.removeItem('tilezy_best_hard');
    localStorage.removeItem('tilezy_hint_count');
    localStorage.removeItem('tilezy_shuffle_count');
    localStorage.removeItem('tilezy_magic_count');

    totalScore = 0;
    bestScores = { easy: 0, medium: 0, hard: 0 };
    boosters = { hint: 3, shuffle: 3, magic: 2 };
    currentLevel = 1;
    currentLevelScore = 0;

    updateBestScoresDisplay();
    updateBoosterBadges();

    if (notify) {
      alert('Progres permainan berhasil direset ke Level 1!');
    }
  }

  // Dark Mode Management
  function applyDarkMode(enable) {
    isDarkMode = enable;
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('tilezy_dark_mode', isDarkMode);

    const updateToggleBtn = (btn) => {
      if (!btn) return;
      const icon = btn.querySelector('.mode-icon');
      const text = btn.querySelector('.mode-text');
      if (icon) icon.textContent = isDarkMode ? '☀️' : '🌙';
      if (text) text.textContent = isDarkMode ? 'Light' : 'Dark';
    };

    updateToggleBtn(btnToggleDarkMode);
    updateToggleBtn(btnToggleDarkWelcome);

    if (toggleDarkModeSettings) {
      if (isDarkMode) {
        toggleDarkModeSettings.textContent = 'ON';
        toggleDarkModeSettings.classList.add('on');
      } else {
        toggleDarkModeSettings.textContent = 'OFF';
        toggleDarkModeSettings.classList.remove('on');
      }
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

  let currentActiveView = 'home';

  // View Switcher (welcome, home, themes, game) dengan dukungan History API
  function switchView(viewName, updateHistory = true) {
    const fromView = currentActiveView;
    currentActiveView = viewName;

    // Bersihkan status aktif dari semua view screen
    [viewWelcome, viewHome, viewThemesPage, viewGame].forEach(v => {
      if (v) v.classList.remove('active');
    });

    if (viewName === 'welcome') {
      if (pwaBanner) pwaBanner.style.display = 'none';
      if (viewWelcome) viewWelcome.classList.add('active');
      if (inputWelcomeUsername) {
        inputWelcomeUsername.value = playerUsername || '';
        inputWelcomeUsername.classList.remove('input-error');
        setTimeout(() => inputWelcomeUsername.focus(), 250);
      }
      if (welcomeUsernameHelper) {
        welcomeUsernameHelper.textContent = '3–16 karakter: huruf, angka, atau garis bawah (_).';
        welcomeUsernameHelper.classList.remove('error');
      }
      if (btnWelcomeBack) {
        btnWelcomeBack.style.display = playerUsername ? 'inline-flex' : 'none';
      }
      if (btnWelcomeLogout) {
        btnWelcomeLogout.style.display = playerUsername ? 'flex' : 'none';
      }
      if (updateHistory) {
        history.pushState({ view: 'welcome' }, '', '#welcome');
      }
    } else if (viewName === 'game') {
      if (pwaBanner) pwaBanner.style.display = 'none';
      previousView = fromView === 'themes' ? (previousView || 'home') : 'home';
      if (viewGame) viewGame.classList.add('active');
      startRound();
      if (updateHistory) {
        history.pushState({ view: 'game' }, '', '#game');
      }
    } else if (viewName === 'themes') {
      if (pwaBanner) pwaBanner.style.display = 'none';
      previousView = fromView === 'themes' ? (previousView || 'home') : fromView;
      renderThemesPage();
      if (viewThemesPage) viewThemesPage.classList.add('active');
      if (updateHistory) {
        history.pushState({ view: 'themes' }, '', '#themes');
      }
    } else {
      currentActiveView = 'home';
      if (viewHome) viewHome.classList.add('active');
      updateBestScoresDisplay();
      updateUsernameDisplay();
      setActiveTab(tabHome);
      showInstallBanner();
      if (updateHistory && window.location.hash) {
        history.pushState({ view: 'home' }, '', window.location.pathname);
      }
    }
  }

  // Navigasi Kembali (Digunakan oleh tombol back, swipe gesture, & popstate)
  function navigateBack() {
    soundController.playClick();

    // 1. Jika ada modal yang aktif (Score, Settings, Pause, Win), tutup modalnya terlebih dahulu
    const activeModal = document.querySelector('.modal-overlay.active');
    if (activeModal) {
      activeModal.classList.remove('active');
      return;
    }

    // 2. Jika di tampilan welcome (dan pemain sudah punya nama sebelumnya), kembali ke home
    if (currentActiveView === 'welcome') {
      if (playerUsername) {
        switchView('home', false);
        if (window.location.hash) {
          history.replaceState({ view: 'home' }, '', window.location.pathname);
        }
      }
      return;
    }

    // 3. Jika di halaman tema, kembali ke halaman sebelumnya (Home atau Game)
    if (currentActiveView === 'themes') {
      const targetView = previousView || 'home';
      switchView(targetView, false);
      if (window.location.hash) {
        history.replaceState({ view: targetView }, '', targetView === 'home' ? window.location.pathname : '#' + targetView);
      }
      return;
    }

    // 4. Jika di arena game, kembali ke menu utama (simpan progres langkah terakhir)
    if (currentActiveView === 'game') {
      saveGameState();
      switchView('home', false);
      if (window.location.hash) {
        history.replaceState({ view: 'home' }, '', window.location.pathname);
      }
      return;
    }
  }

  // Setup Tabs & Navigation
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
      previousView = 'home';
      switchView('themes');
    });

    tabSettings.addEventListener('click', () => {
      soundController.playClick();
      updateSettingsUI();
      modalSettings.classList.add('active');
    });

    btnHomePlay.addEventListener('click', () => {
      soundController.playClick();
      // Pastikan ada username default jika belum ada
      if (!playerUsername) {
        playerUsername = 'Pemain';
        try {
          localStorage.setItem('tilezy_username', playerUsername);
        } catch (e) { }
        updateUsernameDisplay();
      }
      // LANGSUNG MULAI GAME! Tidak akan pernah kembali ke layar pengisian nama
      switchView('game');
    });

    if (btnOpenProfile) {
      btnOpenProfile.addEventListener('click', () => {
        soundController.playClick();
        switchView('welcome');
      });
    }

    if (btnEditUsernameScore) {
      btnEditUsernameScore.addEventListener('click', () => {
        soundController.playClick();
        modalScore.classList.remove('active');
        switchView('welcome');
      });
    }

    if (btnLogoutScore) {
      btnLogoutScore.addEventListener('click', () => {
        handleLogout();
      });
    }

    if (btnEditUsernameSettings) {
      btnEditUsernameSettings.addEventListener('click', () => {
        soundController.playClick();
        modalSettings.classList.remove('active');
        switchView('welcome');
      });
    }

    if (btnLogoutSettings) {
      btnLogoutSettings.addEventListener('click', () => {
        handleLogout();
      });
    }

    btnBackHome.addEventListener('click', () => {
      navigateBack();
    });

    btnToggleDarkMode.addEventListener('click', () => {
      soundController.playClick();
      toggleDarkMode();
    });

    toggleDarkModeSettings.addEventListener('click', () => {
      soundController.playClick();
      toggleDarkMode();
    });

    btnBackThemes.addEventListener('click', () => {
      navigateBack();
    });
  }

  // Mobile Pull-to-Refresh Gesture (Alami tanpa tombol & tanpa logo)
  function setupPullToRefresh() {
    let startY = 0;
    let isPulling = false;
    const homeContainer = document.querySelector('.home-container');
    if (!homeContainer) return;

    homeContainer.addEventListener('touchstart', (e) => {
      if (viewHome.classList.contains('active') && homeContainer.scrollTop <= 0) {
        startY = e.touches[0].pageY;
        isPulling = true;
      } else {
        isPulling = false;
      }
    }, { passive: true });

    homeContainer.addEventListener('touchmove', (e) => {
      if (!isPulling) return;
      const currentY = e.touches[0].pageY;
      const diffY = currentY - startY;
      if (diffY < 0) {
        isPulling = false;
      }
    }, { passive: true });

    homeContainer.addEventListener('touchend', (e) => {
      if (!isPulling) return;
      const endY = e.changedTouches[0].pageY;
      const diffY = endY - startY;
      isPulling = false;
      if (diffY > 80 && homeContainer.scrollTop <= 0 && viewHome.classList.contains('active')) {
        window.location.reload();
      }
    }, { passive: true });
  }

  // Setup Gesture Swipe-to-Back di Layar HP
  function setupSwipeToBack() {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let isSwiping = false;

    // Pasang listener di halaman Tema dan Game
    const targets = [viewThemesPage, viewGame];

    targets.forEach(target => {
      if (!target) return;

      target.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          touchStartTime = Date.now();
          isSwiping = true;
        }
      }, { passive: true });

      target.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = currentX - touchStartX;
        const diffY = currentY - touchStartY;

        // Jika menggeser ke kiri atau dominan vertikal (scroll ke atas/bawah), batalkan swipe back
        if (diffX < -10 || Math.abs(diffY) > Math.abs(diffX) * 1.1) {
          isSwiping = false;
        }
      }, { passive: true });

      target.addEventListener('touchend', (e) => {
        if (!isSwiping) return;
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;
        const duration = Date.now() - touchStartTime;
        isSwiping = false;

        // Gestur swipe ke kanan (geser dari kiri ke kanan minimal 50px dalam waktu wajar)
        if (diffX > 50 && Math.abs(diffX) > Math.abs(diffY) * 1.1 && duration < 500) {
          navigateBack();
        }
      }, { passive: true });
    });

    // Handle Browser Popstate (tombol back fisik HP atau swipe gesture sistem Android/iOS)
    window.addEventListener('popstate', (e) => {
      const activeModal = document.querySelector('.modal-overlay.active');
      if (activeModal) {
        activeModal.classList.remove('active');
        history.pushState({ view: currentActiveView }, '', currentActiveView === 'home' ? window.location.pathname : '#' + currentActiveView);
        return;
      }

      const stateView = (e.state && e.state.view) || (window.location.hash ? window.location.hash.replace('#', '') : 'home');

      if (stateView === 'welcome') {
        switchView('welcome', false);
      } else if (stateView === 'themes') {
        switchView('themes', false);
      } else if (stateView === 'game') {
        switchView('game', false);
      } else {
        switchView('home', false);
      }
    });

    // Set initial history state
    if (!window.location.hash) {
      history.replaceState({ view: 'home' }, '', window.location.pathname);
    }
  }

  function setActiveTab(activeEl) {
    [tabHome, tabScore, tabThemes, tabSettings].forEach(tab => {
      tab.classList.toggle('active', tab === activeEl);
    });
  }

  // DEDICATED THEMES PAGE SETUP (5 Themes with 4 preview tiles each)
  function setupThemesPage() {
    quickThemeIcon.textContent = THEMES[activeTheme]?.badge || '🍬';
    renderThemesPage();
  }

  function renderThemesPage() {
    themesPageGrid.innerHTML = '';

    for (const key in THEMES) {
      const theme = THEMES[key];
      const isAct = key === activeTheme;

      const card = document.createElement('div');
      card.className = `theme-card-box ${isAct ? 'active' : ''}`;
      card.dataset.theme = key;

      // First 4 icons as preview
      const previewSvgs = theme.icons.slice(0, 4).map(svg => `
        <div class="mini-preview-tile">
          ${svg}
        </div>
      `).join('');

      card.innerHTML = `
        <div class="theme-badge-name">
          <span style="font-size: 1.3rem;">${theme.badge}</span>
          <span>${theme.name}</span>
        </div>
        <div class="theme-preview-tiles">
          ${previewSvgs}
        </div>
        <div class="theme-select-indicator">
          ${isAct ? 'Dipilih ✓' : 'Pilih'}
        </div>
      `;

      card.addEventListener('click', () => {
        soundController.playClick();
        setTheme(key);
      });

      themesPageGrid.appendChild(card);
    }
  }

  function setTheme(newTheme) {
    if (!THEMES[newTheme]) return;
    activeTheme = newTheme;
    localStorage.setItem('tilezy_theme', activeTheme);
    quickThemeIcon.textContent = THEMES[activeTheme].badge;

    renderThemesPage();

    if (viewGame.classList.contains('active')) {
      renderBoardDOM();
    }
  }

  // Start round (NO TIMER, NO GRAVITY)
  function startRound(forceNew = false) {
    const saved = !forceNew ? getSavedGameState() : null;

    if (saved && saved.board && Array.isArray(saved.board)) {
      // Pulihkan langkah terakhir yang tersimpan persis di mana pemain berhenti!
      engine = new OnetEngine(saved.rows, saved.cols, saved.numTypes || 16, 'none');
      engine.board = saved.board;
      currentLevel = saved.level || currentLevel;
      currentLevelScore = saved.levelScore || 0;
    } else {
      const cfg = DIFFICULTY_CONFIG[currentDifficulty] || DIFFICULTY_CONFIG.easy;
      let r = cfg.rows;
      let c = cfg.cols;

      // Adaptasi mode Sulit: 8 kolom x 12 baris di layar potret HP (96 ubin)
      // agar pas dan tidak terpotong ke samping di layar ponsel sempit
      const isPortrait = boardArea ? (boardArea.clientHeight >= boardArea.clientWidth) : (window.innerHeight > window.innerWidth);
      if (currentDifficulty === 'hard') {
        r = isPortrait ? 12 : 8;
        c = isPortrait ? 8 : 12;
      }

      engine = new OnetEngine(r, c, cfg.types, 'none');
      currentLevelScore = 0;
    }

    comboCount = 0;
    maxComboInRound = 1;
    lastMatchTime = 0;
    selectedTile = null;
    isProcessingMatch = false;
    isPaused = false;

    updateHeaderUI();
    calculateAndRenderGrid();
    saveGameState();
  }

  function updateHeaderUI() {
    const cfg = DIFFICULTY_CONFIG[currentDifficulty] || DIFFICULTY_CONFIG.easy;
    levelDisplay.textContent = `${cfg.name} · Lv. ${currentLevel}`;
    scoreDisplay.textContent = currentLevelScore.toLocaleString();
    if (engine) {
      remainingDisplay.textContent = `${engine.getRemainingCount()} Ubin`;
    }
  }

  // Responsive Grid Calculation (Menjamin seluruh ubin muat tanpa terpotong)
  function calculateAndRenderGrid() {
    if (!engine) return;

    const rCount = engine.rows;
    const cCount = engine.cols;

    // Sediakan ruang bernapas aman 28-36px untuk lintasan garis luar di sekeliling papan
    const availWidth = Math.max(180, boardArea.clientWidth - 32);
    const availHeight = Math.max(180, boardArea.clientHeight - 32);

    const gap = cCount >= 10 ? 2 : 3;

    // Hitung ukuran ubin yang pas tanpa overflow
    const sizeW = Math.floor((availWidth - (cCount - 1) * gap) / cCount);
    const sizeH = Math.floor((availHeight - (rCount - 1) * gap) / rCount);
    tileSize = Math.min(56, Math.max(20, Math.min(sizeW, sizeH)));

    tileGrid.style.gridTemplateColumns = `repeat(${cCount}, ${tileSize}px)`;
    tileGrid.style.gap = `${gap}px`;

    renderBoardDOM();
    updateCanvasSize();
  }

  function updateCanvasSize() {
    const rect = boardArea.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    lineCanvas.width = Math.round(rect.width * dpr);
    lineCanvas.height = Math.round(rect.height * dpr);
    lineCanvas.style.width = `${rect.width}px`;
    lineCanvas.style.height = `${rect.height}px`;
    canvasCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // Render DOM Tiles from Engine
  function renderBoardDOM() {
    if (!engine) return;
    tileGrid.innerHTML = '';
    const theme = THEMES[activeTheme] || THEMES.animals || THEMES.fruits;
    const rCount = engine.rows;
    const cCount = engine.cols;

    for (let r = 1; r <= rCount; r++) {
      for (let c = 1; c <= cCount; c++) {
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

  // Execute Match (NO GRAVITY - Empty space stays where it is!)
  function executeMatch(p1, p2, path) {
    const now = Date.now();
    if (now - lastMatchTime < 3500) {
      comboCount++;
    } else {
      comboCount = 1;
    }
    lastMatchTime = now;
    if (comboCount > maxComboInRound) {
      maxComboInRound = comboCount;
    }

    drawConnectingPath(path);
    soundController.playLine();
    soundController.playMatch(comboCount);
    soundController.vibrate(30);

    const basePts = 100;
    const comboPts = comboCount > 1 ? comboCount * 50 : 0;
    const earned = basePts + comboPts;
    currentLevelScore += earned;
    updateHeaderUI();

    const el1 = getTileEl(p1.r, p1.c);
    const el2 = getTileEl(p2.r, p2.c);
    if (el2) spawnFloatingScore(`+${earned}`, el2);
    if (comboCount > 1) showComboBanner(`COMBO x${comboCount}! ✨`);

    setTimeout(() => {
      if (el1) el1.classList.add('clearing');
      if (el2) el2.classList.add('clearing');
    }, 120);

    setTimeout(() => {
      engine.removePair(p1.r, p1.c, p2.r, p2.c);
      clearCanvas();
      selectedTile = null;

      renderBoardDOM();
      isProcessingMatch = false;
      updateHeaderUI();

      if (engine.isCleared()) {
        handleLevelWin();
      } else if (!engine.hasValidMoves()) {
        handleDeadlock();
      } else {
        saveGameState();
      }
    }, 240);
  }

  // Draw connecting beam (Garis penghubung ubin menyala utuh tanpa terpotong)
  function drawConnectingPath(path) {
    clearCanvas();
    if (!path || path.length < 2) return;

    const coords = path.map(pt => getPixelCoordForGridCell(pt.r, pt.c));

    // 1. Lapisan luar bercahaya lembut (Outer Glow Halo)
    canvasCtx.save();
    canvasCtx.shadowColor = '#FFD66B';
    canvasCtx.shadowBlur = 8;
    canvasCtx.strokeStyle = '#FFE082';
    canvasCtx.lineWidth = 7;
    canvasCtx.lineCap = 'round';
    canvasCtx.lineJoin = 'round';

    canvasCtx.beginPath();
    canvasCtx.moveTo(coords[0].x, coords[0].y);
    for (let i = 1; i < coords.length; i++) {
      canvasCtx.lineTo(coords[i].x, coords[i].y);
    }
    canvasCtx.stroke();
    canvasCtx.restore();

    // 2. Garis inti coral terang (Vibrant Inner Core Beam)
    canvasCtx.save();
    canvasCtx.strokeStyle = '#FF6B6B';
    canvasCtx.lineWidth = 3;
    canvasCtx.lineCap = 'round';
    canvasCtx.lineJoin = 'round';

    canvasCtx.beginPath();
    canvasCtx.moveTo(coords[0].x, coords[0].y);
    for (let i = 1; i < coords.length; i++) {
      canvasCtx.lineTo(coords[i].x, coords[i].y);
    }
    canvasCtx.stroke();
    canvasCtx.restore();

    // 3. Titik simpul di setiap belokan & ujung garis (Node Joints)
    coords.forEach(pt => {
      canvasCtx.save();
      canvasCtx.fillStyle = '#FF6B6B';
      canvasCtx.beginPath();
      canvasCtx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
      canvasCtx.fill();

      canvasCtx.fillStyle = '#FFFFFF';
      canvasCtx.beginPath();
      canvasCtx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
      canvasCtx.fill();
      canvasCtx.restore();
    });
  }

  function clearCanvas() {
    canvasCtx.save();
    canvasCtx.setTransform(1, 0, 0, 1, 0, 0);
    canvasCtx.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
    canvasCtx.restore();
  }

  function getPixelCoordForGridCell(r, c) {
    const rMax = engine ? engine.rows : (DIFFICULTY_CONFIG[currentDifficulty]?.rows || 8);
    const cMax = engine ? engine.cols : (DIFFICULTY_CONFIG[currentDifficulty]?.cols || 8);
    const canvasRect = lineCanvas.getBoundingClientRect();

    // Jika sel berada di dalam papan ubin (1 <= r <= rMax && 1 <= c <= cMax)
    if (r >= 1 && r <= rMax && c >= 1 && c <= cMax) {
      const tileEl = getTileEl(r, c);
      if (tileEl) {
        const tRect = tileEl.getBoundingClientRect();
        return {
          x: (tRect.left + tRect.width / 2) - canvasRect.left,
          y: (tRect.top + tRect.height / 2) - canvasRect.top
        };
      }
    }

    // Ambil batas koordinat ubin sudut pertama (1,1) dan terakhir (rMax, cMax)
    const firstTile = getTileEl(1, 1);
    const lastTile = getTileEl(rMax, cMax);

    let firstX = 24, firstY = 24, lastX = canvasRect.width - 24, lastY = canvasRect.height - 24;
    if (firstTile && lastTile) {
      const fRect = firstTile.getBoundingClientRect();
      const lRect = lastTile.getBoundingClientRect();
      firstX = (fRect.left + fRect.width / 2) - canvasRect.left;
      firstY = (fRect.top + fRect.height / 2) - canvasRect.top;
      lastX = (lRect.left + lRect.width / 2) - canvasRect.left;
      lastY = (lRect.top + lRect.height / 2) - canvasRect.top;
    }

    const halfTile = tileSize / 2;
    const leftEdge = firstX - halfTile;
    const rightEdge = lastX + halfTile;
    const topEdge = firstY - halfTile;
    const bottomEdge = lastY + halfTile;

    // Jarak lintasan luar (di luar sisi ubin, namun tetap di dalam canvas & layar)
    const laneDistX = Math.max(8, Math.min(18, Math.round((leftEdge - 4) * 0.75)));
    const laneDistY = Math.max(10, Math.min(22, Math.round((topEdge - 4) * 0.85)));

    let x = 0;
    let y = 0;

    // Hitung koordinat X
    if (c === 0) {
      // Lintasan luar sebelah kiri
      x = Math.max(5, leftEdge - laneDistX);
    } else if (c > cMax) {
      // Lintasan luar sebelah kanan
      x = Math.min(canvasRect.width - 5, rightEdge + laneDistX);
    } else {
      // Sejajar kolom c
      const colTile = getTileEl(1, c) || getTileEl(Math.min(rMax, Math.max(1, r)), c);
      if (colTile) {
        const tRect = colTile.getBoundingClientRect();
        x = (tRect.left + tRect.width / 2) - canvasRect.left;
      } else {
        const step = (lastX - firstX) / Math.max(1, cMax - 1);
        x = firstX + (c - 1) * step;
      }
    }

    // Hitung koordinat Y
    if (r === 0) {
      // Lintasan luar sebelah atas
      y = Math.max(5, topEdge - laneDistY);
    } else if (r > rMax) {
      // Lintasan luar sebelah bawah
      y = Math.min(canvasRect.height - 5, bottomEdge + laneDistY);
    } else {
      // Sejajar baris r
      const rowTile = getTileEl(r, 1) || getTileEl(r, Math.min(cMax, Math.max(1, c)));
      if (rowTile) {
        const tRect = rowTile.getBoundingClientRect();
        y = (tRect.top + tRect.height / 2) - canvasRect.top;
      } else {
        const step = (lastY - firstY) / Math.max(1, rMax - 1);
        y = firstY + (r - 1) * step;
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

  // CUTE LEVEL WIN CELEBRATION (Dancing Mascot + Confetti Shower)
  function handleLevelWin() {
    clearSavedGameState();
    soundController.playWin();

    totalScore += currentLevelScore;
    if (currentLevelScore > bestScores[currentDifficulty]) {
      bestScores[currentDifficulty] = currentLevelScore;
      localStorage.setItem(`tilezy_best_${currentDifficulty}`, currentLevelScore);
    }
    localStorage.setItem('tilezy_score', totalScore);

    // Populate win modal stats
    document.getElementById('win-score').textContent = `+${currentLevelScore.toLocaleString()}`;
    document.getElementById('win-combo').textContent = `x${maxComboInRound}`;
    document.getElementById('win-total').textContent = totalScore.toLocaleString();

    // 3 Golden Stars
    const starContainer = document.getElementById('win-stars');
    const starEls = starContainer.querySelectorAll('.star');
    starEls.forEach((el, idx) => {
      el.classList.remove('earned');
      setTimeout(() => el.classList.add('earned'), 200 + idx * 150);
    });

    // Launch Confetti Shower!
    startConfettiShower();

    const winTitle = modalWin.querySelector('.modal-title');
    if (winTitle) {
      winTitle.textContent = playerUsername ? `HEBAT, ${playerUsername}! 🎉` : 'HEBAT BANGET! 🎉';
    }

    modalWin.classList.add('active');
  }

  // CONFETTI SHOWER GENERATOR
  function startConfettiShower() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    confettiParticles = [];

    const colors = ['#FF8B7B', '#FFD66B', '#9CD9C8', '#B9ACF5', '#FFA96B'];
    for (let i = 0; i < 60; i++) {
      confettiParticles.push({
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * -confettiCanvas.height,
        w: 8 + Math.random() * 8,
        h: 12 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 3,
        vy: 3 + Math.random() * 4,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8
      });
    }

    if (confettiAnimId) cancelAnimationFrame(confettiAnimId);
    let frames = 0;

    function renderConfetti() {
      frames++;
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

      confettiParticles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rotSpeed;

        confettiCtx.save();
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate((p.rot * Math.PI) / 180);
        confettiCtx.fillStyle = p.color;
        confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        confettiCtx.restore();
      });

      if (frames < 200) {
        confettiAnimId = requestAnimationFrame(renderConfetti);
      } else {
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      }
    }

    renderConfetti();
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
    saveGameState();
  }

  // Magic Auto-Match Booster (matches 1 pair instantly!)
  function useMagicPair() {
    if (isPaused || isProcessingMatch) return;
    if (boosters.magic <= 0) {
      showComboBanner('Sihir Habis!');
      return;
    }

    const move = engine.getHint();
    if (!move) {
      showComboBanner('Tidak ada langkah!');
      return;
    }

    boosters.magic--;
    updateBoosterBadges();
    showComboBanner('🪄 Sihir Memasangkan!');

    clearHints();
    if (selectedTile) {
      const prevEl = getTileEl(selectedTile.r, selectedTile.c);
      if (prevEl) prevEl.classList.remove('selected');
      selectedTile = null;
    }

    isProcessingMatch = true;
    executeMatch(move.p1, move.p2, move.path);
  }

  function clearHints() {
    tileGrid.querySelectorAll('.tile.hinted').forEach(el => el.classList.remove('hinted'));
  }

  function updateBoosterBadges() {
    hintCountEl.textContent = boosters.hint;
    shuffleCountEl.textContent = boosters.shuffle;
    magicCountEl.textContent = boosters.magic;

    localStorage.setItem('tilezy_hint_count', boosters.hint);
    localStorage.setItem('tilezy_shuffle_count', boosters.shuffle);
    localStorage.setItem('tilezy_magic_count', boosters.magic);

    btnHint.disabled = boosters.hint <= 0;
    btnShuffle.disabled = boosters.shuffle <= 0;
    btnMagicPair.disabled = boosters.magic <= 0;
  }

  function updateBestScoresDisplay() {
    document.getElementById('best-easy').textContent = bestScores.easy.toLocaleString();
    document.getElementById('best-medium').textContent = bestScores.medium.toLocaleString();
    document.getElementById('best-hard').textContent = bestScores.hard.toLocaleString();
    if (scoreUsernameDisplay) {
      scoreUsernameDisplay.textContent = playerUsername || 'Belum ada';
    }
  }

  // ========================================================
  // WELCOME SCREEN & USERNAME LOGIC (TAMPILAN AWAL MANDIRI)
  // ========================================================
  let isSubmittingName = false;

  function handleWelcomeSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (isSubmittingName) return;
    isSubmittingName = true;
    setTimeout(() => { isSubmittingName = false; }, 300);

    let rawVal = (inputWelcomeUsername ? inputWelcomeUsername.value : '').trim();
    if (!rawVal) {
      rawVal = 'Pemain';
    }

    if (rawVal.length > 20) {
      rawVal = rawVal.substring(0, 20);
    }

    playerUsername = rawVal;
    try {
      localStorage.setItem('tilezy_username', playerUsername);
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }

    updateUsernameDisplay();

    try {
      if (typeof soundController.playChime === 'function') {
        soundController.playChime();
      } else {
        soundController.playClick();
      }
    } catch (err) { }

    // Masuk ke Menu Utama (view-home)
    switchView('home');
  }

  function updateUsernameDisplay() {
    const displayName = playerUsername ? playerUsername : 'Buat Nama';
    if (homeUsernameBadge) {
      homeUsernameBadge.textContent = displayName;
    }
    if (scoreUsernameDisplay) {
      scoreUsernameDisplay.textContent = playerUsername || 'Belum ada';
    }
  }

  function setupWelcomeScreen() {
    const welcomeForm = document.getElementById('form-welcome-username');
    if (welcomeForm) {
      welcomeForm.addEventListener('submit', (e) => {
        handleWelcomeSubmit(e);
      });
    }

    if (btnWelcomeSubmit) {
      btnWelcomeSubmit.addEventListener('click', (e) => {
        handleWelcomeSubmit(e);
      });
      btnWelcomeSubmit.addEventListener('touchend', (e) => {
        handleWelcomeSubmit(e);
      }, { passive: true });
    }

    if (inputWelcomeUsername) {
      inputWelcomeUsername.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          handleWelcomeSubmit(e);
        }
      });
    }

    if (btnToggleDarkWelcome) {
      btnToggleDarkWelcome.addEventListener('click', () => {
        soundController.playClick();
        toggleDarkMode();
      });
    }

    if (btnWelcomeBack) {
      btnWelcomeBack.addEventListener('click', () => {
        soundController.playClick();
        if (playerUsername) {
          switchView('home');
        }
      });
    }

    if (btnWelcomeLogout) {
      btnWelcomeLogout.addEventListener('click', () => {
        handleLogout();
      });
    }
  }

  // Logout / Keluar Profil
  function handleLogout() {
    soundController.playClick();
    const nameToLogout = playerUsername || 'Pemain';
    if (confirm(`Apakah Anda yakin ingin keluar dari profil "${nameToLogout}"?`)) {
      playerUsername = '';
      try {
        localStorage.removeItem('tilezy_username');
      } catch (e) { }

      updateUsernameDisplay();

      // Tutup semua modal jika ada yang terbuka
      if (modalSettings) modalSettings.classList.remove('active');
      if (modalScore) modalScore.classList.remove('active');

      // Kembali ke layar welcome untuk buat nama baru
      switchView('welcome');

      if (inputWelcomeUsername) {
        inputWelcomeUsername.value = '';
        setTimeout(() => inputWelcomeUsername.focus(), 250);
      }
    }
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
    btnMagicPair.addEventListener('click', useMagicPair);
    btnThemeQuick.addEventListener('click', () => {
      soundController.playClick();
      previousView = 'game';
      switchView('themes');
    });

    if (btnGameReload) {
      btnGameReload.addEventListener('click', () => {
        soundController.playClick();
        if (confirm('Mulai ulang level ini dari awal?')) {
          clearSavedGameState();
          startRound(true);
        }
      });
    }

    if (btnPause) {
      btnPause.addEventListener('click', () => {
        soundController.playClick();
        isPaused = true;
        if (modalPause) modalPause.classList.add('active');
      });
    }

    const btnResume = document.getElementById('btn-resume');
    if (btnResume) {
      btnResume.addEventListener('click', () => {
        soundController.playClick();
        isPaused = false;
        if (modalPause) modalPause.classList.remove('active');
      });
    }

    const btnPauseRestart = document.getElementById('btn-pause-restart');
    if (btnPauseRestart) {
      btnPauseRestart.addEventListener('click', () => {
        soundController.playClick();
        if (modalPause) modalPause.classList.remove('active');
        clearSavedGameState();
        startRound(true);
      });
    }

    const btnPauseHome = document.getElementById('btn-pause-home');
    if (btnPauseHome) {
      btnPauseHome.addEventListener('click', () => {
        soundController.playClick();
        if (modalPause) modalPause.classList.remove('active');
        saveGameState();
        switchView('home');
      });
    }

    document.getElementById('btn-win-replay').addEventListener('click', () => {
      soundController.playClick();
      modalWin.classList.remove('active');
      clearSavedGameState();
      startRound(true);
    });

    document.getElementById('btn-win-next').addEventListener('click', () => {
      soundController.playClick();
      modalWin.classList.remove('active');
      clearSavedGameState();
      currentLevel++;
      startRound(true);
    });
  }

  function setupModals() {
    document.getElementById('btn-close-score').addEventListener('click', () => {
      soundController.playClick();
      modalScore.classList.remove('active');
      setActiveTab(tabHome);
    });

    document.getElementById('btn-close-settings').addEventListener('click', () => {
      soundController.playClick();
      modalSettings.classList.remove('active');
      setActiveTab(tabHome);
    });

    const btnResetData = document.getElementById('btn-reset-data');
    if (btnResetData) {
      btnResetData.addEventListener('click', () => {
        soundController.playClick();
        if (confirm('Apakah Anda yakin ingin mereset semua skor dan memulai ulang dari Level 1?')) {
          resetAllGameData(true);
          modalSettings.classList.remove('active');
          setActiveTab(tabHome);
        }
      });
    }

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

  // PWA setup dengan deteksi pembaruan otomatis
  function setupPWA() {
    if ('serviceWorker' in navigator) {
      let isRefreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!isRefreshing) {
          isRefreshing = true;
          window.location.reload();
        }
      });

      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js?v=3.4')
          .then(reg => {
            reg.update();
            console.log('Tilezy PWA Ready v3.4 (100% Offline)!');
          })
          .catch(err => console.log('SW error:', err));
      });

      // Periksa update setiap kali pemain kembali ke aplikasi, dan simpan progres saat backgrounded
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          saveGameState();
        } else if (navigator.serviceWorker && navigator.serviceWorker.controller) {
          navigator.serviceWorker.getRegistration().then(reg => {
            if (reg) reg.update();
          });
        }
      });

      window.addEventListener('beforeunload', () => {
        saveGameState();
      });
    }

    // Tampilkan banner di Home jika belum diinstal / belum ditutup
    setTimeout(() => {
      showInstallBanner();
    }, 1000);

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      showInstallBanner();
    });

    window.addEventListener('appinstalled', () => {
      if (pwaBanner) pwaBanner.style.display = 'none';
      deferredInstallPrompt = null;
    });

    function triggerInstallFlow() {
      soundController.playClick();
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then((choice) => {
          if (choice && choice.outcome === 'accepted') {
            console.log('Tilezy PWA install accepted');
          }
          deferredInstallPrompt = null;
          if (pwaBanner) pwaBanner.style.display = 'none';
        });
      } else {
        // Panduan jika browser belum memicu direct prompt (Safari iOS / Browser menu)
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (isIOS) {
          alert('Untuk menginstal di iPhone/iPad:\n1. Ketuk tombol Bagikan (Share) 📤 di Safari\n2. Gulir ke bawah lalu pilih "Tambah ke Layar Utama" (Add to Home Screen)');
        } else {
          alert('Untuk menginstal Tilezy:\nBuka menu browser (titik tiga ⋮ di kanan atas) lalu pilih "Instal Aplikasi" atau "Tambahkan ke Layar Utama".');
        }
      }
    }

    if (btnTriggerInstall) {
      btnTriggerInstall.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerInstallFlow();
      });
    }

    if (pwaBanner) {
      pwaBanner.addEventListener('click', (e) => {
        if (e.target.closest('#btn-close-install')) return;
        triggerInstallFlow();
      });
    }

    if (btnCloseInstall) {
      btnCloseInstall.addEventListener('click', (e) => {
        e.stopPropagation();
        soundController.playClick();
        if (pwaBanner) pwaBanner.style.display = 'none';
        isInstallDismissed = true;
        sessionStorage.setItem('tilezy_pwa_dismissed', 'true');
      });
    }
  }

  // Deteksi Status Online / Offline & Konfirmasi Data Aman
  function setupOfflineDetection() {
    const toast = document.getElementById('offline-toast');
    if (!toast) return;

    function handleStatusChange() {
      if (!navigator.onLine) {
        toast.textContent = '📶 Mode Offline · Skor & Data Tetap Aman!';
        toast.style.background = 'var(--plum)';
        toast.style.display = 'flex';
      } else {
        toast.textContent = '🟢 Kembali Online';
        toast.style.background = 'var(--mint-dark)';
        toast.style.display = 'flex';
        setTimeout(() => {
          if (navigator.onLine) toast.style.display = 'none';
        }, 2200);
      }
    }

    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);

    // Cek status saat pertama buka
    if (!navigator.onLine) {
      handleStatusChange();
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
