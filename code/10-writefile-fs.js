const fs = require('fs');
const path = require('path');

let fileName = path.join(__dirname, 'a.js');

//写入文件 异步的方法
fs.writeFile(
    fileName,
    'This msg had been written into files!',
    err => {
        if(err) throw err;
        console.log('file had been written into files!');
    }
);

//同步写入的方法 
fs.writeFileSync(fileName,'HEllo!');