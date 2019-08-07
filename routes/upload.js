const express = require('express')
const upload = require('../utils/multer')
const router = express.Router()

router.post('/pic', upload.single('file'), async (req, res) => {
  res.send({
    err_code: 0,
    msg: '上传成功！'
  })
})

module.exports = router