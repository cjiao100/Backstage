<!--
 * @Author: cjiao100
 * @Date: 2019-10-14 21:31:06
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-14 22:21:07
 * @Description: 首页
 -->
<template>
  <div class="home">
    <div class="container">
      <h1 class="title">米修在线</h1>
      <p class="lead">专注线上教育30年</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  background: url(../assets/showcase.png) no-repeat;
  background-size: 100% 100%;
}
.container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  color: #fff;
}
.title {
  font-size: 30px;
}
.lead {
  margin-top: 50px;
  font-size: 22px;
}
</style>
