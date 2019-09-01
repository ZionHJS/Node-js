const fs = require('fs');
const path = require('path');

let srcFile = path.join(__dirname,'a.js');
let distFile = path.join(__dirname,'b.js');

let rs = fs.createReadStream(srcFile);
let ws = fs.createWriteStream(distFile);

rs.on('open',function(fd){
    console.log('started reading file-content');
});

rs.on('close',function(){
    console.log('reading finished');
});

rs.on('data',function(trunk){
    if(ws.write(trunk)==false){
        //缓存区满了不能写入了
        //让可读流暂停读取数据
        rs.pause();
    }
});

ws.on('drain',function(){
    //可写流数据可以继续写入的时候让可读流继续读数据
    rs.resume();
});