/*
 * @Author: cjiao100
 * @Date: 2019-09-29 08:54:07
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-09-29 08:58:11
 * @Description: 资金流水
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  incode: {
    type: String,
    required: true
  },
  expend: {
    type: String,
    required: true
  },
  cash: {
    type: String,
    required: true
  },
  remark: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('profile', ProfileSchema)
