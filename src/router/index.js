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
    path: '/',
    component: () => import('@/views/Index'),
    children: [
      {
        path: 'user',
        name: 'userList',
        component: () => import('@/views/User/User/User'),
      },
      {
        path: 'user/group',
        name: 'groupList',
        component: () => import('@/views/User/Group/Group'),
      },
      {
        path: 'system/job',
        name: 'systemJob',
        component: () => import('@/views/System/Job/Job'),
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

