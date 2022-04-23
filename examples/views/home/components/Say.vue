<!--
 * @Author: your name
 * @Date: 2022-04-23 11:02:28
 * @LastEditTime: 2022-04-23 11:11:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue2/examples/views/home/components/HelloWord.vue
-->
<template>
  <div class="say">
    <h1>Say</h1>
  </div>
</template>

<script>
export default {
  name: "Say",
  data() {
    return {
      msg: "Say",
    };
  },
  methods: {
    log() {
      console.log("这是 say 组件");
    },
  },
};
</script>
