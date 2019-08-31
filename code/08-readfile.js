const fs = require('fs');
const path = require('path');

//读取一个文件的内容:__filename代表当前文件  这里编码是utf8代表返回字符串
//readFileSync代表一个同步方法 当node执行到此行代码的时候
//整个程序等待文件读取完毕后 再往下执行
let fileContent = fs.readFileSync(__filename,{encoding:'utf8'});

console.log(fileContent);


//异步读取文件的方法 主线程继续执行后续的代码，线程池的线程读取文件内容，
//文件内容读取成功后，调用回调函数
//此方法仅适用于读取小文件
let indexJSFileName = path.join(__dirname,'index.js');

fs.readFile(indexJSFileName,{encoding:'utf8'},function(err,data){
    console.log('fileRead done, execute the call back!');
    if(err){
        console.log('something went wrong',err);
        return;
    }
    console.log(data);
});
console.log('main thread continues to execute...');