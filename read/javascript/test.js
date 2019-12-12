//作测试运行的js文件

var hasEnumShadowsQuirk = function(){ 
    var o = { toString : function(){} }; 
    var count = 0; 
    for (var prop in o){ 
    if (prop == "toString"){ 
    count++; 
    console.log(prop);
    } 
    } 
    return count; 
   }();

console.log(hasEnumShadowsQuirk);

