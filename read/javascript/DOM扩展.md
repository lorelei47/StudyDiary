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



#### 元素遍历

```
Element Traversal API为DOM元素添加了以下5个属性。
1.childElementCount：返回子元素（不包括文本节点和注释）的个数。
2.firstElementChild：指向第一个子元素；firstChild 的元素版。
3.lastElementChild：指向最后一个子元素；lastChild 的元素版。
4.previousElementSibling：指向前一个同辈元素；previousSibling 的元素版。
5.nextElementSibling：指向后一个同辈元素；nextSibling 的元素版。
```



#### HTML 5

```
该节只讲H5中与DOM相关的内容
```

> 与类相关的扩充

```text
//getElementsByClassName()方法
定义：接收一个参数，即一个包含一或多个类名的字符串，返回带有指定类的所有元素的 NodeList。
实例：
//取得所有class中包含"username"和"current"的元素，类名的先后顺序无所谓
var allCurrentUsernames = document.getElementsByClassName("username current");

//classList属性
新集合类型DOMTokenList的实例，该属性含有length(含有多少个元素)，元素可以通过item()遍历出来，以及还有以下方法:
1.add(value)：将给定的字符串值添加到列表中。如果值已经存在，就不添加了。
2.contains(value)：表示列表中是否存在给定的值，如果存在则返回 true，否则返回 false。
3.remove(value)：从列表中删除给定的字符串。
4.toggle(value)：如果列表中已经存在给定的值，删除它；如果列表中没有给定的值，添加它。
```

> 焦点管理

```
document.activeElement属性：
这个属性始终会引用 DOM 中当前获得了焦点的元素。元素获得焦点的方式有页面加载、用户输入（通常是通过按 Tab 键）和在代码中调用 focus()方法。

//默认情况下，文档刚刚加载完成时，document.activeElement 中保存的是document.body 元素的引用。文档加载期间，document.activeElement 的值为 null。

document.hasFocus()方法：
这个方法用于确定文档是否获得了焦点。
```

> **HTMLDocument**的变化

```
readyState属性
Document的readyState属性有两个可能的值：
1.loading，正在加载文档；
2.complete，已经加载完文档。
//用法
if (document.readyState == "complete"){ 
 //执行操作
}
```

> 字符集属性

> 自定义数据属性

```
HTML5 规定可以为元素添加非标准的属性，但要添加前缀 data-，目的是为元素提供与渲染无关的信息，或者提供语义信息。这些属性可以任意添加、随便命名，只要以 data-开头即可。
<div id="myDiv" data-appId="12345" data-myname="Nicholas"></div>

可以用元素的dataset属性来访问自定义属性的值。
var div = document.getElementById("myDiv"); 
//取得自定义属性的值
var appId = div.dataset.appId; 
var myName = div.dataset.myname;
```

> 插入标记

```html
innerHTML属性
定义：返回与调用元素的所有子节点（包括元素、注释和文本节点）对应的HTML标记。在写模式下，innerHTML会根据指定的值创建新的DOM树，然后用这个DOM树完全替换调用元素原先的所有子节点。例如
<div id="content"> 
    <p>This is a <strong>paragraph</strong> with a list</p> 
 	<ul>
        <li>Item 1</li> 
        <li>Item 2</li> 
        <li>Item 3</li> 
    </ul> 
</div>
对于上面的<div>元素来说，它的 innerHTML 属性会返回如下字符串。
<p>This is a <strong>paragraph</strong> with a list</p> 
<ul>
    <li>Item 1</li> 
    <li>Item 2</li> 
    <li>Item 3</li> 
</ul> 
    
outerHTML属性
定义：返回调用它的元素及所有子节点的HTML标签。
    
insertAdjacentHTML()方法
```

> **scrollIntoView()**方法

```
scrollIntoView()可以在所有HTML元素上调用，通过滚动浏览器窗口或某个容器元素，调用元素就可以出现在视口中。

//让元素可见
document.forms[0].scrollIntoView();
```

#### 专有扩展