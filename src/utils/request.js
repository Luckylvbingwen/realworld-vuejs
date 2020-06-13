/* 基于 axios 封装的请求模块 */
import axios from 'axios'
import store from '../store'

const request = axios.create({
  baseURL: 'https://conduit.productionready.io/' //设置请求的基础路径，方便后面不用每次都要写
})

// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  const user = store.state.user;

  //如果用户登录，统一往本次请求投中添加用户 token
  if (user) {
    config.headers.Authorization = `Token ${user.token}`
  }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
request.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default request