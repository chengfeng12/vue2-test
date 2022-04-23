<!--
 * @Author: your name
 * @Date: 2022-03-30 15:46:57
 * @LastEditTime: 2022-04-23 11:09:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue2/examples/App.vue
-->
<template>
  <div id="app">
    <fx404></fx404>
    <el-button type="primary">测试按钮</el-button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log(this, "Appp");
  },
  provide: {
    bol: false,
  },
};
</script>

<style></style>
