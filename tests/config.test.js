import test from 'node:test';
import assert from 'node:assert';
import { INSTRUMENTS } from '../src/config/instruments.js';
import { GROOVE_STYLES } from '../src/config/styles.js';

test('INSTRUMENTS configuration validation', () => {
  assert.strictEqual(Object.keys(INSTRUMENTS).length, 9, 'Should have exactly 9 instrument layers');
  for (let i = 1; i <= 9; i++) {
    assert.ok(INSTRUMENTS[i], `Instrument layer ${i} should exist`);
    assert.strictEqual(typeof INSTRUMENTS[i].name, 'string', `Instrument layer ${i} should have a name`);
    assert.strictEqual(typeof INSTRUMENTS[i].enabled, 'boolean', `Instrument layer ${i} should have enabled state`);
  }
});

test('GROOVE_STYLES configuration validation', () => {
  assert.ok(GROOVE_STYLES.length >= 5, 'Should have at least 5 groove styles defined');
  GROOVE_STYLES.forEach((style, idx) => {
    assert.ok(style.name, `Style #${idx + 1} should have a name`);
    assert.ok(typeof style.steps === 'number', `Style #${idx + 1} should specify step count`);
    assert.ok(style.patterns, `Style #${idx + 1} should contain pattern mappings`);

    for (let key = 1; key <= 9; key++) {
      assert.ok(Array.isArray(style.patterns[key]), `Style #${idx + 1} instrument ${key} pattern must be an array`);
      assert.strictEqual(style.patterns[key].length, style.steps, `Style #${idx + 1} instrument ${key} pattern length must match step count (${style.steps})`);
    }
  });
});
