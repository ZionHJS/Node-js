//对用户读取和操作用户数据的服务封装

//加载json文件模块
const dbjson = require('../db.json');

//获取所有用户数据  getUsers就是一个单元
exports.getUsers = function(){
    return dbjson.users;
}

//page第几页 size每页有多少条
exports.getPageUsers = function(page, size){
    return {users: dbjson.users.slice((page - 1)*size, page*size),
            code:1,
            msg:'Obtain success!'};
};
