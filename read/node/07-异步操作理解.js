//异步操作：异步和同步是相对的，异步和同步的举例区别网上有很多例子
//谈一下个人的理解：
//数学里面有个词叫统筹。举个不准确的例子：假设每天早上我们需要做三件事，烧水(),煮蛋()，刷牙()。要先烧水()，才能煮蛋()，这个就是同步。烧水()的同时可以刷牙()，这个就是异步。

//在js中，因为js是单线程执行的语言。js的引擎是不能同时执行两件事。
//所以在js中异步操作跟上面说的烧水同时刷牙又有点不一样。

//js中的异步操作是在完成时(这里的完成不是指有js引擎执行，而是比如ajax是有浏览器负责)加入到任务队列。等到执行
//任务队列是指在js主程序执行栈中没有事件执行后，从任务队列中取出一条任务(先进先出)来执行。。
//比如下面例子中，taskA和taskC就是主程序任务。

//异步操作实例(setTimeout()是个最基础的异步操作函数)
function taskA(){
    console.log("这是A");
}
function taskB(){
    var result = setTimeout(function(){
      console.log('异步任务的结果B')
    }, 0)
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

//1.定义taskA，taskB，taskC时被放到主线程堆内存执行。
//2.taskB产生的异步操作被放进任务队列。
//3.主线程堆内存执行taskA和taskC
//4.主线程堆内存事件都执行完后从任务队列中取出一条任务(这里就是取出taskB任务)执行
//5.执行完后再从任务队列中继续取(这里例子只有一个任务taskB)，重复第四点。

//常见的异步操作
//ajax,setTimeout,promise,async/await
//注：ajax中有个属性async，值为true为异步，值为false时为同步

//定义
/*******************/
//所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。
//同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；
//异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有等主线程任务执行完毕，"任务队列"开始通知主线程，请求执行任务，该任务才会进入主线程执行。

//具体来说，异步运行机制如下：

//（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
//（2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
//（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
//（4）主线程不断重复上面的第三步。
/*******************/