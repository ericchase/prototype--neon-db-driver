import type { Subprocess } from 'bun';

import { ConsoleError, ConsoleLog } from '../src/lib/Console.js';
import { Broadcast } from './lib/Broadcast.js';
import { Watcher } from './lib/Watch.js';

Bun.spawnSync(['bun', 'update']);
Bun.spawnSync(['bun', 'run', 'format']);

const pipe = new Broadcast<string>();

(async () => {
  let proc: Subprocess<'ignore', 'inherit', 'inherit'> | undefined = undefined;
  while (true) {
    proc = Bun.spawn(['bun', './src/server.ts'], { stdout: 'inherit' });
    let restart = false;
    pipe.wait('restart').then(() => {
      restart = true;
      ConsoleLog('Dev:Restart...');
      proc?.kill();
    });
    await proc.exited;
    const code = restart ? 1 : proc.exitCode;
    switch (code) {
      case 1:
        ConsoleLog('Exit Code [1]:Restart');
        break;
      case 2:
        ConsoleLog('Exit Code [2]:Shutdown');
        process.exit(0);
        break;
      default:
        ConsoleLog(`Exit Code [${code}]`);
        process.stdout.write('Restart? (y/n)');
        for await (const line of console) {
          if (line.trim() === 'y') break;
          process.exit(0);
        }
        break;
    }
    ConsoleLog('\n');
  }
})();

while (true) {
  try {
    const watcher = new Watcher('./src', 250);
    watcher.observe(() => {
      pipe.send('restart');
    });
    await watcher.done;
  } catch (error) {
    ConsoleError(error);
  }
}
