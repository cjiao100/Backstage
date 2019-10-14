/*
 * @Author: cjiao100
 * @Date: 2019-10-11 09:40:42
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-14 15:55:48
 * @Description: 路由管理
 */
import Vue from 'vue'
import Router from 'vue-router'
// import store from './store'

Vue.use(Router)

const router = new Router({
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
      path: '/login',
      name: 'login',
      component: () => import('./views/login')
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

// 路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.BToken ? true : false

  // window.console.log(store)
  // window.console.log(store.getters.user)

  if (to.path === '/login') {
    isLogin ? next('/index') : next()
  } else if (to.path === '/register') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})

export default router
