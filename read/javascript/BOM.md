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