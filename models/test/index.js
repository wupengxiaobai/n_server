class TestModel {
  getData({
    page,
    limit
  }) {
    return new Promise((resolve, reject) => {
      // console.log('page---', page, 'limit---', limit)
      // sql code...
      let res = [{
        id: 1,
        msg: '111'
      }, {
        id: 2,
        msg: '222'
      }]
      resolve({
        err_code: 1,
        data: res
      })
    })
  }
}

module.exports = TestModel