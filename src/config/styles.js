// Boss DR-01s inspired acoustic & full drum groove styles
// Patterns support note numbers or [note, velocity] tuples for dynamic expression
export const GROOVE_STYLES = [
  {
    name: '16-Beat Funk / Soul (4/4)',
    steps: 16,
    patterns: {
      1: [82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82], // Shaker 16th pulse
      2: [null, null, 54, null, null, 54, null, null, null, null, 54, null, null, 54, null, null], // Tambourine offbeats
      3: [null, null, null, null, 39, null, null, null, null, null, null, null, 39, null, null, 39], // Hand Clap on 2 & 4
      4: [36, null, null, 36, null, null, 36, null, null, 36, 36, null, null, null, 36, null], // Funk Kick
      5: [null, null, null, null, 38, null, null, [38, 55], null, null, null, null, 38, null, null, [38, 55]], // Snare + Ghost notes
      6: [42, 42, 42, [46, 75], 42, 42, 42, [46, 75], 42, 42, 42, [46, 75], 42, 42, 42, [46, 75]], // Hi-Hat with subtle open barks
      7: [null, 60, null, 61, null, 63, null, 64, null, 60, null, 61, null, 63, null, 64], // Bongos / Congas
      8: [[55, 60], null, null, 56, null, null, 56, null, [51, 65], null, null, 56, null, null, 56, null], // Soft Splash & Ride Bell
      9: [null, 75, null, null, 75, null, null, 75, null, 75, null, null, 75, null, null, null]  // Claves
    }
  },
  {
    name: 'Hip Hop / Boom-Bap (4/4)',
    steps: 16,
    patterns: {
      1: [82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82],
      2: [null, null, 54, null, null, null, 54, null, null, null, 54, null, null, null, 54, null],
      3: [null, null, null, null, 39, null, null, null, null, null, null, null, 39, null, null, 39],
      4: [[36, 100], null, null, [36, 75], null, null, [36, 90], null, null, [36, 80], null, [36, 90], null, null, null, null],
      5: [null, null, null, null, [38, 95], null, null, [38, 40], null, null, null, null, [38, 95], null, [38, 50], null],
      6: [[42, 80], null, [42, 60], [42, 80], [42, 60], [42, 80], [46, 75], null, [42, 80], null, [42, 60], [42, 80], [42, 60], [42, 80], [46, 75], null],
      7: [null, 63, null, null, null, 64, null, null, null, 63, null, null, null, 64, null, null],
      8: [[55, 55], null, null, null, null, null, null, null, [53, 60], null, null, null, null, null, null, null],
      9: [null, 75, null, null, null, null, 75, null, null, 75, null, null, null, null, 75, null]
    }
  },
  {
    name: 'Lofi Jazz / Chillhop (4/4)',
    steps: 16,
    patterns: {
      1: [[82, 50], null, [82, 40], null, [82, 50], null, [82, 40], null, [82, 50], null, [82, 40], null, [82, 50], null, [82, 40], null],
      2: [null, null, null, null, [54, 45], null, null, null, null, null, null, null, [54, 45], null, null, null],
      3: [[37, 60], null, null, null, [37, 75], null, null, [37, 45], null, null, [37, 60], null, [37, 75], null, null, null],
      4: [[35, 75], null, null, null, null, null, [35, 60], null, null, null, [35, 70], null, null, null, null, null],
      5: [null, null, null, null, [38, 70], null, null, [38, 35], null, null, null, null, [38, 75], null, null, [38, 40]],
      6: [[51, 65], null, [42, 50], null, [51, 60], null, [42, 50], null, [51, 65], null, [42, 50], null, [51, 60], null, [42, 50], null],
      7: [null, null, [63, 50], null, null, null, [64, 45], null, null, null, [63, 50], null, null, null, [64, 45], null],
      8: [[81, 45], null, null, null, null, null, null, null, [80, 40], null, null, null, null, null, null, null],
      9: [null, null, null, [76, 45], null, null, null, null, null, null, null, [77, 45], null, null, null, null]
    }
  },
  {
    name: 'Funk Ballad (4/4)',
    steps: 16,
    patterns: {
      1: [82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82],
      2: [null, null, [54, 60], null, null, null, [54, 60], null, null, null, [54, 60], null, null, null, [54, 60], null],
      3: [null, null, null, null, 39, null, null, 37, null, null, null, null, 39, null, null, 37],
      4: [[36, 95], null, null, null, null, null, [36, 80], null, [36, 90], null, null, [36, 75], null, null, null, null],
      5: [null, null, null, null, [38, 90], null, null, [38, 45], null, null, null, null, [38, 90], null, null, [38, 50]],
      6: [[42, 70], [42, 50], [42, 70], [42, 50], [42, 70], [42, 50], [46, 65], null, [42, 70], [42, 50], [42, 70], [42, 50], [42, 70], [42, 50], [46, 65], null],
      7: [null, null, null, null, null, null, [60, 55], [61, 55], null, null, null, null, null, null, [63, 60], null],
      8: [[55, 55], null, null, null, 56, null, null, null, [51, 60], null, null, null, 56, null, null, null],
      9: [null, 75, null, null, null, 75, null, null, null, 75, null, null, null, 75, null, null]
    }
  },
  {
    name: 'Simple 4/4 Beat (Basic Practice)',
    steps: 16,
    patterns: {
      1: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      2: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      3: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      4: [[36, 85], null, null, null, null, null, null, null, [36, 85], null, null, null, null, null, null, null],
      5: [null, null, null, null, [38, 85], null, null, null, null, null, null, null, [38, 85], null, null, null],
      6: [[42, 75], null, [42, 75], null, [42, 75], null, [42, 75], null, [42, 75], null, [42, 75], null, [42, 75], null, [42, 75], null],
      7: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      8: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      9: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    }
  },
  {
    name: 'Simple Blues Shuffle (4/4)',
    steps: 16,
    patterns: {
      1: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      2: [null, null, [54, 50], null, null, null, [54, 50], null, null, null, [54, 50], null, null, null, [54, 50], null],
      3: [null, null, null, null, 37, null, null, null, null, null, null, null, 37, null, null, null],
      4: [36, null, null, null, null, null, 36, null, 36, null, null, null, null, null, null, null],
      5: [null, null, null, null, 38, null, null, null, null, null, null, null, 38, null, null, null],
      6: [[51, 75], null, [51, 60], [51, 75], null, [51, 60], [51, 75], null, [51, 60], [51, 75], null, [51, 60], [51, 75], null, [51, 60], [51, 75]],
      7: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      8: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      9: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    }
  },
  {
    name: 'Simple 2/4 Folk / March (2/4)',
    steps: 16,
    patterns: {
      1: [82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82],
      2: [null, 54, null, 54, null, 54, null, 54, null, 54, null, 54, null, 54, null, 54],
      3: [37, null, 37, null, 37, null, 37, null, 37, null, 37, null, 37, null, 37, null],
      4: [36, null, null, null, 36, null, null, null, 36, null, null, null, 36, null, null, null],
      5: [null, null, 38, null, null, null, 38, null, null, null, 38, null, null, null, 38, null],
      6: [42, null, 42, null, 42, null, 42, null, 42, null, 42, null, 42, null, 42, null],
      7: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      8: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      9: [75, null, 75, null, 75, null, 75, null, 75, null, 75, null, 75, null, 75, null]
    }
  },
  {
    name: 'Pop / Acoustic Rock (4/4)',
    steps: 16,
    patterns: {
      1: [82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82],
      2: [null, null, 54, null, null, null, 54, null, null, null, 54, null, null, null, 54, null],
      3: [null, null, null, null, 39, null, null, null, null, null, null, null, 39, null, null, null],
      4: [36, null, null, null, null, null, 36, null, 36, null, null, null, null, null, 36, null],
      5: [null, null, null, null, 38, null, null, null, null, null, null, null, 38, null, null, null],
      6: [42, 42, 42, 42, 42, 42, 46, null, 42, 42, 42, 42, 42, 42, 46, null],
      7: [null, null, null, null, null, null, null, null, null, null, null, null, [50, 70], [48, 70], [47, 70], [45, 70]],
      8: [[55, 60], null, null, null, null, null, null, null, 56, null, null, null, null, null, null, null],
      9: [75, null, null, 75, null, null, 75, null, null, 75, null, null, 75, null, null, null]
    }
  },
  {
    name: 'Bossa Nova / Latin (4/4)',
    steps: 16,
    patterns: {
      1: [82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82],
      2: [null, null, null, 54, null, null, null, 54, null, null, null, 54, null, null, null, 54],
      3: [37, null, null, 37, null, null, 37, null, null, null, 37, null, null, 37, null, null],
      4: [36, null, null, 36, null, null, 36, null, 36, null, null, 36, null, null, 36, null],
      5: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      6: [[51, 65], null, [51, 65], null, [51, 65], null, [51, 65], null, [51, 65], null, [51, 65], null, [51, 65], null, [51, 65], null],
      7: [62, 63, null, 64, 62, 63, 63, null, 62, 63, null, 64, 62, 63, 63, null],
      8: [null, null, [81, 55], null, null, null, [81, 55], null, null, null, [81, 55], null, null, null, [81, 55], null],
      9: [75, null, null, 75, null, null, 75, null, null, null, 75, null, 75, null, null, null]
    }
  },
  {
    name: 'Acoustic Waltz (3/4)',
    steps: 12,
    patterns: {
      1: [82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82],
      2: [null, null, null, null, 54, null, null, null, null, null, 54, null],
      3: [null, null, null, null, 37, null, null, null, null, null, 37, null],
      4: [36, null, null, null, null, null, null, null, null, null, null, null],
      5: [null, null, null, null, 38, null, null, null, null, null, 38, null],
      6: [42, null, 42, null, 44, null, 42, null, 42, null, 44, null],
      7: [null, 63, null, 64, null, 63, null, 64, null, 63, null, 64],
      8: [[81, 60], null, null, null, null, null, [80, 50], null, null, null, null, null],
      9: [76, null, null, null, 77, null, null, null, 77, null, null, null]
    }
  }
];
