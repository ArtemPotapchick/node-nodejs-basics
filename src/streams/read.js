import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';


const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const rs = fs.createReadStream(path.join(__dirname,'files','fileToRead.txt'),{encoding:'utf8'})
  rs.on('data',(dataChunk)=>{
    process.stdout.write(dataChunk)
})

};

await read();
