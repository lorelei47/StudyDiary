## BOM

```
BOM：浏览器对象模型
```

#### window对象

```
核心对象：window，是浏览器的一个实例
```

> 全局作用域

```
window对象扮演ECMAScript的Global对象角色，因此在全局作用域中声明的变量函数都会变成window对象的属性和方法。
1.window对象上定义的属性可以使用delete操作符。
2.直接访问window上的属性不会报未定义错误。
```

> 窗口关系及框架

```

```

> 窗口位置

```
来确定和修改 window 对象位置的属性和方法
属性：screenLeft、screenTop、screenX、screenY（Chrome均支持）
```

> 窗口大小

```
innerWidth、innerHeight：返回浏览器窗口本身的尺寸。
outerWidth、outerHeight：示页面视图容器的大小。
resizeTo()：接收浏览器窗口的新宽度和新高度。
resizeBy()：接收新窗口与原窗口的宽度和高度之差
```

>  导航和打开窗口

```
window.open()方法：要加载的 URL、窗口目标、一个特性字符串以及一个表示新页面是否取代浏览器历史记录中当前加载页面的布尔值。通常只须传递第一个参数。
第一个参数：要加载的URL
第二个参数：打开的窗口，如果不存在该窗口，则会根据第三个参数来打开一个新窗口。
第三个参数：一个逗号分隔的设置字符串，表示在新窗口中都显示哪些特性。如("height=400,width=400,top=10,left=10,resizable=yes")
```

> 间歇调用和超时调用

```
setTimeout()方法：超时调用方法，设置一个等待时间，在经过这个等待时间后则执行里面的代码。这是一个异步方法。所以不一定过了这个等待时间就会执行，还需要开任务队列。

调用 setTimeout()之后，该方法会返回一个数值 ID，表示超时调用。这个超时调用 ID 是计划执行代码的唯一标识符，可以通过它来取消超时调用。要取消尚未执行的超时调用计划，可以调用clearTimeout()方法并将相应的超时调用 ID 作为参数传递给它。
//设置超时调用
var timeoutId = setTimeout(function() { 
 alert("Hello world!"); 
}, 1000); 
//注意：把它取消
clearTimeout(timeoutId);

只要是在指定的时间尚未过去之前调用 clearTimeout()，就可以完全取消超时调用。前面的代码在设置超时调用之后马上又调用了 clearTimeout()，结果就跟什么也没有发生一样。

防抖和节流：就是根据上述方法的特性而建立的。
```

```
setInterval()：间歇调用方法，每隔一段时间执行一次。

调用 setInterval()方法同样也会返回一个间歇调用 ID，该 ID 可用于在将来某个时刻取消间歇调用。要取消尚未执行的间歇调用，可以使用 clearInterval()方法并传入相应的间歇调用 ID。取消间歇调用的重要性要远远高于取消超时调用，因为在不加干涉的情况下，间歇调用将会一直执行到页面卸载

var num = 0; 
var max = 10; 
var intervalId = null; 
function incrementNumber() { 
 num++; 
 //如果执行次数达到了 max 设定的值，则取消后续尚未执行的调用
 if (num == max) { 
 clearInterval(intervalId); 
 alert("Done"); 
 } 
} 
intervalId = setInterval(incrementNumber, 500);
```

> 系统对话框

```
浏览器通过 alert()、confirm()和 prompt()方法可以调用系统对话框向用户显示消息。

alert()：这个方法接受一个字符串并将其显示给用户。具体来说，调用alert()方法的结果就是向用户显示一个系统对话框，其中包含指定的文本和一个 OK（“确定”）按钮。

confirm()：用户是单击了 OK 还是 Cancel，可以检查 confirm()方法返回的布尔值：true 表示单击了 OK，false 表示单击了 Cancel 或单击了右上角的 X 按钮。

prompt()：这是一个“提示”框，用于提示用户输入一些文本。提示框中除了显示 OK 和 Cancel 按钮之外，还会显示一个文本输入域，以供用户在其中输入内容。prompt()方法接受两个参数：要显示给用户的文本提示和文本输入域的默认值（可以是一个空字符串）。
如果用户单击了 OK 按钮，则 prompt()返回文本输入域的值。如果用户单击了 Cancel 或没有单击OK 而是通过其他方式关闭了对话框，则该方法返回 null。
```



#### location对象

```
既是 window 对象的属性，也是document 对象的属性。即window.location 和document.location 引用的是同一个对象。

将 URL 解析为独立的片段(详细对象)，如下表
```

| 属性名   | 例子                 | 说明                                                         |
| -------- | -------------------- | ------------------------------------------------------------ |
| hash     | "#contents"          | 返回URL中的hash（#号后跟零或多个字符），如果URL中不包含散列，则返回空字符串 |
| host     | "www.wrox.com:80"    | 返回服务器名称和端口号（如果有）                             |
| hostname | "www.wrox.com"       | 返回不带端口号的服务器名称                                   |
| href     | "http:/www.wrox.com" | 返回当前加载页面的完整URL。而location对象的 toString()方法也返回这个值 |
| pathname | "/WileyCDA/"         | 返回URL中的目录和（或）文件名                                |
| port     | "8080"               | 返回URL中指定的端口号。如果URL中不包含端口号，则 这个属性返回空字符串 |
| protocol | "http:"              | 返回页面使用的协议。通常是http:或https:                      |
| search   | "？q=javascript"     | 返回URL的查询字符串。这个字符串以问号开头                    |

> 查询字符串参数

```js
解析查询字符串，然后返回包含所有参数的一个对象的方法
function getQueryStringArgs(){ 
    //取得查询字符串并去掉开头的问号
    var qs = (location.search.length > 0 ? location.search.substring(1):""), 
    //保存数据的对象
    args = {}, 
    //取得每一项
    items = qs.length ? qs.split("&") : [], 
    item = null, 
    name = null,
    value = null, 
    //在 for 循环中使用
    i = 0, 
    len = items.length; 
    //逐个将每一项添加到 args 对象中
    for (i=0; i < len; i++){ 
        item = items[i].split("="); 
        name = decodeURIComponent(item[0]); 
        value = decodeURIComponent(item[1]); 
        if (name.length) { 
            args[name] = value; 
        } 
    } 
    return args; 
}
这个函数的第一步是先去掉查询字符串开头的问号。当然，前提是 location.search 中必须要
包含一或多个字符。然后，所有参数将被保存在 args 对象中，该对象以字面量形式创建。接下来，
根据和号（&）来分割查询字符串，并返回 name=value 格式的字符串数组。下面的 for 循环会迭代
这个数组，然后再根据等于号分割每一项，从而返回第一项为参数名，第二项为参数值的数组。再使
用 decodeURIComponent()分别解码 name 和 value（因为查询字符串应该是被编码过的）。最后，将 name 作为 args 对象的属性，将 value 作为相应属性的值。
```

> 位置操作

```
location.assign("http://www.wrox.com");
window.location = "http://www.wrox.com"; 
location.href = "http://www.wrox.com";
这三条语句是等价的，以立即打开新 URL 并在浏览器的历史记录中生成一条记录。
后两天表达式会调用assign()

修改location对象的其他属性可以改变当前加载的页面。

用户通过单击“后退”按钮都会导航到前一个页面。要禁用这种行为，可以使用 replace()方法。
location.replace("http://www.baidu.com/");
跳转至百度首页后，点后退无法回到前一个页面

reload()，作用是重新加载当前显示的页面。
location.reload(); //重新加载（有可能从缓存中加载，效率更高）
location.reload(true); //重新加载（从服务器重新加载）
```



#### navigator对象

```
navigator对象：识别客户端浏览器的事实标准
navigator对象的属性通常用于检测显示网页的浏览器类型
```

> 检测插件

```js
检测浏览器中是否安装了特定的插件是一种最常见的检测例程。
plugins数组，每项具有以下属性
name：插件的名字。
description：插件的描述。
filename：插件的文件名。
length：插件所处理的 MIME 类型数量。
//检测插件（在 IE 中无效）
function hasPlugin(name){ 
    name = name.toLowerCase(); 
    for (var i=0; i < navigator.plugins.length; i++){ 
        if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){ 
            return true; 
        } 
    } 
    return false;
} 
//检测 Flash 
alert(hasPlugin("Flash")); 
//检测 QuickTime 
alert(hasPlugin("QuickTime"));

hasPlugin()函数接受一个参数：要检测的插件名。
通过 indexOf()检测每个 name 属性，以确定传入的名称是否出现在字符串的某个地方。

//IE检测
//检测 IE 中的插件
function hasIEPlugin(name){ 
    try { 
        new ActiveXObject(name); 
        return true; 
    } catch (ex){ 
        return false; 
    } 
} 
//检测 Flash 
alert(hasIEPlugin("ShockwaveFlash.ShockwaveFlash")); 
//检测 QuickTime 
alert(hasIEPlugin("QuickTime.QuickTime"));
```

> 注册处理程序

```
registerContentHandler()和 registerProtocolHandler()方法

registerContentHandler()：接收三个参数：要处理的 MIME 类型、可以处理该 MIME
类型的页面的 URL 以及应用程序的名称。
registerProtocolHandler()方法，它也接收三个参数：要处理的协议（例如，mailto 或 ftp）、处理该协议的页面的 URL 和应用程序的名称。
```

> screen对象

```
screen 对象基本上只用来表明客户端的能力，其中包括浏览器窗口外部的显示器的信息，如像素宽度和高度等。
其属性不列了，自行查阅资料，是一些高度，宽度，像素等属性。
```

> history 对象

```js
history 对象保存着用户上网的历史记录，从窗口被打开的那一刻算起。因为 history 是 window
对象的属性，因此每个浏览器窗口、每个标签页乃至每个框架，都有自己的 history 对象与特定的
window 对象关联。

go()方法：接受一个参数，表示向后或向前跳转的页面数的一个整数值。负数表示向后跳转（类似于单击浏览器的“后退”按钮），正数表示向前跳转（类似于单击浏览器的“前进”按钮）。
//后退一页
history.go(-1);
传递一个字符串参数，此时浏览器会跳转到历史记录中包含该字符串的第一个位置——可能后退，也可能前进，具体要看哪个位置最近。
//跳转到最近的 wrox.com 页面
history.go("wrox.com");

back()和 forward()
//后退一页
history.back(); 
//前进一页
history.forward();

length属性：保存着历史记录的数量。
```

