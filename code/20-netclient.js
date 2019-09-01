//客户端 
//根据服务器端的IP和端口链接到服务器端
const net = require('net');

//client:客户端链接服务器端的对象  58888端口 '127.0.0.1'IP地址
net.connect(58888, '127.0.0.1',()=>{
    console.log('linked to server');
});

client.on('data', chunk=>{
    console.log(chunk.toString('utf8'));
});

client.write('This is the client-side');

client.end();