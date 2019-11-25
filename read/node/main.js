//此js文件做常规运行作用，可随时更换代码

function taskA(){
  console.log("这是A");
}
function taskB(){
  var result = setTimeout(function(){
    console.log('异步任务的结果B')
  }, 3000)
  return result
}
function taskC(){
  console.log("这是C");
}
taskA();
taskB();
taskC();
//执行结果
//--------
//这是A
//这是C
//异步任务的结果B

/*******************/

/*******************/