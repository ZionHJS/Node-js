const fs = require('fs');
const path = require('path');

let srcFile = path.join(__dirname,'a.js');
let distFile = path.join(__dirname,'b.js');

let rs = fs.createReadStream(srcFile);
let ws = fs.createWriteStream(distFile);

rs.on('end',function(){
    console.log('reading finished');
});

ws.on('finish',function(){
    console.log('writting finished');
});

rs.pipe(ws);