/**
 * Web Audio API Sound Synthesizer for Onet Game
 * Fully procedural audio - zero external MP3s needed, 100% offline & instant latency!
 */

class SoundController {
  constructor() {
    this.ctx = null;
    this.soundEnabled = localStorage.getItem('onet_sound') !== 'false';
    this.musicEnabled = localStorage.getItem('onet_music') === 'true';
    this.bgmTimer = null;
    this.bgmStep = 0;
  }

  _init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem('onet_sound', this.soundEnabled);
    return this.soundEnabled;
  }

  toggleMusic() {
    this.musicEnabled = !this.musicEnabled;
    localStorage.setItem('onet_music', this.musicEnabled);
    if (this.musicEnabled) {
      this.startMusic();
    } else {
      this.stopMusic();
    }
    return this.musicEnabled;
  }

  /**
   * Crisp tactile tile tap
   */
  playClick() {
    if (!this.soundEnabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600, t);
    osc.frequency.exponentialRampToValueAtTime(180, t + 0.04);

    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.04);
  }

  /**
   * Soft select blip
   */
  playSelect() {
    if (!this.soundEnabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, t);
    osc.frequency.exponentialRampToValueAtTime(880, t + 0.06);

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.06);
  }

  /**
   * Bright harmonious chime on matching two tiles
   */
  playMatch(combo = 1) {
    if (!this.soundEnabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    // Base chord frequencies shift up with combo
    const pitchMultiplier = Math.min(2.0, 1 + (combo - 1) * 0.12);
    const chord = [523.25, 659.25, 783.99, 1046.5].map(f => f * pitchMultiplier);

    chord.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const noteTime = t + idx * 0.04;

      osc.type = idx === 3 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0, noteTime);
      gain.gain.linearRampToValueAtTime(0.22, noteTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + 0.36);
    });
  }

  /**
   * Electric laser buzz when drawing the connecting line
   */
  playLine() {
    if (!this.soundEnabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(320, t);
    osc.frequency.linearRampToValueAtTime(960, t + 0.12);

    gain.gain.setValueAtTime(0.12, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.15);
  }

  /**
   * Soft error buzz for invalid pair selection
   */
  playWrong() {
    if (!this.soundEnabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    [180, 140].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const noteTime = t + i * 0.08;

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.18, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.07);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + 0.07);
    });
  }

  /**
   * Card shuffle / whoosh sound
   */
  playShuffle() {
    if (!this.soundEnabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    for (let i = 0; i < 7; i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const noteTime = t + i * 0.035;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(250 + Math.random() * 300, noteTime);

      gain.gain.setValueAtTime(0.15, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + 0.045);
    }
  }

  /**
   * Hint bell sparkle
   */
  playHint() {
    if (!this.soundEnabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    [880, 1174.66, 1760].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const noteTime = t + idx * 0.06;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.15, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + 0.32);
    });
  }

  /**
   * Grand victory fanfare when completing a level
   */
  playWin() {
    if (!this.soundEnabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const melody = [
      { f: 523.25, d: 0.12, w: 0 },    // C5
      { f: 659.25, d: 0.12, w: 0.12 }, // E5
      { f: 783.99, d: 0.12, w: 0.24 }, // G5
      { f: 1046.5, d: 0.35, w: 0.36 }, // C6
      { f: 880.00, d: 0.12, w: 0.72 }, // A5
      { f: 1046.5, d: 0.5,  w: 0.86 }  // C6 grand finish
    ];

    melody.forEach(note => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const noteTime = t + note.w;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, noteTime);

      gain.gain.setValueAtTime(0, noteTime);
      gain.gain.linearRampToValueAtTime(0.3, noteTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + note.d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + note.d + 0.05);
    });
  }

  /**
   * Game Over sad descending tune
   */
  playGameOver() {
    if (!this.soundEnabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const notes = [440, 415.3, 392, 349.23];

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const noteTime = t + idx * 0.18;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.2, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + 0.27);
    });
  }

  /**
   * Procedural chill kalimba / marimba pentatonic loop for background music
   */
  startMusic() {
    if (!this.musicEnabled) return;
    this._init();
    if (!this.ctx) return;
    this.stopMusic();

    const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];
    const pattern = [0, 2, 4, 3, 1, 4, 2, 5, 3, 2, 0, 4];
    
    this.bgmTimer = setInterval(() => {
      if (!this.musicEnabled || !this.ctx) return;
      const noteIdx = pattern[this.bgmStep % pattern.length];
      const freq = scale[noteIdx];
      this.bgmStep++;

      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.04, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.5);
    }, 420);
  }

  stopMusic() {
    if (this.bgmTimer) {
      clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  vibrate(ms = 30) {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      try {
        navigator.vibrate(ms);
      } catch (e) {}
    }
  }
}

// Global instance
window.soundController = new SoundController();
