/**
 * Sunny 2020/12/22 上午12:02
 * ogg sit down and start building bugs.
 * Author: Ogg <baoziyoo@gmail.com>
 */

import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/core';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
