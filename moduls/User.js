/*
 * @Author: cjiao100
 * @Date: 2019-09-26 17:08:35
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-09-26 21:46:45
 * @Description: 用户模型
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('users', UserSchema)
