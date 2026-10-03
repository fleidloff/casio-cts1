export function renderDashboard(player) {
  const style = player.getCurrentStyle();
  const statusStr = player.isPlaying ? '\x1b[32m[PLAYING]\x1b[0m' : '\x1b[33m[PAUSED ]\x1b[0m';
  console.clear();
  console.log('============================================================');
  console.log('            BOSS DR-01s RHYTHM PARTNER (MIDI)');
  console.log('============================================================');
  console.log(` Status       : ${statusStr}`);
  console.log(` Groove Style : [${player.styleIndex + 1}/${player.styles.length}] ${style.name}`);
  console.log(` Tempo        : ${player.bpm} BPM`);

  // Build step bar indicator
  let stepDisplay = ' Step         : [';
  for (let i = 0; i < style.steps; i++) {
    if (i > 0 && i % 4 === 0) stepDisplay += ' | ';
    stepDisplay += (i === player.currentStep) ? '►' : '•';
  }
  stepDisplay += ']';
  console.log(stepDisplay);

  console.log('------------------------------------------------------------');
  console.log(' INSTRUMENT LAYERS:');
  for (let key = 1; key <= 9; key++) {
    const inst = player.instruments[key];
    const status = inst.enabled ? '\x1b[32m[ON ]\x1b[0m' : '\x1b[31m[OFF]\x1b[0m';
    console.log(`  [${key}] ${status} ${inst.name}`);
  }
  console.log('------------------------------------------------------------');
  console.log(' CONTROLS:');
  console.log('  [SPACE]   : Play / Stop (Pause)');
  console.log('  [+] / [-] : Increase / Decrease Tempo (BPM)');
  console.log('  [1] - [9] : Toggle Instrument Layer ON / OFF');
  console.log('  [,]       : Next Groove Style');
  console.log('  [0]       : Previous Groove Style');
  console.log('  [Q]       : Quit');
  console.log('============================================================');
}
