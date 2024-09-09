const [command] = Bun.argv.slice(2);

console.log('reminder: make sure docker desktop is running');
if (command === 'start') {
  Bun.spawnSync(['docker-compose', 'up', '-d'], { cwd: './local_database', stdout: 'inherit', stderr: 'inherit' });
}
if (command === 'stop') {
  Bun.spawnSync(['docker-compose', 'down'], { cwd: './local_database', stdout: 'inherit', stderr: 'inherit' });
}
