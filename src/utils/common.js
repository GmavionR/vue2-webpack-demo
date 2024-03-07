function concurRequest(urls, maxNum) {
  if (urls.length <= 0) {
    return Promise.resolve([]);
  }
  return new Promise((resolve) => {
    let index = 0;
    const result = [];
    let count = 0; //当前完成的请求数量

    async function _request() {
      const url = urls[index];
      let responseIndex = index;
      index++;
      

      try {
        let data = await fetch(url);
        result[responseIndex] = data;
      } catch (error) {
        console.log("error", error);
        result[responseIndex] = error;
      } finally {
        count++;
        if (index < urls.length) {
          _request();
        }
        console.log("count", count);
        if (count == urls.length) {
          resolve(result);
        }
      }
    }

    for (let i = 0; i < maxNum; i++) {
      _request();
    }
  });
}
