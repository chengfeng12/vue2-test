<!--
import { log } from 'util';
 * @Author: your name
 * @Date: 2022-04-07 16:31:30
 * @LastEditTime: 2022-04-07 16:41:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue2/examples/views/home/index.vue
-->
<template>
  <div id="home">
    <el-button type="primary">home</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      test: 'home'
    }
  },
  beforeCreate() {
    console.log(this.test, this.$router, this.log, 'test---beforeCreate');
  },
  created() {
    console.log(this.test, this.log, 'test--created');
  },
  beforeMount() {
    console.log(this.test, 'test---be-m');
  },
  mounted() {
    console.log(this.test, 'test-md');
  },
  methods: {
    log() {}
  },
}
</script>

<style>

</style>