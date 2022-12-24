import * as path from 'path';
import * as fsPromises from 'fs/promises';
import { fileURLToPath } from 'url';
import fs from "fs";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    if(!fs.existsSync(path.join(__dirname, 'files','fileToRead.txt'))){
      throw new Error('FS operation failed')
    }
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'fileToRead.txt'), 'utf8');
    console.log(data);
  } catch(e) {
    console.log('FS operation failed');
  }
};

await read();
