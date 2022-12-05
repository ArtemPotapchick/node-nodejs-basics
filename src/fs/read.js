import * as path from 'path';
import * as fsPromises from 'fs/promises';
import { fileURLToPath } from 'url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'fileToRead.txt'), 'utf8');
    console.log(data);
  } catch {
    console.log('FS operation failed');
  }
};

await read();
