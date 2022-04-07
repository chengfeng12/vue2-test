/*
 * @Author: your name
 * @Date: 2022-04-07 16:24:41
 * @LastEditTime: 2022-04-07 16:41:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue2/examples/router/index.js
 */

import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { path: '/home' },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@views/home/index')
  }
];

const router = new VueRouter({
  routes
});

export default router;
