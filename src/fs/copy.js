import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const copyFiles = (source, dest) => {
    const exists = fs.existsSync(source);
    const stats = exists && fs.statSync(source);
    const isDirectory = stats && stats.isDirectory();
    if (isDirectory) {
      if (!fs.existsSync(dest)) {
        fs.mkdir(dest, { recursive: true }, (err) => {
          console.log(err);
        });
      }
      fs.readdirSync(source).forEach(fileName => {
        copyFiles(path.join(source, fileName), path.join(dest, fileName));
      });
    }
    else {
      if(!fs.existsSync(dest)){
        fs.copyFileSync(source,dest)
      }
    }

  };
  try {
    const sourceDir = path.join(__dirname, 'files');
    const destDir = path.join(__dirname, 'files_copy');
    if (!fs.existsSync(sourceDir) || fs.existsSync(destDir)) {
      throw 'FS operation failed';
    }
    copyFiles(sourceDir, destDir);
  } catch (e) {
    console.log(e);
  }
  // Write your code here
};

copy();
