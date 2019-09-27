/*
 * @Author: cjiao100
 * @Date: 2019-09-27 17:47:28
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-09-27 18:09:18
 * @Description: 设置passport-jwt
 */
const mongoose = require('mongoose')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const keys = require('../config/keys').secretOrkey
const User = mongoose.model('users')
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = keys

module.exports = passport => {
  passport.use(
    // 解析token，获得id和name
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user)
          }

          return done(null, false)
        })
        .catch(err => console.log(err))
    })
  )
}
