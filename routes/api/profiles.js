/*
 * @Author: cjiao100
 * @Date: 2019-09-29 08:59:27
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-09-29 11:31:58
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

/**
 * $ POST api/profiles/add
 * @Description: 创建信息
 */
router.post(
  '/add',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    if (
      req.body.type &&
      req.body.desc &&
      req.body.income &&
      req.body.expend &&
      req.body.cash
    ) {
      const profilesFields = req.body
      new Profile(profilesFields).save().then(profile => {
        res.json(profile)
      })
    } else {
      res.status(400).json('请完善信息')
    }
  }
)

/**
 * $ GET api/profiles
 * @Description: 获取所有信息
 */
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.find()
      .then(profiles => {
        if (!profiles) {
          res.status(404).json('没有内容')
        }

        res.json(profiles)
      })
      .catch(err => res.status(400).json(err))
  }
)

/**
 * $ GET api/profiles/:id
 * @Description: 获取单个信息
 */
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ _id: req.params.id })
      .then(profile => {
        if (!profile) {
          res.status(404).json('没有内容')
        }

        res.json(profile)
      })
      .catch(err => res.status(400).json(err))
  }
)

/**
 * $ POST api/profiles/detele/:id
 * @Description: 删除单个信息
 */
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ _id: req.params.id })
      .then(profile => {
        if (!profile) {
          res.status(404).json('没有内容')
        }

        res.json(profile)
      })
      .catch(err => res.status(400).json(err))
  }
)

/**
 * $ POST api/profiles/edit/:id
 * @Description: 修改单个信息
 */
router.get(
  '/edit/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    if (
      req.body.type &&
      req.body.desc &&
      req.body.income &&
      req.body.expend &&
      req.body.cash
    ) {
      const profilesFields = req.body
      Profile.findOneAndUpdate(
        {_id: req.params.id},
        {$set: profilesFields},
        {new: true}
      ).then(profile => {
        res.json(profile)
      })
    } else {
      res.status(400).json('请完善信息')
    }
  }
)

module.exports = router
