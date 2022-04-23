<!--
 * @Author: your name
 * @Date: 2022-04-23 11:02:28
 * @LastEditTime: 2022-04-23 11:07:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue2/examples/views/home/components/HelloWord.vue
-->
<template>
  <div class="hello-word">
    <h1>HelloWord</h1>
    <el-button @click="log">输出父组件</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWord',
  data() {
    return {
      obj: {
        name: 'helloWord'
      }
    }
  },
  methods: {
    log() {
      console.log(this.$parent, '父组件');
    }
  }
}
</script>
