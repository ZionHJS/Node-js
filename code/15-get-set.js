function Stu(name){
    this._name = name;
}

Stu.prototype = {
    constructor:Stu,
    //get 代表这是一个属性
    get Name(){
        return this._name;
    },
    //set 属性
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

