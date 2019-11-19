//此js文件做常规运行作用，可随时更换代码
var obj = {
    step1:function(){
      console.log('a');
      return this;
    },
    step2:function(){
      console.log('b');    
      return this;
    },
    step3:function(){
      console.log('c');
      return this;
    },
    step4:function(){
      console.log('d');
      return this;
    }
  }

console.log(obj.step1());