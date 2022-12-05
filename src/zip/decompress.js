import { fileURLToPath } from "url";
import path from "path";
import zlib from "zlib";
import fs from "fs";

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const unzip = zlib.createUnzip();
  const sourceFile = fs.createReadStream(path.join(__dirname,'files','archive.gz'))
  const destFile = fs.createWriteStream(path.join(__dirname,'files','fileToCompress.txt'))
  sourceFile.pipe(unzip).pipe(destFile);
    // Write your code here 
};

await decompress();
