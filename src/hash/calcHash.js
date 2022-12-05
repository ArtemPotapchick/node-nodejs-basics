import * as fsPromises from 'fs/promises';
import path from "path";
import { fileURLToPath } from "url";
const { createHmac } = await import('node:crypto');

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileBuffer = await fsPromises.readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'), 'utf8');
  const secret = 'abcdef'
  const hashSum = createHmac('sha256',secret)
  hashSum.update(fileBuffer);
  const hex = hashSum.digest('hex');
  console.log(hex);
};

await calculateHash();

