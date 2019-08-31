require.config({
    path:{
        jquery:'../lib/jQuery-3.4-1.js',
        show:'./show.js',
    }
});

//如果依赖的模块不在当前目录下 那么需要进行require的config配置路径映射
define(['jquery','show'], function ($,show) {
    'use strict';
    $(function(){
        $('#box').html('<h1>First rj Apllication</h1>');
        show.do();
    });
});