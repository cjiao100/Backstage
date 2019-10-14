/*
 * @Author: cjiao100
 * @Date: 2019-09-26 16:48:07
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-14 10:57:54
 * @Description: login && register
 */

const express = require('express')
const bcrypt = require('bcrypt')
const gravatar = require('gravatar')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const User = require('../../moduls/User')
const keys = require('../../config/keys').secretOrkey
const router = express.Router()

/**
 * $ GET api/users/test
 * @Description: 测试接口
 */
router.get('/test', (req, res) => {
  res.json({
    msg: 'login work'
  })
})

/**
 * $ POST api/users/register
 * @Description: 注册接口
 */
router.post('/register', (req, res) => {
  console.log(req.body)
  // 查询数据库中是否有邮箱
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json('邮箱已被注册')
    } else {
      const avatar = gravatar.url('req.body.email', {
        // 图片尺寸
        s: '200',
        r: 'pg',
        d: 'mm'
      })
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        identity: req.body.identity,
        password: req.body.pass
      })

      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash

          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
        })
      })
    }
  })
})

/**
 * $ POST api/users/login
 * @Description: 登录接口
 */
router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.pass

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json('用户不存在')
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const rule = {
          id: user._id,
          name: user.name,
          avatar: user.avatar,
          identity: user.identity
        }
        // 规则、加密名字、过期时间、箭头函数
        jwt.sign(rule, keys, { expiresIn: 10 }, (err, token) => {
          if (err) throw err

          res.json({
            success: true,
            token: 'Bearer ' + token
          })
        })
      } else {
        return res.status(400).json('密码错误')
      }
    })
  })
})

/**
 * $ GET api/users/current
 * @Description 获取用户信息
 */
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      identity: req.user.identity
    })
  }
)

module.exports = router
