//用node写一个初始化
//初始化测试用户数据
const fs = require('fs');
const path = require('path');
const Mock = require('mockjs');

//拿到数据文件
const jsondb = require('./db.json');

//初始化user属性 确保它不为空且是一个数组
jsondb.users || (jsondb.users = []);

//#region 之前写for循环模拟数据
// for (var i = 0; i < 33; i++){
//     jsondb.users.push({
//         id:10010 + i,
//         name:'david' + i,
//         phone: '13987329116',
//         email:'david@gmail.com'
//     });
// }
//#endregion

//mock设定数据的规则
let data = Mock.mock({
    "users|33":[{
        "id|+1":20000,
        "name":"@name",
        "email":"@email",
        "phone":"@natural(132000000,13300000)",
        "address":"@county(true)",
        "zip":"@zip",  //@是mockjs定义的一个占位符
        "birthday":"@Date('yyyy-mm-dd')"
    }]
});
//...三个点代表展开符 es6展开运算符 用来展开字符串，对象，数组
jsondb.users.push(...data.users);
//把数据写入db.json  
//path的地方是数据写入的位置
//.stringify是把内容转化为字符串
fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(jsondb),{encoding:'utf8'});

console.log('write basic data success!');
