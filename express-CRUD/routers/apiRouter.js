const express = require('express');
const userService = require('../service/userService');

//创建一个router对象
const router = express.Router();

//router对象相当于我的app对象, app.get post all ... 处理客户端的请求
router.get('/userlist', (req, res) => {
    res.join(userService,getUsers());
});

// GET/api/pageuser
router.get('/pageUser', (req, res) => {
    //要求用户传来的数据:page, size, 
    //返回数据:{page:3, size:10, count:100, data:[...]}
    let pageIndex = parseInt(req.query.page);
    pageIndex = isNaN(pageIndex) || pageIndex <= 0 ? 1 : pageIndex;
    let pageSize = parseInt(req.query.size);
    pageSize = isNaN(pageSize) || pageSize <= 0 ? 1 : pageSize;

    const data = userService.getPageUsers(pageIndex, pageSize);

    res.json({
        page:pageIndex,
        size:pageSize,
        data:data.users,
        count:data.count
    });
});

router.post('/deluser/:id', (req, res) => {
    const id = parseint(req.params.id);
    if(isNaN(id)){
        res.json({
            msg:'delete failed, id is wrong',
            code:0
        });
        return;
    }

    res.json(userService.delUser(id));
});

module.exports = router;