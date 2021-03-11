
function bubbleSort(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length-i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j+1], nums[j]]
            }            
        }        
    }

    return nums
}

let arr = [4, 1, 5, 7, 2, 6, 3, 8];

console.log(bubbleSort(arr));