const fs = require('fs');
const path = require('path');

let fileName = path.join(__dirname,'dog.jpg');
//创建一个可读取的流
let stream = fs.createReadStream(fileName);

//打开文件流的事件 当流的管道建立后，并打开的时候，触发open事件
stream.on('open',function(fd){
    console.log('pipe being built',fd)
});
let i = 0;
//当数据传输来的时候 会触发data事件
stream.on('data',function(trunk){
    console.log('No%d', i ,trunk);
    i++;
});
//当数据读取完成后 end事件
stream.on('end',function(){
    console.log('Stream is done!')
});