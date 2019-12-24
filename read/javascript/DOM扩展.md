## DOM 扩展

#### 选择符 API 

```
Selectors API核心是两个方法：querySelector()和querySelectorAll()
*jQuery的核心就是通过选择API来进行引用的。
```

> **querySelector()**方法

```
querySelector()方法接收一个 CSS 选择符，返回与该模式匹配的第一个元素，如果没有找到匹配的元素，返回 null。

//取得 body 元素
var body = document.querySelector("body"); 
//取得 ID 为"myDiv"的元素
var myDiv = document.querySelector("#myDiv");

Document类型：调用querySelector()方法时，会在文档元素的范围内查找匹配的元素。
Element类型：调用querySelector()方法时，只会在该元素后代元素的范围内查找匹配的元素。
```

