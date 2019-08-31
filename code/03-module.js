//模块内的变量
// console.log(module);
// console.log(__filename);
// console.log(__dirname);

// console.log(require);

//引用04-math文件对应的模块
let t = require('./04-math.js');
 
//调用模块02_math文件的add方法
console.log(t.add(9,10));