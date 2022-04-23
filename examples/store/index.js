/*
 * @Author: your name
 * @Date: 2022-04-08 16:02:22
 * @LastEditTime: 2022-04-23 15:29:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue2/examples/store/index.js
 */
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);


const state = {
  activeIndexs: '122',
  userInfo: {
    name: "管理员",
    sex: '男'
  }
}


const mutations = {
  undataIndex(state,data){
		state.activeIndexs = data;
	},
}

export default new Vuex.Store({
  state,
  mutations
});