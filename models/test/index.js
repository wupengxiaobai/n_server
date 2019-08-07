const db = require("../db/config")

class TestModel {
  async getData({
    page,
    limit
  }) {
    let ret = await new Promise((resolve, reject) => {
      db.query(`select * from test`, (err, ret) => {
        if (err) return reject('db err: ', err)
        resolve(ret)
      })
    }).then(res => {
      return res
    }).catch(err => {
      console.log(err)
    })

    return {
      err_code: 0,
      data: ret
    }
  }
}

module.exports = TestModel