const express = require('express');
const path = require('path');

const app = express();   //创建一个app对象

//用express提供的静态目录的中间件
app.use(express.static(path.join(__dirname, 'public')));

//express动态请求
app.get('./user/list', (req,res)=>{
    res.send('abc');
    res.end();
});

console.log(11223344);

app.listen(59999, () => {
    console.log('http://127.0.0.1:59999');
});