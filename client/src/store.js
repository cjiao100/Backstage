/*
 * @Author: cjiao100
 * @Date: 2019-10-11 09:40:42
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-14 21:24:25
 * @Description: 状态管理
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_AUTHENTICATED: 'SET_AUTHENTICATED',
  SET_USER: 'SET_USER'
}

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: {}
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user
  },
  mutations: {
    [types.SET_AUTHENTICATED](state, isAuthenticated) {
      if (isAuthenticated) {
        state.isAuthenticated = isAuthenticated
      } else {
        state.isAuthenticated = false
      }
    },
    [types.SET_USER](state, user) {
      if (user) {
        state.user = user
      } else {
        state.user = {}
      }
    }
  },
  actions: {
    setAuthenticated: ({ commit }, isAuthenticated) => {
      commit(types.SET_AUTHENTICATED, isAuthenticated)
    },
    setUser: ({ commit }, user) => {
      commit(types.SET_USER, user)
    },
    clearCurrentState: ({ commit }) => {
      commit(types.SET_AUTHENTICATED, false)
      commit(types.SET_USER, {})
    }
  }
})
