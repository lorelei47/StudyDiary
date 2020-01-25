//快速排序（Quicksort）
//主要思想：归治思想，即选一个参数数，小的放它的左边，大的放它右边
//优点：数据量大时效率高
//思路：两个哨兵，i,j,j从右边找比基数小的，i从左边找比基数大的，然后交换两个目标元素的位置，直到i=j,然后交换i和基数的位置，递归处理。
let Array = [7,4,1,9,2,17,5,3,6];

const QuickSort = (array) => {
    if (array.length <= 1) { return array; }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return QuickSort(left).concat([pivot], QuickSort(right));
};
console.log(Array);
console.log(QuickSort(Array));