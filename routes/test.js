const express = require('express')
const router = express.Router()
const TestController = require('../controller/test/index.js')
const testController = new TestController()

/**
 * @ get 测试接口
 */
router.get('/test1', async (req, res) => {
  let ret = await testController.getTestData(req.query)
  res.send(ret)
})

router.post('/test2', async (req, res) => {
  res.send({
    err_code: 0,
    msg: 'post test success: ' + JSON.stringify(req.body)
  })
})

module.exports = router