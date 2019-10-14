/*
 * @Author: cjiao100
 * @Date: 2019-10-11 18:33:00
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-14 10:57:36
 * @Description: Do not edit
 */
import axios from 'axios'
import { Loading, Message } from 'element-ui'
import router from './router' 

let loading

function startLoading() {
  loading = Loading.service({
    lock: true,
    text: '拼命加载中...',
    background: 'rgba(0, 0, 0, .7)'
  })
}

function endLoading() {
  loading.close()
}

// 请求拦截
axios.interceptors.request.use(
  config => {
    startLoading()

    if (localStorage.BToken) {
      // 设置统一请求头
      config.headers.Authorization = localStorage.BToken
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
axios.interceptors.response.use(
  response => {
    endLoading()
    return response
  },
  error => {
    endLoading()
    Message.error(error.response.data)

    // 获取错误状态码
    const { status } = error.response
    if (status === 401) {
      Message.error('登录过期，请重新登录')
      // 清除Token
      localStorage.removeItem('BToken')
      // 返回登录页面
      router.push('/login')
    }

    return Promise.reject(error)
  }
)

export default axios
