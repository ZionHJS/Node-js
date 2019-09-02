const express = require('express');
const path = require('path');
const art_express = require('express-art-template');
const userService = require('./service/userService.js');

const app = express();   //创建一个app对象

//设置art的模版引擎
app.engine('art', art_express);

//用express提供的静态目录的中间件
app.use(express.static(path.join(__dirname, 'public')));

//express动态请求
app.get('./user/list', (req,res)=>{
    // res.send('abc');
    // res.end();

    //res对象的render方法 第一个参数是模版的文件名 第二个参数是给模版的数据
    //express引擎会自动到view文件夹下搜索文件 如果是子文件夹则需要指明是哪个文件夹
    // res.render('./users/userlist2.art',{
    //     title:'hello!!!',
    //     users:userService.getUsers()
    // });
    
    //实现分页获取数据 page, size
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;
    // console.log(page,size);
    const data = userService.getPageUsers(page, size);
    res.render('./views/users/userlist2.art', data);
});

console.log(11223344555666);

app.listen(59999, () => {
    console.log('http://127.0.0.1:59999');
});

