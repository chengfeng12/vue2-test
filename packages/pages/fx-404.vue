<!--
 * @Author: your name
 * @Date: 2022-03-30 15:52:17
 * @LastEditTime: 2022-03-31 15:25:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue2/packages/pages/fx-404.vue
-->
<template>
  <div class="fx404-wrapper">
    <div class="Box">
      <div class="main">
        <h1>404</h1>
        <p>抱歉，你访问的页面不存在</p>
        <el-button>
          <span :to="{ name: goHome }"> 返回首页 </span>
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "fx404",
  data() {
    return {};
  },
  created() {},
  computed: {
    goHome() {},
  },
};
</script>

<style type="text/scss" scoped>
.fx404-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(29, 221, 228);
}
.Box {
  width: 300px;
  height: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
