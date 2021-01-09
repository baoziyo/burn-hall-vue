/**
 * Sunny 2020/12/22 上午12:02
 * ogg sit down and start building bugs.
 * Author: Ogg <baoziyoo@gmail.com>
 */

import axios from 'axios';
import {message} from 'ant-design-vue';

const axiosConfig = {
  baseURL: process.env.NODE_ENV === 'production' ? '' : '/api',
  responseType: 'json',
  responseEncoding: 'utf8',
  headers: {
    ACCEPT: 'application/whell.api+json',
    assetsToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxIiwiaWF0IjoxNjA3MzMyMTA1LCJleHAiOjE2MDczMzU3MDUsInNpZ25hdHVyZSI6ImJ1cm5IYWxsIiwiZ3VpZCI6MTIzfQ.1wK0R67Z5sFwxETHWk6C7U5hjE2RuO9eD3sAQnTvO0A',
  },
};

const service = axios.create(axiosConfig)

// 请求拦截器，例如请求的时候在头部加上请求的token
service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error);
  return Promise.reject()
})

// 响应拦截器,例如判断服务器返回的状态，400，500
service.interceptors.response.use(
  response => {
    return Promise.resolve(response.data)
  },
  error => {
    message.error(error.response.data.message);

    return Promise.reject(error.response);
  }
)

export default service