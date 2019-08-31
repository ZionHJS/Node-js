//引入fs模块
const fs = require('fs');

//启动监听文件夹  __dirname代表当前文件夹 这里监听的是当前整个文件夹
let watcher = fs.watch(__dirname,function(eventType,fileName){
    console.log('callback:', eventType, fileName);
});  //后面两个参数都可以省略(只要在文档中是中括号表示的)

//监听改变的事件
watcher.on('change',function(eventType,fileName){
    console.log('change:', eventType, fileName)
});
//关闭监听
setTimeout(function(){
    watcher.close();
},100000);