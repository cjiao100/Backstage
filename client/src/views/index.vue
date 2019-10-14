<!--
 * @Author: cjiao100
 * @Date: 2019-10-11 10:28:27
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-14 23:10:24
 * @Description: Do not edit
 -->
<template>
  <div class="index">
    <HeadNav></HeadNav>
    <LeftMenu></LeftMenu>
    <div class="rightContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeadNav from '../components/HeaderNav'
import LeftMenu from '../components/LeftMenu'

export default {
  name: 'index',
  components: {
    HeadNav,
    LeftMenu
  }
}
</script>

<style scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.rightContainer {
  position: relative;
  top: 0;
  left: 180px;
  width: calc(100% - 180px);
  height: calc(100% - 71px);
  overflow: auto;
}
</style>
