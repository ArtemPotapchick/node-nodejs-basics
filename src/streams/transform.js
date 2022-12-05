import { Transform } from 'stream'
const transform = async () => {
  process.stdin.resume();
  process.stdin.setEncoding('utf-8');
  const reverseText = new Transform({
    transform(chunk, encoding, callback) {
      callback(null,chunk.toString().split('').reverse().join(''))
    }
  })
  process.stdin.pipe(reverseText).pipe(process.stdout);
};

await transform();
