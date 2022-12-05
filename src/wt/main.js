import * as os from 'os';
import { Worker } from 'worker_threads';
import path from "path";
import { fileURLToPath } from "url";

const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  let num = 10;
  const cpuCount = os.cpus().length;
  Promise.all(Array.from(Array(cpuCount), (x, i) => i).map(i =>
    new Promise((resolve, reject) => {
      const worker = new Worker(path.join(__dirname, 'worker.js'), {
        workerData: num + i
      });
      worker.on('message', value => {
        resolve({ status: 'resolved', data: value });
      });
      worker.on('error', err => {
        resolve({ status: 'error', data: null });
      });
    }))).then(results=>console.log(results));
};

await performCalculations();
