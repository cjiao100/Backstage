/*
 * @Author: cjiao100
 * @Date: 2019-09-29 08:54:07
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-11 09:33:37
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
  // 收入
  income: {
    type: String,
    required: true
  },
  // 支出
  expend: {
    type: String,
    required: true
  },
  // 金额
  cash: {
    type: String,
    required: true
  },
  // 备注
  remark: {
    type: String,
    default: '无'
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('profile', ProfileSchema)
