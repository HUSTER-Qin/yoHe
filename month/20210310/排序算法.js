function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, low, hight) {
  if (low < hight) {
    let index = partition(nums, low, hight);
    quickSort(nums, low, index - 1);
    quickSort(nums, index + 1, hight);
  }
}

function partition(nums, low, hight) {
  let temp = nums[low];

  while (low < hight) {
    while (low < hight && nums[hight] >= temp) {
      hight--;
    }

    if (low < hight) nums[low] = nums[hight];
    while (low < hight && nums[low] <= temp) {
      low++;
    }
    if (low < hight) nums[hight] = nums[low];

    nums[low] = temp;
    
  }
    return low;
}

let arr = [4, 1, 5, 7, 2, 6, 3, 8];

console.log(sortArray(arr));
