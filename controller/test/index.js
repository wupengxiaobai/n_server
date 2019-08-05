const TestModel = require('../../models/test/index')
const testModel = new TestModel()

class TestController {
  // 获取test数据
  async getTestData(query) {
    let {
      page = 1,
        limit = 20
    } = query;
    let data = await testModel.getData({
      page,
      limit
    })
    data.data.push({
      id: 520,
      msg: 'testdata push'
    })
    return data
  }
}


module.exports = TestController