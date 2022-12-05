import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import readline from 'readline';

const write = async () => {
  process.stdin.resume();
  process.stdin.setEncoding('utf-8');
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const ws = fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'));
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter a sentence: '
  });
  rl.prompt()
  rl.on('line', (line) => {
    rl.prompt()
    let sentence = line.trim() + '\n';
    ws.write(sentence);
  }).on('close', () => {
    ws.end();
    ws.on('finish', () => {
      console.log(`All your sentences have been written to fileToWrite.txt`);
    });
    setTimeout(() => {
      process.exit(0);
    }, 100);
  });
};

await write();
