//安装express  npm i -P express

//引入express module
const express = require('express');
const path = require('path');

//express 完全兼容connect用法
let app = express();

//注册唯一内置的中间件:static
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*',function(req, res, next){
    console.log(req.param('id'));
    console.log(req.param('name'));
    next();
});

app.get('/api',function(req, res, next){
    console.log('/api');
    res.send('1234');
    // res.send('----');
    res.end();
});

//中间件 兼容connect的写法
// app.use(function(req, res, next){
//     console.log(1);
//     next();
// });
// app.use(function(req, res, next){
//     console.log(2);
//     next();
// });
// app.use(function(req, res, next){
//     console.log(3);
//     res.write('23456');
//     res.end();
// });

app.listen('59977');