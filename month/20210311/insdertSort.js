

function insertSort(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j > 0; j--) {
            if (nums[j] < nums[j - 1]) {
                [nums[j], nums[j - 1]] = [nums[j-1] , nums[j]]
           }
            
        }        
    }
    return nums
}

let arr = [4, 1, 5, 7, 2, 6, 3, 8];

console.log(insertSort(arr));