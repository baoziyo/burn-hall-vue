/**
 * Sunny 2020/12/22 上午12:02
 * ogg sit down and start building bugs.
 * Author: Ogg <baoziyoo@gmail.com>
 */

import Vue from 'vue';
import * as filters from '@/common/filter';

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
})