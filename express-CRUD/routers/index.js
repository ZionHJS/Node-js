const express = require('express');
const userService = require('../service/userService');

const router = express.Router();  //创建一个router对象

//router对象相当于app对象 app.get post all ... 处理客户端的请求
router.get('/userlist', (req, res) => {
    // res.render('stus/index.art');
    res.json(userService.getUsers());
});

module.exports = router;