import Vue from 'vue';
import * as filters from '@/common/filter';

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
})