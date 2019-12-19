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

```
Element 类型用于表现 XML 或 HTML元素，提供了对元素标签名、子节点及特性的访问。
nodeName属性和tagName属性均返回元素的标签名。
--HTML元素

每个元素都有一或多个特性：操作特性的DOM 方法主要有三个，分别是 getAttribute()、setAttribute()和 removeAttribute()。
--取得特性
getAttribute()：
var div = document.getElementById("myDiv"); 
alert(div.getAttribute("id")); //"myDiv" 
alert(div.getAttribute("class")); //"bd"
注：特性的名称是不区分大小写的，即"ID"和"id"代表的都是同一个特性。自定义特性应该加上 data-前缀以便验证。
--设置特性
setAttribute()设置特性，removeAttribute()移除特性（用的少）

--attributes 属性
--创建元素
使用 document.createElement()方法可以创建新元素。这个方法只接受一个参数，即要创建元素的标签名。
var div = document.createElement("div");
由于新元素尚未被添加到文档树中，因此设置这些特性不会影响浏览器的显示。要把新元素添加到文档树，可以使用 appendChild()、insertBefore()或 replaceChild()方法。
document.body.appendChild(div);

--元素的子节点
```

> **Text**类型

```
文本节点由 Text 类型表示，包含的是可以照字面解释的纯文本内容。(nodeType的值为3)

<!-- 没有内容，也就没有文本节点 --> 
<div></div> 
<!-- 有空格，因而有一个文本节点 --> 
<div> </div> 
<!-- 有内容，因而有一个文本节点 --> 
<div>Hello World!</div>

1.创建文本节点
var element = document.createElement("div"); 
element.className = "message"; 
var textNode = document.createTextNode("Hello world!"); 
element.appendChild(textNode); 
document.body.appendChild(element);
一般情况下，每个元素只有一个文本子节点。如果通过js添加多个文本子节点，那么这两个节点中的文本就会连起来显示，中间不会有空格。

2.规范化文本节点
normalize()。如果在一个包含两个或多个文本节点的父元素上调用 normalize()方法，则会将所有文本节点合并成一个节点，结果节点的 nodeValue 等于将合并前每个文本节点的 nodeValue 值拼接起来的值。

3.分割文本节点
splitText()。这个方法会将一个文本节点分成两个文本节点，即按照指定的位置分割 nodeValue 值。原来的文本节点将包含从开始到指定位置之前的内容，新文本节点将包含剩下的文本。
```

> **Comment**类型

```
注释在 DOM 中是通过 Comment 类型来表示的。(nodeType的值为8)
```

> **CDATASection**类型

```
CDATASection 类型只针对基于 XML 的文档，表示的是 CDATA 区域。(nodeType的值为4)
```

> **DocumentType**类型

```
DocumentType 包含着与文档的 doctype 有关的所有信息(nodeType的值为10)
```

> **DocumentFragment**类型

```
在所有节点类型中，只有 DocumentFragment 在文档中没有对应的标记。(nodeType的值为11)
```

> **Attr**类型

```
元素的特性在 DOM 中以 Attr 类型来表示。(nodeType的值为2)
```



#### DOM 操作技术

> 动态脚本

```
使用<script>元素可以向页面中插入 JavaScript 代码，一种方式是通过其 src 特性包含外部文件，另一种方式就是用这个元素本身来包含代码。

动态脚本，指的是在页面加载时不存在，但将来的某一时刻通过修改 DOM 动态添加的脚本。创建动态脚本也有两种方式：插入外部文件和直接插入 JavaScript 代码。
```

> 动态样式

```
能够把 CSS 样式包含到 HTML 页面中的元素有两个。其中，<link>元素用于包含来自外部的文件，而<style>元素用于指定嵌入的样式。

加载外部样式文件的过程是异步的，也就是加载样式与执行 JavaScript 代码的过程没有固定的次序。
```

> 操作表格

> 使用NodeList