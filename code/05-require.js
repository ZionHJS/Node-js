//第一种: 引入内置的模块 node提供了一些内置的api模块 它们定义在 Node.js 源代码的 lib/ 目录下
const path = require('path');  
//const 定义一个常量 如果是简单类型 那么值是不能修改的
//const 如果声明一个引用类型 那么这个变量指向的内存地址不变

//path.join()可以把多个路径链接到一块
var t = path.join(__dirname, __filename);
console.log(t);

//第二种:引入文件模块(相对路径和绝对路径都可以)
//文件的后缀可以加 也可以不加 推荐加上后缀(效率更高)
//如果文件不添加后缀: .js .node .json
const math = require('./04-math.js');
console.log(math.add(9,9));

//引入绝对路径的形式
// const math2 = require('./Users/zionhugh/GoogleDrive_Folder/Code_Practices/老马培训/node-start/code/Users/zionhugh/GoogleDrive_Folder/Code_Practices/老马培训/node-start/code/05-require.js');
// console.log(math2.add(18,18));

//第三种:引入文件夹模块的方式 尽量少用
//1.首先到根目录下package.json文件中去找main的配置节点 main节点配置的哪个文件就从哪个文件调用模块
const m = require('./');
m.show();

const n = require('./tm'); //require指向哪个文件夹，就首先在哪个文件夹里面寻找组件
n.myShow();

//第四种:自定义模块 一般就托管在npm网站上，直接搜索模块拿来使用就可以了
const stringW = require('string-width'); //string-width是从npm上下载的模块
var num = stringW('this is stringW');
console.log(num);
console.log(module.paths);  //找当前模块的路径 就找到了node_nodule文件夹下面了




