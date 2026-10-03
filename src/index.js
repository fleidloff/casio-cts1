import JZZ from 'jzz';
import readline from 'readline';
import { RhythmPlayer } from './midi/player.js';
import { renderDashboard } from './ui/dashboard.js';

export async function main() {
  try {
    const midi = await JZZ();
    const outputs = midi.info().outputs;

    if (!outputs || outputs.length === 0) {
      console.error('No MIDI output devices found.');
      process.exit(1);
    }

    const outputInfo = outputs.find(port => 
      port.name && (port.name.toUpperCase().includes('CT-S1') || port.name.toUpperCase().includes('CASIO'))
    ) || outputs[0];

    const midiOut = await midi.openMidiOut(outputInfo.name);

    // Select Channel 10 (0x9) and initialize drum set
    midiOut.send([0xB9, 0x00, 0x7F]); 
    midiOut.send([0xB9, 0x20, 0x00]); 
    midiOut.send([0xC9, 0x00]);       

    const player = new RhythmPlayer({
      midiOut,
      onStep: (p) => renderDashboard(p)
    });

    // Setup interactive keypress handling
    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(true);
    }

    process.stdin.on('keypress', (str, key) => {
      // Exit on Q or Ctrl+C
      if (str === 'q' || str === 'Q' || (key && key.ctrl && key.name === 'c')) {
        player.stop();
        if (midiOut) midiOut.close();
        console.clear();
        console.log('Exiting Boss DR-01s Rhythm Partner. Goodbye!');
        process.exit(0);
      }

      // Play / Pause toggle with Space
      if (str === ' ' || (key && key.name === 'space')) {
        player.togglePlay();
        if (!player.isPlaying) {
          renderDashboard(player);
        } else {
          player.playStep();
        }
        return;
      }

      // Tempo controls
      if (str === '+' || str === '=') {
        player.setBpm(player.bpm + 5);
      } else if (str === '-' || str === '_') {
        player.setBpm(player.bpm - 5);
      }

      // Style controls (, = Next, 0 = Previous)
      if (str === ',') {
        player.nextStyle();
      } else if (str === '0') {
        player.prevStyle();
      }

      // Instrument Layer toggles (1-9)
      if (str >= '1' && str <= '9') {
        const num = parseInt(str, 10);
        player.toggleInstrument(num);
      }

      // If paused, re-render UI to reflect updated parameter state
      if (!player.isPlaying) {
        renderDashboard(player);
      }
    });

    // Start rhythm playback
    player.start();

  } catch (err) {
    console.error('MIDI error:', err);
    process.exit(1);
  }
}

// Auto-run if executed directly
if (process.argv[1] && process.argv[1].endsWith('index.js')) {
  main();
}
