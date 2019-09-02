const userService = require('../service/userService.js');
const assert = require('assert');  //assert断言库
const should = require('should');
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
    });
    
    //定义测试用例 使用it 测试 getUsers()是否达到预期
    it('#getUsers()', function(){
        //getUser()执行后返回一个数组
        var arr = userService.getUsers();
        // Array.isArray(arr);  //true or false
        assert.equal(true, Array.isArray(arr));
        assert.equal(true, arr.length >= 33);
    });
    //#region  node原生assert模块
    // it('#getPageUsers()',function(){
    //     //console.log('sss');
    //     //33条数据
    //     const data = userService.getPageUsers(2, 10);
    //     //{users:[], code:1, msg:"getPageUsers success"}
    //     //正常参数的测试
    //     assert.equal(data.users.length, 10);
    //     assert.equal(Array.isArray(data.users), true);

    //     //测试异常数据
    //     const eData = userService.getPageUsers('-2', '*sd9=10');
    //     // assert.equal(eData.users.length, 10);
    //     // assert.equal(Array.isArray(eData.users), true);
    //     assert.equal(eData.code, 0, '如果传入非法的page返回code为0');
    //     assert.equal(eData, {
    //         code:0,
    //         msg:'page parameter is not qualified!'
    //     }, '传入非法参数，应该返回对象...');
    // });
    //#endregion

    it('#getPageUsers() 用shouldjs', function(){
        const data = userService.getPageUsers('222',333);
        // {
        //     code:0,
        //     msg:'page parameter is not qualified!'
        // }
        //测试第一个分支
        data.should.be.a.Object();
        data.code.should.eqls(0);
        data.should.eqls({
            code:0,
            msg:'page parameter is not qualified!'
        });
        data.code.should.aboveOrEqual(0);

        //另外一种写法 
        // should(data).eql({
        //     code:0,
        //     msg:'page parameter is not qualified!'
        // });

        //特殊情况
        // var t = Object.create(null);
        // t.should //不可以这样使用 因为是null
        // should(t).be.a.Object();  //应该这么来用

        //测试第二个分支
        userService.getPageUsers(2, 'sfsfas').should.eql({
            code:0,
            msg:'size parameter is not qualified!'
        });

        //测试第三个分支
        const edata = userService.getPageUsers(2,5);
        edata.should.be.a.Object();
        edata.code.should.eql(1);
        edata.users.length.should.eql(5);
        edata.should.containEql({
            code:1,
            msg:'obtain success'
        });
    });

    it('#delUser()',function(){
        //正常删除数据
        const t = userService.delUser(20004);
        t.should.eqls({
            code:1,
            msg:'delete success!'
        });
        
        userService.delUser('sdfsf').should.eqls({
            code:0,
            msg:'delete failed, id must be larger than 0'
        });
        userService.delUser(0).should.eqls({
            code:0,
            msg:'delete failed, id must be larger than 0'
        })
    })
});






