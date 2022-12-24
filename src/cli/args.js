const parseArgs = () => {
  // Write your code here
  let argvArr = [];
  process.argv.map((item, index) => {
    if (item.startsWith('--')) {
      argvArr = [...argvArr, `${item.slice(2)} is ${process.argv[index + 1]}`];
    }
  });
  console.log(argvArr.join(', '));
};

parseArgs();
