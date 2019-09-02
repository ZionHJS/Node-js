//用node写一个初始化
//初始化测试用户数据
const fs = require('fs');
const path = require('path');

//拿到数据文件
const jsondb = require('./db.json');

//初始化user属性 确保它是一个数组
jsondb.users || (jsondb.users = []);

for (var i = 0; i < 33; i++){
    jsondb.users.push({
        id:10010 + i,
        name:'david' + i,
        phone: '13987329116',
        email:'david@gmail.com'
    });
}

//把数据写入db.json  
//path的地方是数据写入的位置
//.stringify是把内容转化为字符串
fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(jsondb),{encoding:'utf8'});

console.log('write basic data success!');