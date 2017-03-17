var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// 通过路径访问指定的index页面
router.get('/index', function(req, res, next) {
    res.render('shouye');
});

// 通过路径访问指定的shop页面
router.get('/shop', function(req, res, next) {
    res.render('shop');
});

// 通过路径访问指定的login页面
router.get('/login', function(req, res, next) {
    res.render('login', { admin: req.session.admin });
});
// 1.引入mongoose
var mongoose = require('mongoose');

// 2.连接Mongodb
mongoose.connect('mongodb://localhost:27017/shop');

// 3.创建模型
var shop = mongoose.model('shop', { title: String, price: Number, img: String, ip: String, num: Number });
var user = mongoose.model('user', { username: String, password: String });


router.get('/data', function(req, res, next) {
    shop.find(function(err, data) {
        res.json(data);
    });
});

router.post('/login', function(req, res) {
    console.log(111);
    user.findOne(req.body, function(err, data) {
        console.log(data);
        if (err) {
            res.end('查询出错了');
        } else {
            if (data == null) {
                // 查询成功，但是没有数据,返回上一个页面重新写入数据
                // 用户名和密码出错
                res.redirect('back');
            } else {
                // 网站中需要使用session判断用户的相关信息，所以将信息存储到session中
                req.session.admin = data;
                res.redirect('/#!/login');
            }
        }
    })
})

module.exports = router;
