function binarySearch(nums, k) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)

        if (nums[mid] === k) {
            return mid
        } else if (nums[mid] < k) {
            left = mid+1
        } else if(nums[mid]>k){
            right = mid -1
        }
    }
    return -1
}   

nums = [1, 2, 2, 2, 3]
console.log(binarySearch(nums, 3));