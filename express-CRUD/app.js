const express = require('express');
const path = require('path');
const art_express = require('express-art-template');
const userService = require('./service/userService.js');

//使用一下中间件 需要安装
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();   //创建一个app对象

//#region 添加中间件
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//创建一个upload对象 用于处理form-data方式传递的数据
let upload = multer();
//#endregion

//#region 用户列表
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
//#endregion

//#region 添加用户
//添加用户的列表页面
app.get('./user/add',(req,res)=>{
    res.render('./views/users/add.art');
});

//添加页面 提交按钮点击后 表单提交到当前请求中进行处理
app.post('/user/add' ,upload.array() ,(req,res) => {
    //拿到请求数据的三种方式:
    //req.query   获取请求的地址中的参数
    //req.param   通过路由的方式获取路由的参数
    //req.body    获取表单的参数

    // console.log('------S => body-----');
    // console.dir(req.body);

    // console.log(req.body.name);

    // console.log('------E => body-----');

    //把数据保存到db.json文件中
    userService.addUser(req.body);

    res.redirect('./user/list');
});
//#endregion

//#region 删除操作
app.get('./user/del',(req,res=>{
    // res.setEncoding(req.query.id);
    userService.delUser(parseInt(req.query.id));
    res.readirect('/user/list');
});
//#endregion

//#region 修改操作
app.get('/user/edit',(req,res)=>{
    const user = userService.getUserById(parseInt(req.query.id));
    if(user == null){
        res.redirect('/user/list');
    }
    res.render('users/edit.art');
});
//用户修改完成后 提交的表单的处理
app.post('/user/edit',(req, res)=>{
    // req.body //id, name, email...
    let user = object.assign({}, req.body, {id:parseInde(req.body.id)});

    const data = userService.editiUser(user);
    if(data.code === 1){
        //修改成功后 跳转到设置的路径
        res.redirect('/user/list');
        return;
    }else{
        //修改失败后 继续显示当前修改的页面
        res.render('users/edit.art', req.body);
    }
});

//#endregion

//#region post
app.post('./api/user', (req, res) => {
    res.json(req.body);
});
//#endregion
app.listen(59999, () => {
    console.log('http://127.0.0.1:59999');
});
