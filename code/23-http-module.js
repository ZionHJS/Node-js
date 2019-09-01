const http = require('http');

//当发生了 request 请求事件的时候，自动调用回调函数
http.createServer(function(req, res){
    //req 监听数据
    // req.on('data',function(trunk){
    // });
    console.log(req.header);
    console.log(req.url);
    console.log(req.method);

    res.write('hello 123');
    res.end();

    //伪代码: 回调定域问题
    // fs.readFile(path, ()=>{
    //     fs.readFile(path,()=>{
    //         fs.readFile(path,()=>{
    //             fs.readFile(path,()=>{
    //                 //...
    //             })
    //         })
    //     })
    // })
    //解决方法 connect:express 
}).listen(58990,()=>{
    console.log('server listening success! http://127.0.0.1:58990');
});