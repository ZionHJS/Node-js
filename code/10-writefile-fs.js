const fs = require('fs');
const path = require('path');

let fileName = path.join(__dirname, 'a.js');

//写入文件 异步的方法
// fs.writeFile(
//     fileName,
//     'This msg had been written into files!',
//     err => {
//         if(err) throw err;
//         console.log('file had been written into files!');
//     }
// );

// //同步写入的方法 
// fs.writeFileSync(fileName,'HEllo!');
// fs.writeFileSync(fileName,'Hello02',{
//     flag:'a'
// });

//数据流写入大文件的方法　
//往a.js这中写入100个字符串
let fileName2 = path.join(__dirname, 'a.js');

let stream2 = fs.createWriteStream(fileName2, {
    flag:'a'
});

stream2.on('open',function(fd){
    console.log('written stream opened',fd)
});
stream2.on('close',function(){
    console.log('written stream closed')
});

//往可写流里面写入数据
for(let i=0; i<100; i++){
    stream2.write('this is a loop!\r\n');
}

//调用end方法 结束可写流
stream2.end('this is the end!');
