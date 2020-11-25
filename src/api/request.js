import axios from 'axios';
import Router from '@/router/index'

const axiosConfig = {
  baseURL: process.env.NODE_ENV === 'production' ? '' : '/api',
  responseType: 'json',
  responseEncoding: 'utf8',
  headers: {},
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
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (error.response.status === 403) {
      Router.push({name: '403'});
    } else {
      return Promise.reject(error)
    }
  }
)

export default service