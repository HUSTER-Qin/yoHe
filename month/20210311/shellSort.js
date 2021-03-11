
function shellSort(nums) {

    for (let gap = Math.floor(nums.length / 2); gap > 0; gap = Math.floor(gap / 2)) {

        for (let j = gap; j < nums.length; j++) {

            for (let index = j- gap; index >=0 ; index = index-gap) {
                if (nums[index + gap] < nums[index]) {
                    [nums[index], nums[index + gap]] = [nums[index + gap], nums[index]]
                }
            }

        }

    }

    return nums;
}

let arr = [4, 1, 5, 7, 2, 6, 3, 8];

console.log(shellSort(arr));