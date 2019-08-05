const multer = require('multer');
const path = require('path')
//设置文件上传路径和文件命名
let tupianName = '';
//  配置上传文件相关(保存目录文件, 重命名)
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //文件上传成功后会放入public下的upload文件夹
        cb(null, path.join(__dirname, '../public/test/upload'))
    },
    filename: function (req, file, cb) {
        // console.log(file);
        let ext = file.originalname.substr(file.originalname.indexOf('.'))
        tupianName = new Date().getTime() + ext;
        //设置文件的名字为其原本的名字，也可以添加其他字符，来区别相同文件，例如file.originalname+new Date().getTime();利用时间来区分
        cb(null, tupianName)
    }
});
let upload = multer({
    storage: storage
});

module.exports = upload