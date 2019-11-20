//闭包
//实例
function add(x){
    return function(y){
        return x+y;
    }
}
const abc = add(5);
console.log(abc(2)); //7

//上述abc就是一个闭包
//定义：闭包就是能够读取其他函数内部变量的函数。例如在javascript中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成“定义在一个函数内部的函数“。

function arrFunc() {
    var arr = [];
    for (var i = 0;i<10;i++){
        arr[i] = function(){
            return i;
        };
    }
    return arr;
}
function brrFunc() {
    var brr = [];
    for (var i = 0;i<10;i++){
        brr[i] = function(num){
            return function(){
                return num;
            }
        }(1);
    }
    return brr;
}
console.log(brrFunc()[1]());