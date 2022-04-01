/*
 * @Author: your name
 * @Date: 2022-03-30 15:46:57
 * @LastEditTime: 2022-03-31 15:17:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue2/examples/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import fxCcomponentsTest from 'com-yxr'
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// Vue.use(ElementUI, "ElementUI");
Vue.use(fxCcomponentsTest);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
