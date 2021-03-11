function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}
// 快速排序递归发
function quickSort(nums, low, hight) {
  index = position(nums, low, hight);
  if (low < hight) {
    quickSort(nums, low, index - 1);
    quickSort(nums, index + 1, hight);
  }
}

//划分 子区间
function position(nums, low, hight) {
  let temp = nums[low];

  while (low < hight) {
    while (low < hight && nums[hight] > temp) {
      hight--;
    }
    if (low < hight) {
      nums[low] = nums[hight];
      low++;
    }

    while (low < hight && nums[low] < temp) {
      low++;
    }
    if (low < hight) {
      nums[hight] = nums[low];
      hight--;
    }
    nums[low] = temp;
  }

  return low;
}

function partition(arr, left, right) {
  var pivot = left,                     // 设定基准值（pivot）
    index = pivot + 1;
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[i], arr[index]] = [arr[index], arr[i]]
      index++;
    }
  }
  [arr[index - 1], arr[pivot]] = [arr[pivot], arr[index - 1]]
  return index - 1;
}



// 快速排序 迭代法
function sortArray2(nums) {
  // 储存 子区间的  节点
  let stack = [];

  stack.push(nums.length - 1);
  stack.push(0);

  while (stack.length > 0) {
    let low = stack.pop();
    let hight = stack.pop();

    if (low < hight) {
      let index = partition(nums, low, hight);
      stack.push(index - 1);
      stack.push(low);
      stack.push(hight);
      stack.push(index + 1);
    }
  }

  return nums;
}

let arr = [4, 1, 5, 7, 2, 6, 3, 8];

console.log(sortArray2(arr));
