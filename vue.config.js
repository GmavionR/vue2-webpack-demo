const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      css: {
        //开启css模块化支持，所有的css文件都被作为css module处理。false的是时候只有*.module.css文件被作为css module处理
        modules: {
          // auto: ()=>true, 这种方式会使得vue文件中的 <style>标签中的样式失效。
          auto:true,
        },
      },
    },
  },
});
