const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const app = express()
const {
  baseConfig
} = require('./config')

const testRoute = require('./routes/test')
const uploadRoute = require('./routes/upload')


//  静态资源托管
app.use(express.static(path.join(__dirname, 'client/dist')));

//  配置body-parser中间件
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

//  配置跨域
app.use(cors())


app.use('/api/test', testRoute)
app.use('/upload', uploadRoute)

app.use('*', async (req, res) => {
  res.send({
    err_code: -1,
    msg: `not found request！in ${req.url}`
  })
})

const port = baseConfig.port ? baseConfig.port : 9001
app.listen(port, async () => {
  console.log(`node server runing in ${port}... `)
})