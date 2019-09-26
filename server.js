/*
 * @Author: cjiao100
 * @Date: 2019-09-25 19:34:28
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-09-26 19:58:31
 * @Description: 入口文件
 */
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000
const db = require('./config/keys').mongoURI

const users = require('./routes/api/users')

app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())
app.use('/api/users', users)

// 连接数据库
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server running on port ${port}!`))
