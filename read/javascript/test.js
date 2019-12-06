//作测试运行的js文件

function Person(options){
    this.name = options.name;
    this.age = options.age;
    this.showInfo = function(){
        console.log("name:"+this.name);
        console.log("name:"+this.age);
    } 
}

var person1 = new Person({name:'joe',age:16});
person1.showInfo();
person1.age = 17;
person1.showInfo();