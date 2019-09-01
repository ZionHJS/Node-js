//用http模块创建一个web服务器端 
const http = require('http');
const path = require('path');
const fs = require('fs');

//创建一个http的服务器端对象
let server = http.createServer();

//监听客户端的请求数据和发送相应报文
server.on('request', (req, res) => {
    //req:请求报文的封装
    // console.log(req.headers);
    // console.log(req.url);
    // console.log(req.method);  //打印请求的方法get post

    let conType = 'plain/text';
    //设置响应文件的类型和状态码
    res.writeHeader(200, {
        'Content-Type':conType,
    });

    //url:全路径
    let fileName = path.join(__dirname, 'web/', req.url);  //拿到路径

    switch(path.extname(fileName)){
        case '.png':
           conType = 'image/png';
           break;
        case '.jpeg':
        case '.jpg':
            conType = 'image/jpeg';
            break;
        case '.gif':
            conType = 'image/gif';
            break;
        case '.html':
            conType = 'text/html';
            break;
        default: 
            conType = 'text/plain';
    }

    let reader = fs.createReadStream(fileName);
    reader.pipe(res);

    //res:相应的封装
    // res.write('hi, from google.com');
    // res.end();  //结束相应
});

//让服务器端对象开始监听
server.listen(58889, () =>{
    console.log('server started listening port:58889. open in browser:http:/127.0.0.1:58889');
});