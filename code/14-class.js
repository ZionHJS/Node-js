//定义一个Human构造函数
function Human(name, age){
    //控制创建实例的属性
    this.name = name;
    this.age = age;
}

//定义原型上的方法
Human.prototype.show = function(){  
    console.log(this.name, this.age);
}

//创建human类型的实例
var h = new Human('David',70);
h.show();

//es3-5继承:通过原型进行继承


//es6 继承:定义类型和继承的方式 通过class来定义构造函数
//类名要符合标示符的规范
class Student{
    //es6定义构造函数 如果构造函数未定义 会自动添加空的构造函数
    constructor(name, age){
        //给实例添加属性
        this.name = name;
        this.age = age;
    }
    //在类的定义的方法都是在原型上，是不可遍历的
    showStu(){
        console.log(this.age, this.name);
    }
    get Name(){
        return this.name;
    }
    set Name(val){
        this.name = val || 'empty';
    }
    
    static Add(a,b){
        return a+b;
    }
}
//通过class来定义的类型 需要通过new来构造实例(和原来的方式一样)
let s = new Student('Aaron',36);
s.showStu();
s.Name = 'Hello!';
s.showStu();

s.Name = null;
s.showStu();

console.log(Student.Add(100,1));

//es6 继承


