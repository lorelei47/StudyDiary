# node.js

```text
node.js是一个JavaScript的运行环境，可以理解为是一个可以解析JavaScript代码和执行JavaScript的环境，可以理解为类似解析执行class的tomcat容器。node.js不是一种语言也不是一个框架库
```

-----

```text
node.js可以使得JavaScript脱离浏览器来运行，在node.js环境下执行。
```

## node.js特点

### 1.浏览器中的JavaScript

* ES语法
* BOM
* DOM

### 2.node.js中的JavaScript

* ES语法
* 服务器级别的API，包括网络通信，文件读取等

### 3.node.js特性

* 事件驱动
* 非阻塞IO模型(异步)
* 轻量和高效，引擎为Chrome V8引擎，目前执行JavaScript最快的引擎。

### 4.node.js应用

* npm(这也就解释使用npm前需要先安装node.js)
* webStrom

## 在node.js上创建服务器

### 引入require加载http块

 `var http = require('http')`

```text
    require是用做加载模块的，类似import
```

## node.js连接数据库(mysql)

`var mysql = require('mysql')`

```text
需安装mysql模块 
npm install --save mysql
```

## 异步编程

## 文件操作

## 网络操作

## 进程管理

## promise

```text
promise的出现：node的特点是高并发，使用了大量的回调函数，但是这样容易导致一个问题，会出现多重嵌套回调函数。promise则可以解决这种情况。
```

### 链式写法

```JavaScript
$('#tab').eq($(this).index()).show().siblings().hide();
```

### promise/a+规范

```text
Promise表示一个异步操作的最终结果。与Promise最主要的交互方法是通过将函数传入它的then方法从而获取得Promise最终的值或Promise最终最拒绝（reject）的原因。
```

>> promise的连是操作

```JavaScript
return step1().then(step2).then(step3).then(step4)
```
