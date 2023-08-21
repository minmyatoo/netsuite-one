const { exec } = require('child_process');

const command = 'bash ./scripts/run_project.sh';

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(stdout);
});
