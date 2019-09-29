/*
 * @Author: cjiao100
 * @Date: 2019-09-29 08:59:27
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-09-29 09:41:59
 * @Description: profileAPI
 */
const express = require('express')
const passport = require('passport')

const Profile = require('../../moduls/Profile')
const router = express.Router()

/**
 * $ GET api/profiles/test
 * @Description: 测试接口
 */
router.get('/test', (req, res) => {
  res.json({
    msg: 'profiles work'
  })
})


module.exports = router
