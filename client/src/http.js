/*
 * @Author: cjiao100
 * @Date: 2019-10-11 18:33:00
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-11 18:42:55
 * @Description: Do not edit
 */
import axios from 'axios'
import { Loading, Message } from 'element-ui'

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
    return Promise.reject(error)
  }
)

export default axios
