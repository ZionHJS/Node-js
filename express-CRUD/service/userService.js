//对用户读取和操作用户数据的服务封装

//加载json文件模块
const dbjson = require('../db.json');
const fs = require('fs');
const path = require('path');

//获取所有用户数据  getUsers就是一个单元
exports.getUsers = function(){
    return dbjson.users;
}

//page第几页 size每页有多少条
exports.getPageUsers = function(page, size){
    //对传入的参数做相关的处理
    //page:必须是数字类型，而且值必须大于0
    if(typeof(page) !== 'number' && page <= 0){
        return{
            code:0,
            msg:'page parameter is not qualified!'
        }
    }
    if(typeof(size) !== 'number' && size <= 0){
        return{
            code:0,
            msg:'size parameter is not qualified!'
        }
    }

    return {
        users: dbjson.users.slice((page - 1)*size, page*size),
            code:1,
            msg:'Obtain Success!'
    };
};

//把数据保存到db.json文件中
exports.addUser = function(user){
    //先判断user对象的数据是否合法
    if(!user.name){
        return{
            msg:'userName can\'t be empty',
            code:0,
        }
    }

    //user.id //自动赋值id 且id数值唯一 Date.now()
    const newUser = Object.assign({id:Date.now()},user);   //MDN
    dbjson.users.push(newUser);
    //把数据保存到db.json文件中

    _saveJson(dbjson);

    return{
        msg:'save success!',
        code:1
    }
}

exports.delUser = function(id){
    console.log(id);
    if(typeof(id)==='number' && id>0){
        const index = dbjson.users.findIndex(u => u.id ==id);
        console.log(index);
        dbjson.users.splice(idnex, 1);
        _saveJson(sbjson);
        return{
            code:1,
            msg:"delte success!"
        }
    }
    return{
        code:0,
        msg:'delete failed! id must be bigger than 0'
    }
}

//把对象转成 json字符串 并保存到dbjson文件中
function _saveJson(jsonData){
    const strJson = JSON.stringify(jsonData);   //js语言中的一个方法:把一个对象转成json字符串
    fs.writeFileSync(path.join(__dirname, '../db.json'), strJson, {encoding:'utf8'});
}
