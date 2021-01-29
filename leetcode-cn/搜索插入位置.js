var searchInsert = function (nums, target) {

    let low = 0;
    let high = nums.length - 1
    let result =nums.length
    while (low<=high) {
        let mid = Math.floor((high - low) / 2 + low)
        if(target)
        if (target > nums[mid]) {
            low = mid + 1
        } else {
            result = mid
            high = mid -1 
        }
    }
    return result   
};

console.log(searchInsert([1, 3, 5, 6], 7));