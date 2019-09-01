function Stu(name){
    this._name = name;
}

Stu.prototype = {
    constructor:Stu,
    //get语法将对象属性绑定到查询该属性时将被调用的函数。
    get Name(){
        return this._name;
    },
    //Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
    set Name(val){
        if(val){
            this._name = val;
        }
    }
};

var s = New Stu('david, www.google.com');
console.log(s.Name);
//s._name;
// s._name = 'sss';
// s.Name = 90;   //不允许设置
s.Name = '90';  //允许设置
console.log(s.Name);
//es5:   get  set 属性新功能
s.Name = "";
console.log(s.Name);

