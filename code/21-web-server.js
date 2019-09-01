//服务器端
const net = require('net');

//创建服务端对象
let server = net.createServer();

server.on('connection', client => {
    //client就是指向客户端的一个对象 可以通过它给客户端发送数据 可读/可写流
    //读取数据
    client.on('data', chunk => {
        console.log(chunk.toString('utf8'));
    });
    //往客户端写入数据
    //es6语法中增加了用反引号来做多行字符串定义的语法
    client.write(`
    HTTP/1.1 200 OK
    Sever:Apache
    Content-Type:text/html
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>This is from the server-side content!</h1>
</body>
</html>`);
    client.end();
});

//开始监听端口  58888就是端口
server.listen(58888, () => {
    console.log('server started listen 58888 port...');
});




