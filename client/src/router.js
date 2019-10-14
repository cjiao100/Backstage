/*
 * @Author: cjiao100
 * @Date: 2019-10-11 09:40:42
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-14 09:53:11
 * @Description: 路由管理
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/index')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('./views/404')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
