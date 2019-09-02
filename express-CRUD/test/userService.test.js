const userService = require('../service/userService.js');
const assert = require('assert');  //assert断言库
//单元测试 BDD 测试userService.js

//一个单元测试: 定义一个场景，场景进行初始化数据 开始调用需要测试的单元，然后检查执行的结果是否是我门预期的结果。是:单元测试通过 不是:单元测试不通过
//下一步:清理测试现场数据。

//定义一个测试场景 mocha 里面的describe(场景描述，测试场景的回调)
describe('userServiceTest',function(){
    //初始化场景的数据BDD before:所有的测试用例执行之前先执行的代码
    before(function(){
        console.log('before ...');
        //一般会做数据初始化
        require('../initData.js'); //初始化db.json文件的代码
    });

    //after所有测试用例执行完成后执行的代码
    after(function(){
        //做一些清理工作　
        console.log('... after');
    })
    
    //定义测试用例 使用it 测试 getUsers()是否达到预期
    it('#getUsers()', function(){
        //getUser()执行后返回一个数组
        var arr = userService.getUsers();
        // Array.isArray(arr);  //true or false
        assert.equal(true, Array.isArray(arr));
        assert.equal(true, arr.length >= 33);
    });
    
    it('#getPageUsers()',function(){
        //console.log('sss');
        //33条数据
        const data = userService.getPageUsers(2, 10);
        //{users:[], code:1, msg:"getPageUsers success"}
        //正常参数的测试
        assert.equal(data.users.length, 10);
        assert.equal(Array.isArray(data.users), true);

        //测试异常数据
        const eData = userService.getPageUsers('2', '10');
        assert.equal(eData.users.length, 10);
        assert.equal(Array.isArray(eData.users), true);
    });
});






