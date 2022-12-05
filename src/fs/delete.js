import * as fsPromises from 'fs/promises';
import { fileURLToPath } from 'url';
import * as path from "path";
import fs from "fs";

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  // Write your code here
  try {
    if (!fs.existsSync(path.join(__dirname, 'files', 'fileToRemove.txt'))) {
      throw 'FS operation failed';
    }
    await fsPromises.unlink(path.join(__dirname, 'files', 'fileToRemove.txt'));
  } catch (e) {
    console.log(e);
  }


};
await remove();
