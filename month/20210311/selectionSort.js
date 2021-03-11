
function selectionSort(nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
       
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] < nums[index]) {
                index = j
            }
        }
        [nums[i], nums[index]] = [nums[index], nums[i]]
    }

    return nums
}

let arr = [4, 1, 5, 7, 2, 6, 3, 8];

console.log(selectionSort(arr));