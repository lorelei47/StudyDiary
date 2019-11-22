//此js文件做常规运行作用，可随时更换代码

function runAsync(callback){
  setTimeout(function(){
      console.log('执行完成');
      callback('随便什么数据');
  }, 2000);
}

runAsync(function(data){
  console.log(data);
});