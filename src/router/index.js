/**
 * Sunny 2020/12/22 上午12:02
 * ogg sit down and start building bugs.
 * Author: Ogg <baoziyoo@gmail.com>
 */

import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '',
    component: () => import('@/views/Index'),
    children: [
      {
        path: '/user',
        name: 'userList',
        component: () => import('@/views/User/User/User'),
      },
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login'),
  },
];

export default new Router({
  routes,
});

