const express = require('express');
const path = require('path');
const art_express = require('express-art-template');

//设置art的模版引擎
app.engine('art', art_express);

const app = express();   //创建一个app对象

//用express提供的静态目录的中间件
app.use(express.static(path.join(__dirname, 'public')));

//express动态请求
app.get('./user/list', (req,res)=>{
    // res.send('abc');
    // res.end();
    //res对象的render方法 第一个参数是模版的文件名 第二个参数是给模版的数据
    
    res.render('userlist.art',{
        title:'hello!!!'
    });
});

console.log(11223344555);

app.listen(59999, () => {
    console.log('http://127.0.0.1:59999');
});