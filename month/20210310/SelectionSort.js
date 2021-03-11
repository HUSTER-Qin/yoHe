

// 选择排序： 获取最小的 值， 将其放入  当前位置
function selectionSort(nums) {

    let min;
    for (let i = 0; i < nums.length; i++) {
        min = i
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] < nums[min]) {
                min =  j
            }            
        }
       [nums[i], nums[min]] = [nums[min], nums[i]]
    }
    return nums
}

let arr = [4, 1, 5, 7, 2, 6, 3, 8];

console.log(selectionSort(arr));