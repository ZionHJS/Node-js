console.log('Hi, node js, my first demo!');
var a = 9;
console.log(++a);

var a = 10; //a 的作用域仅仅在.js文件内部
setInterval(function(){
    console.log(new Date());
}, 1000);
