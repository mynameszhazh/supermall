import axios from 'axios'

export function request (config) {
  // 因为这个玩意就是一个promise  所有我就可以直接不用再写一个promise的函数了  多此一举
  // 1.创建我的axios实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  // 2.axios的拦截器
  // 2.1请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config)
    /*
    1.可以把我的config拦截下来做一些处理比如heard
    2.比如我发送网络请求的时候，都希望再页面上显示一些图标
    3.某些网络请求（比如登录（token）），必须携带一些特殊的信息
    */
    return config
  }, err => {
    console.log(err)
  })
  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res)
    return res.data
  }, err => {
    console.log(err)
  })
  // 3.发送真正的网络请求
  return instance(config)
}
