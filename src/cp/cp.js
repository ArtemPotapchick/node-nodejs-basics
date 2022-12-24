import {fork} from 'child_process';
import { fileURLToPath } from "url";
import path from "path";

const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const childProcess = fork(path.join(__dirname, 'files', 'script.js'), args);
  childProcess.on('message', function (m) {
    console.log('Parent process received:', m);
  });

  childProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });





  // Write your code here
};

spawnChildProcess();
