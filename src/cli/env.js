const parseEnv = () => {
  let rssArr = []
  for ( let [key,value] of Object.entries(process.env)){
    if(key.startsWith('RSS_')){
      rssArr = [...rssArr,`${key}=${value}`]
    }
  }
  console.log(rssArr.join('; '));
  // Write your code here
};

parseEnv();
