console.log('Hi, node js, my first demo!');
var a = 9;
console.log(++a);

// var a = 10; //a 的作用域仅仅在.js文件内部
// setInterval(function(){
//     console.log(new Date());
// }, 1000);

// console.error(111111);

console.dir(Math);
console.log(Object.prototype);
console.time('123');
var t = 0;
for(var i=0; i<1000; i++){
    t += 1;
}
console.timeEnd('123');
