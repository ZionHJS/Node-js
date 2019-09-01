//对用户读取和操作用户数据的服务封装

//加载json文件模块
const dbjson = require('../db.json');

//获取所有用户数据
exports.getUsers = function(){
    return dbjson.users;
}

//page第几页 size每页有多少条
exports.getPageUsers = function(page, size){
    
};
