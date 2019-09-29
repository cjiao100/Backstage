/*
 * @Author: cjiao100
 * @Date: 2019-09-25 19:34:28
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-09-29 08:59:32
 * @Description: 入口文件
 */
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const app = express()
const port = process.env.PORT || 3000
const db = require('./config/keys').mongoURI

const users = require('./routes/api/users')
const profile = require('./routes/api/profiles')

require('./config/passport')(passport)

app.use(passport.initialize())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())
app.use('/api/users', users)
app.use('/api/profiles', profile)

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
