<!--
 * @Author: cjiao100
 * @Date: 2019-10-11 09:40:42
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-14 16:02:08
 * @Description: 入口文件
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode'

export default {
  name: 'app',
  created() {
    if (localStorage.BToken) {
      const decoded = jwt_decode(localStorage.BToken)
      const LocalTime = +Date.now()
        .toString()
        .substring(0, 10)

      // window.console.log(decoded.exp)
      // window.console.log(LocalTime)

      if (decoded.exp - LocalTime >= 0) {
        // 将解析后的数据放入Vuex中
        this.$store.dispatch('setAuthenticated', !this.isEmpty(decoded))
        this.$store.dispatch('setUser', decoded)
      } else {
        localStorage.removeItem('BToken')
        this.$router.push('/login')
      }
    }
  },
  methods: {
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
      )
    }
  }
}
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
