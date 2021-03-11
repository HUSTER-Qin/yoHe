

// 希尔排序： 对插入排序的一种改进； 通过增量 去对比交换， 直到增量为 1 ； 退化为插入排序

// 
function shellSort(nums) {
    //  计算增量
    for (let gap = Math.floor(nums.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // 按照增量  的值 去循环
        for (let i = gap; i < nums.length; i++) {
            let temp = nums[i]
            let j = i;
            // 在分组内部， 使用插入排序 的方法
            while ( j -gap>=0 && arr[j-gap]> temp) {
                nums[j] = nums[j - gap]
                j = j-gap
            }
            arr[j] = temp

        }
    }
    return nums
}

let arr = [4, 1, 5, 7, 2, 6, 3, 8];

console.log(shellSort(arr));