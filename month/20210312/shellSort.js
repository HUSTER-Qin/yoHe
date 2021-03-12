

function shellSort(nums) {
    
    for (let gap = Math.floor(nums.length/2); gap >0 ; gap = Math.floor(gap/2)){

        for (let i = gap; i < nums.length; i++) {
            
            for (let j = i-gap; j >= 0 ; j-=gap) {
                if (nums[j] > nums[j + gap]) {
                    [nums[j], nums[j+gap]] = [nums[j+gap], nums[j]]
                }
                
            }
        }
    }

    return nums
}

let arr = [4, 1, 5, 7, 2, 6, 3, 8];

console.log(shellSort(arr));