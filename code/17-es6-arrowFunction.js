let add = function(a,b){
    return a+b;
}
console.log(add(4,5));

let addArrowFunction = (a,b) => a+b;
console.log(addArrowFunction(5,6));

var arr = [1,9,3,2,7,6];
arr.sort(function(a,b){
    return a - b;
});
console.log(arr);

var arr2 = [1,9,3,2,7,6];
arr2.sort((a,b)=>a-b);
console.log(arr);

var t = () => {
    console.log(this);   //this 定义箭头函数的作用域里面的this
}
t();


