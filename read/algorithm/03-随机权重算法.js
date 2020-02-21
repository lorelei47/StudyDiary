//随机权重算法（整数权重）
//思路：
//1.将元素存入权重数次至buffer数组，如数组[a,b],a权重2，b权重1，buffer数组则a存入两次,b存入1次，buffer数组为[a,a,b].
//2.随机生成0至buffer数组长度减一的伪随机数，作为index返回buffer数组的结果

//测试样例

var card = [
    { id: 1, weight: 5 }, //概率：0.1851851851851852
    { id: 2, weight: 5 }, //概率：0.1851851851851852
    { id: 3, weight: 5 }, //概率：0.1851851851851852
    { id: 4, weight: 5 }, //概率：0.1851851851851852
    { id: 5, weight: 5 }, //概率：0.1851851851851852
    { id: 6, weight: 2 } //概率：0.0740740740740741
];
//10亿次测试结果（命中次数）
a = 185168629 //频率：0.185168629   
b = 185173787 //频率：0.185173787   
c = 185180079 //频率：0.185168629   
d = 185193129 //频率：0.185180079   
e = 185201811 //频率：0.185201811   
f = 74082564 //频率：0.74082564 

//卡池转buffer数组
function pushToBuffer(cardArray) {
    if (!Array.isArray(cardArray)) {
        return;
    }
    var cardbuffer = [];
    cardArray.forEach(function(item, index) {
        for (var i = 0; i < parseInt(item.weight); i++) {
            cardbuffer.push(item.id);
        }
    });
    return cardbuffer;
}
//随机抽取buffer数组元素
function getRandomCard(cardbuffer) {
    var len = cardbuffer.length;
    var random = parseInt(Math.random() * len);
    return cardbuffer[random];
}
/* 测试统计过程 */
var a = 0,
    b = 0,
    c = 0,
    d = 0,
    e = 0,
    f = 0;
var cb = pushToBuffer(card);
for (var i = 1; i < 1000000000; i++) {
    var res = getRandomCard(cb);
    if (res == 1) {
        a++;
    } else if (res == 2) {
        b++;
    } else if (res == 3) {
        c++;
    } else if (res == 4) {
        d++;
    } else if (res == 5) {
        e++;
    } else if (res == 6) {
        f++;
    }
}
console.log("a=" + a);
console.log("b=" + b);
console.log("c=" + c);
console.log("d=" + d);
console.log("e=" + e);
console.log("f=" + f);
/* end */