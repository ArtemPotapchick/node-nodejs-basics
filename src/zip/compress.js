import zlib from 'zlib'
import { fileURLToPath } from "url";
import path from "path";
import * as fs from 'fs'

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const gzip = zlib.createGzip();
  const sourceFile = fs.createReadStream(path.join(__dirname,'files','fileToCompress.txt'))
  const destFile = fs.createWriteStream(path.join(__dirname,'files','archive.gz'))
  sourceFile.pipe(gzip).pipe(destFile);
  // Write your code here
};

await compress();
