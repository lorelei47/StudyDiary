//promise的理解
//一个简单的promise
function runAsync(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('执行完成');
            resolve('随便什么数据');
        }, 2000);
    });
    return p;            
}
function show(data){
    console.log(data);
}
// runAsync().then(show);
//promise有then,catch方法
//所有runAsync()之后可以链式then()
//then里面的函数就跟我们平时的回调函数一个意思，能够在runAsync这个异步任务执行完成之后被执行。这就是Promise的作用了，简单来讲，就是能把原来的回调写法分离出来，在异步操作执行完后，用链式调用的方式执行回调函数。

//一个复杂的promise使用
function runAsync1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;            
}
function runAsync2(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 2000);
    });
    return p;            
}
function runAsync3(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 2000);
    });
    return p;            
}
// runAsync1().then(function(data){
//     console.log(data); 
//     return runAsync2()
// }).then(function(data){
//     console.log(data);
//     return runAsync3();
// })

//上述使用promise都是在成功时下执行resolve的情况
//reject的使用
function getNumber(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            var num = Math.ceil(Math.random()*10); //生成1-10的随机数
            if(num<=5){
                resolve(num);
            }else{
                reject('数值太大了');//reject原型只接收reason一个参数
            }
        }, 2000);
    });
    return p;            
}
//------执行
// getNumber()
// .then(
//     function(data){
//         console.log('resolved');
//         console.log(data);
//     }, 
//     function(reason){
//         console.log(data+'=rejected');
//         console.log(reason);
//     }
// );

//catch的使用
//catch的参数跟then中第二个参数有相同功能
// getNumber()
// .then(function(data){
//     console.log('resolved');
//     console.log(data);
// })
// .catch(function(reason){
//     console.log('rejected');
//     console.log(reason);
// });
//catch还有另一个功能，如果then中第一个参数（回调函数）出异常时，会跳到catch中。
//类似try/catch
//-------执行
// getNumber()
// .then(function(data){
//     console.log('resolved');
//     console.log(data);
//     console.log(somedata); //此处的somedata未定义
// })
// .catch(function(reason){
//     console.log('rejected');
//     console.log(reason);
// });
//
//all的用法
//Promise的all方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。
Promise
.all([runAsync1(), runAsync2(), runAsync3()])
.then(function(results){
    console.log(results);
});
异步任务1执行完成
异步任务2执行完成
异步任务3执行完成
// [ '随便什么数据1', '随便什么数据2', '随便什么数据3' ]

//race用法
// all方法的效果实际上是「谁跑的慢，以谁为准执行回调」
// race方法则是「谁跑的快，以谁为准执行回调」
Promise
.race([runAsync1(), runAsync2(), runAsync3()])
.then(function(results){
    console.log(results);
});
异步任务1执行完成
随便什么数据1
异步任务2执行完成
异步任务3执行完成
//上述结果实际是运行完1后，就直接执行then的回调了，再过1秒后才执行2和3