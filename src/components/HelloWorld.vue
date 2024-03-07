<template>
  <div class="hello" style="border:2px dotted pink">
    <h1>{{ msg }}</h1>

    <!-- <div id="testVHtml" v-html="vHtml">

    </div> -->

    <div class="name"> Hello World 中的name</div>
    <div class="word"> Hello World 中的word</div>
    <div id="div2">div2</div>
  </div>
</template>

<script>
const img = require('../assets/20231022003324.jpg')
import importImg from '../assets/20231022003324.jpg'
console.log("importImg", importImg)
console.log("img:", img)
//默认情况下webpack没有开启对css文件的模块话，要在 JavaScript 中将 CSS 或其他预处理器文件导入为 CSS 模块，文件名应以 .module(s).(css|less|sass|scss|styl) ：
const mainCss = require("../assets/css/main.module.css")
import mainCssImport from '../assets/css/main.module.css'
console.log("mainCss:", mainCss)
console.log("mainCssImport:", mainCssImport)


//或者在webpack中配置css-loader开启css的模块话，此时css文件就不需要以.module.css结尾了
const hellloWorldCss = require("../assets/css/helloworld.css")
import helloWorldImportCss from '../assets/css/helloworld.css'
console.log("hellloWorldCss:", hellloWorldCss)
console.log("helloWorldImportCss:", helloWorldImportCss)


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      vHtml: `<div><img src="${img}">  <img src="../assets/20231022003324.jpg"> 这是vhtml</div>`
    }
  },
  mounted() {
    document.getElementById("div2").classList.add(mainCssImport.name)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.hello {
  background-image: url('~accepts/8608789.jpg');
}
</style>
