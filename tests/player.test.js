import test from 'node:test';
import assert from 'node:assert';
import { RhythmPlayer } from '../src/midi/player.js';

test('RhythmPlayer tempo bounds & step timing math', () => {
  const player = new RhythmPlayer({ isPlaying: false });
  assert.strictEqual(player.bpm, 110, 'Default BPM should be 110');

  player.setBpm(150);
  assert.strictEqual(player.bpm, 150, 'BPM should update to 150');
  assert.strictEqual(player.calculateStepIntervalMs(), 100, 'Step interval at 150 BPM should be 100ms');

  // Test BPM upper bound
  player.setBpm(300);
  assert.strictEqual(player.bpm, 240, 'BPM should be capped at 240');

  // Test BPM lower bound
  player.setBpm(10);
  assert.strictEqual(player.bpm, 40, 'BPM should be floored at 40');
});

test('RhythmPlayer style navigation & wrap-around', () => {
  const player = new RhythmPlayer({ isPlaying: false });
  assert.strictEqual(player.styleIndex, 0, 'Initial styleIndex should be 0');

  player.nextStyle();
  assert.strictEqual(player.styleIndex, 1, 'nextStyle should increment styleIndex to 1');

  player.prevStyle();
  assert.strictEqual(player.styleIndex, 0, 'prevStyle should return styleIndex to 0');

  player.prevStyle();
  assert.strictEqual(player.styleIndex, player.styles.length - 1, 'prevStyle from 0 should wrap to last style index');
});

test('RhythmPlayer instrument toggle and play state', () => {
  const player = new RhythmPlayer({ isPlaying: false });
  
  const initialLayer1State = player.instruments[1].enabled;
  player.toggleInstrument(1);
  assert.strictEqual(player.instruments[1].enabled, !initialLayer1State, 'toggleInstrument should invert enabled state');

  assert.strictEqual(player.isPlaying, false, 'Player should start paused');
  player.togglePlay();
  assert.strictEqual(player.isPlaying, true, 'togglePlay should toggle state to playing');
  player.togglePlay();
  assert.strictEqual(player.isPlaying, false, 'togglePlay should toggle state to paused');
});
