## DOM

```
DOM（文档对象模型）是针对 HTML 和 XML 文档的一个 API（应用程序编程接口）。DOM 描绘了一个层次化的节点树，允许开发人员添加、移除和修改页面的某一部分。
```

#### 节点层次

```
定义：DOM 可以将任何 HTML 或 XML 文档描绘成一个由多层节点构成的结构。节点分为几种不同的类型，每种类型分别表示文档中不同的信息及（或）标记。每个节点都拥有各自的特点、数据和方法，另外也与其他节点存在某种关系。节点之间的关系构成了层次，而所有页面标记则表现为一个以特定节点为根节点的树形结构。
```

> **Node**类型

```
nodeName 和 nodeValue 属性
nodeName 的值是元素的标签名

节点关系
在 HTML 中，可以将<body>元素看成是<html>元素的子元素；相应地，也就可以将<html>元素看成是<body>元素的父元素。而<head>元素，则可以看成是<body>元素的同胞元素，因为它们都是同一个父元素<html>的直接子元素。
每个节点都有一个 childNodes 属性，其中保存着一个 NodeList 对象。NodeList 是一种类数组对象，用于保存一组有序的节点，可以通过位置来访问这些节点。
每个节点都有一个 parentNode 属性，该属性指向文档树中的父节点。

操作节点
appendChild()，用于向 childNodes 列表的末尾添加一个节点。
insertBefore()
replaceChild()
cloneNode()
normalize()
```

> **Document**类型

```
在浏览器中，document 对象是 HTMLDocument（继承自 Document 类型）的一个实例，表示整个 HTML 页面。而且，document 对象是 window 对象的一个属性，因此可以将其作为全局对象来访问。

documentElement属性：该属性始终指向 HTML 页面中的<html>元素。
var html = document.documentElement; //取得对<html>的引用
alert(html === document.childNodes[0]); //true 
alert(html === document.firstChild); //true
//这个例子说明，documentElement、firstChild 和 childNodes[0]的值相同，都指向<html>元素。

body属性：直接指向<body>元素。
var body = document.body; //取得对<body>的引用

doctype属性
var doctype = document.doctype; //取得对<!DOCTYPE>的引用

title属性 ：包含着<title>元素中的文本
//取得文档标题
var originalTitle = document.title; 
//设置文档标题
document.title = "New page title";

URL属性：URL 属性中包含页面完整的 URL（即地址栏中显示的 URL）
domain属性：只包含页面的域名
referrer属性：则保存着链接到当前页面的那个页面的 URL。有可能为空(undefined)
```

```
查找元素
getElementById()：接收一个参数：要取得的元素的 ID。如果找到相应的元素则返回该元素，如果不存在带有相应 ID 的元素，则返回 null。这里的ID必须与页面中元素的 id
特性（attribute）严格匹配，包括大小写（ie7以前版本不分大小写）。
//这个就是平时原生用得最多的获取标签id的方法
var div = document.getElementById("myDiv"); //取得<div>元素的引用

getElementsByTagName()：这个方法接受一个参数，即要取得元素的标签名，而返回的是包含零或多个元素的 NodeList。
var images = document.getElementsByTagName("img");//取得页面所有img标签
//要想取得文档中的所有元素，可以向 getElementsByTagName()中传入"*"。在 JavaScript 及 CSS中，星号（*）通常表示“全部”。

getElementsByName()：HTMLDocument 类型才有，返回带有给定 name 特性的所有元素。
```

```
特殊集合
document 对象还有一些特殊的集合:
1.document.anchors，包含文档中所有带 name 特性的<a>元素；
2.document.applets，包含文档中所有的<applet>元素，因为不再推荐使用<applet>元素，所以这个集合已经不建议使用了；
3.document.forms，包含文档中所有的<form>元素，与document.getElementsByTagName("form")得到的结果相同；
4.document.images，包含文档中所有的<img>元素，与 document.getElementsByTagName ("img")得到的结果相同；
5.document.links，包含文档中所有带 href 特性的<a>元素。

DOM一致性检测
```

```
文档写入
write()、writeln()、open()和 close()。
write()和 writeln()方法都接受一个字符串参数，即要写入到输出流中的文本。
open()和 close()分别用于打开和关闭网页的输出流。
```

> **Element**类型