//服务器端
const net = require('net');

//创建服务端对象
let server = net.createServer();

server.on('connection', client =>{
    //client就是指向客户端的一个对象 可以通过它给客户端发送数据 可读/可写流
    client.on('data', chunk => {
        console.log(chunk.toString('utf8'));
    });
    //往客户端写入数据
    client.write('hello! from the server');
    client.end('end-link');
});

//开始监听端口  58888就是端口
server.listen(58888);