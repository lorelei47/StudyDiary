/**
 * 通过递归，判断当前属性值是否为引用类型
 * @param {*} obj 
 * @returns 
 */
function deepCopy(obj) {
    let itemObj = Array.isArray(obj) ? [] : {}
    if(typeof obj !== 'object'){
        return obj;
    }else{
        for(let i in obj){
            if(typeof obj[i] === 'object'){
                itemObj[i] = deepCopy(obj[i]);
            }else{
                itemObj[i] = obj[i];
            }
        }
        return itemObj;
    }
}

var a = {
    name: 'test',
    group: [1,2],
    func: function(){
        console.log("hi");
    }
}

var b = deepCopy(a);

