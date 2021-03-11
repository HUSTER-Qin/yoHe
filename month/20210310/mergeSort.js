function mergeSort(nums) {
    
    if (nums.length < 2) {
        return nums
    }

    let mid = Math.floor(nums.length / 2)
    
   let left = nums.slice(0, mid)
   let right = nums.slice(mid)
    
    return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right) {
    let result = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result
}

let arr = [4, 1, 5, 7, 2, 6, 3, 8];

console.log(mergeSort(arr));