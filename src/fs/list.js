import * as path from 'path';
import fs from "fs";
import { fileURLToPath } from 'url';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    if (!fs.existsSync(path.join(__dirname, 'files'))){
      throw 'FS operation failed';
    }
    fs.readdir(path.join(__dirname, 'files'), (err, files) => {
      files.forEach(file => {
        console.log(file);
      });
    });
  } catch (e) {
    console.log(e);
  }
  // Write your code here
};

await list();
