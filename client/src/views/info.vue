<!--
 * @Author: cjiao100
 * @Date: 2019-10-14 21:44:09
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-14 22:28:04
 * @Description: Do not edit
 -->
<template>
  <div class="info">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="8">
        <img :src="user.avatar" class="avatar" />
      </el-col>
      <el-col :span="16">
        <div class="userinfo">
          <div class="useritem">
            <i class="fa fa-user"></i>
            <span>{{ user.name }}</span>
          </div>
          <div class="useritem">
            <i class="fa fa-cog"></i>
            <span>{{
              user.identity === 'manager' ? '管理员' : '普通员工'
            }}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'info',
  computed: {
    user() {
      return this.$store.getters.user
    }
  }
}
</script>

<style scoped>
.info {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  /* padding: 16px; */
}
.row-bg {
  width: 100%;
  height: 100%;
}
.user {
  text-align: center;
  position: relative;
  top: 30%;
}
.user img {
  width: 150px;
  border-radius: 50%;
}
.user span {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
.userinfo {
  height: 100%;
  background-color: #eee;
}
.useritem {
  position: relative;
  top: 30%;
  padding: 26px;
  font-size: 28px;
  color: #333;
}
</style>
