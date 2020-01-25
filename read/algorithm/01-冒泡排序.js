//冒泡排序（Bubble Sort）
let Array = [2,34,7,11,16,27,21,5];

const BubbleSort = (array) => {
    let len = array.length;
    let temp = null;
    for(let i = 0; i <= len - 1; i++){
        for(let j = 0;j <= len - 1-i; j++){
            if(array[j] > array[j + 1]){
                temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
} 

console.log(Array);
console.log(BubbleSort(Array));