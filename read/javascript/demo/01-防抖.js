//防抖

function debounce(fn){
    var timer = null;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(this,arguments);            
        },2000);
    }
}

//setTimeout的返回值是一个id，可以clear掉，可以想象成一个时间戳？