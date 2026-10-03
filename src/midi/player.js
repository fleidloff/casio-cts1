import { INSTRUMENTS } from '../config/instruments.js';
import { GROOVE_STYLES } from '../config/styles.js';

export class RhythmPlayer {
  constructor(options = {}) {
    this.bpm = options.bpm || 110;
    this.styleIndex = options.styleIndex || 0;
    this.currentStep = 0;
    this.isPlaying = options.isPlaying ?? true;
    this.instruments = options.instruments || INSTRUMENTS;
    this.styles = options.styles || GROOVE_STYLES;
    this.midiOut = options.midiOut || null;
    this.timerId = null;
    this.onStep = options.onStep || (() => {});
  }

  setMidiOut(midiOut) {
    this.midiOut = midiOut;
  }

  getCurrentStyle() {
    return this.styles[this.styleIndex];
  }

  setBpm(newBpm) {
    this.bpm = Math.max(40, Math.min(240, newBpm));
  }

  nextStyle() {
    this.styleIndex = (this.styleIndex + 1) % this.styles.length;
    this.currentStep = 0;
  }

  prevStyle() {
    this.styleIndex = (this.styleIndex - 1 + this.styles.length) % this.styles.length;
    this.currentStep = 0;
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    if (!this.isPlaying) {
      if (this.timerId) clearTimeout(this.timerId);
      this.timerId = null;
    }
    return this.isPlaying;
  }

  toggleInstrument(key) {
    if (this.instruments[key]) {
      this.instruments[key].enabled = !this.instruments[key].enabled;
    }
  }

  calculateStepIntervalMs() {
    return Math.max(20, (60000 / this.bpm) / 4);
  }

  playStep() {
    if (!this.isPlaying) return;

    const style = this.getCurrentStyle();
    if (this.currentStep >= style.steps) {
      this.currentStep = 0;
    }

    if (this.midiOut) {
      for (let key = 1; key <= 9; key++) {
        if (!this.instruments[key] || !this.instruments[key].enabled) continue;

        const pattern = style.patterns[key];
        if (!pattern) continue;

        const item = pattern[this.currentStep % pattern.length];
        let noteNumber = null;
        let velocity = 90;

        if (Array.isArray(item)) {
          noteNumber = item[0];
          velocity = item[1] ?? 90;
        } else if (typeof item === 'number') {
          noteNumber = item;
        }

        if (noteNumber !== null && noteNumber !== undefined) {
          // Send Note-On to Channel 10 (0x99)
          this.midiOut.send([0x99, noteNumber, velocity]);

          // Schedule Note-Off after 100ms
          const out = this.midiOut;
          setTimeout(() => {
            if (out) out.send([0x89, noteNumber, 0]);
          }, 100);
        }
      }
    }

    this.onStep(this);

    this.currentStep = (this.currentStep + 1) % style.steps;

    const stepIntervalMs = this.calculateStepIntervalMs();
    this.timerId = setTimeout(() => this.playStep(), stepIntervalMs);
  }

  start() {
    this.isPlaying = true;
    this.playStep();
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }
}
