<!--
import { log } from 'util';
 * @Author: your name
 * @Date: 2022-04-07 16:31:30
 * @LastEditTime: 2022-04-23 15:33:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue2/examples/views/home/index.vue
-->
<template>
  <div id="home">
    <h1>Home</h1>
    <el-button type="primary" @click="log">输出子组件</el-button>
    <HelloWord ref="helloWord" />
    <Say ref="say" />
  </div>
</template>

<script>
import HelloWord from './components/HelloWord.vue';
import Say from './components/Say.vue';
import { setTimeout } from 'timers';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    HelloWord,
    Say
  },
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
    console.log(this.bol, 'inject');
    console.log(this.userInfo);
  },
  computed: {
    ...mapState(['activeIndexs', 'userInfo']),
  },
  inject: ['bol'],
  methods: {
    log() {
      console.log(this.$refs.helloWord);
      console.log(this.$children, "$children");
      this.$store.state.activeIndexs = 'ahhahha';
      setTimeout(() => {
        console.log(this.$store.state.activeIndexs);
      }, 1000)
    }
  },
}
</script>

<style>

</style>