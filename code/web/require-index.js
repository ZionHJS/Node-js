require.config({
    path:{
        jquery:'../lib/jQuery-3.4-1',
        show:'./show'
    }
});

//如果依赖的模块不在当前目录下 那么需要进行require的config配置路径映射
define(['../lib/jQuery-3.4-1.js','./show.js'], function ($,show) {
    'use strict';
    $(function(){
        $('#box').html('<h1>First rj Apllication</h1>');
        show.do();
    });
});