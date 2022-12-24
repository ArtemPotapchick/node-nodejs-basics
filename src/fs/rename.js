import * as path from 'path';
import * as fsPromises from 'fs/promises';
import { fileURLToPath } from 'url';
import fs from "fs";

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  try {
    if (!fs.existsSync(path.join(__dirname, 'files', 'wrongFilename.txt')) || fs.existsSync(path.join(__dirname, 'files', 'properFilename.md'))) {
      throw new Error('FS operation failed')
    }
    await fsPromises.rename(path.join(__dirname, 'files', 'wrongFilename.md'), path.join(__dirname, 'files', 'properFilename.txt'));
  } catch (e) {
    console.log(e);
  }
  // Write your code here
};

await rename();
