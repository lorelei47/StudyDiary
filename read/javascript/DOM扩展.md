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

> **querySelectorAll()**方法

```
querySelectorAll()方法接收的参数与 querySelector()方法一样，都是一个 CSS 选择符，但返回的是所有匹配的元素而不仅仅是一个元素。这个方法返回的是一个 NodeList 的实例。

//取得某<div>中的所有<em>元素（类似于 getElementsByTagName("em")）
var ems = document.getElementById("myDiv").querySelectorAll("em"); 
//取得类为"selected"的所有元素
var selecteds = document.querySelectorAll(".selected"); 
//取得所有<p>元素中的所有<strong>元素
var strongs = document.querySelectorAll("p strong");

要取得返回的 NodeList 中的每一个元素，可以使用 item()方法
```

> **matchesSelector()**方法

```
接收一个参数，即 CSS 选择符，如果调用元素与该选择符匹配，返回 true；否则，返回false。
```

