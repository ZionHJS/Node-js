const EventEmitter = require('events');

class DemoEmitter extends EventEmitter {
    constructor(opt) {
        super(opt);
    }

    init() {
        console.log('init ...');
        //emit 触发事件
        this.emit('init', '123');
    }
    close() {
        console.log('close...');
        this.emit('close');
    }
}

let d = new DemoEmitter();
//on监听事件
d.on('init', param => {console.log('init triggered and param is:',param)});
d.once('close',() => console.log('close event being executed!'));
d.init();
d.close();
// class myEmitter extends EventEmitter{
//     constructor(opt){
//         super(opt);
//     }
// }

// //创建事件对象实例
// const myEmitter = new myEmitter();

// //注册event事件，event是事件名字 最好符合以驼峰命名为规范
// myEmitter.once('event',()=>{
//     console.log('triggered an event!');
// });

// //触发event事件
// myEmitter.emit('event');