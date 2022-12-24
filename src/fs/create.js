import * as path from 'path';
import * as fsPromises from 'fs/promises';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  try {
    if (!fs.existsSync(path.join(__dirname, 'files', 'fresh.txt'))) {
      await fsPromises.appendFile(path.join(__dirname, 'files', 'fresh.txt'), 'I am fresh and young');
    } else {
      throw new Error('FS operation failed')
    }
  } catch (e) {
    console.log(e);
  }
  // Write your code here
};

await create();
