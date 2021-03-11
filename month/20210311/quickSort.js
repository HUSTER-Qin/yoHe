
function sortArr(nums) {
    quickSort(nums, 0, nums.length - 1)
    return nums;
}




function quickSort(nums, l, r) {
    let low = l
    let hight = r
    if(hight<low) return
    let temp = nums[low]

    while (low<hight) {
        while (low<hight&&nums[hight]>temp) {
            hight--
        }
        if (low < hight) {
            nums[low] = nums[hight]
            low++
        }

        while (low<hight&& nums[low]<temp) {
            low++
        }
        if (low < hight) {
            nums[hight] = nums[low]
            hight--
        }
    }
    nums[low] = temp

    quickSort(nums, l, low - 1)
    quickSort(nums, low + 1, r)
}



let arr = [4, 1, 5, 7, 2, 6, 3, 8];

console.log(sortArr(arr));


