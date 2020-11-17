// 冒泡排序

// 时间复杂度 O(n2)
// 最好情况 是O(n) 标志位记录是否一次排好
// 空间复杂度 O(1)
function bubbleSort(arr: Array<number>): Array<number> {
  let len: number = arr.length;
  let flag: Boolean = true;
  if (1 >= len) return arr;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        flag = false;
      }
    }
    if (flag) break;
  }
  console.log(arr);
  return arr;
}

bubbleSort([9, 1, 4, 2, 8, 3, 1, 3, 7]);

// 选择排序
// 时间复杂度 O(N2)
// 所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。

// 1. 算法步骤
// 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。

// 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。

// 重复第二步，直到所有元素均排序完毕。

function selectionSort(nums: Array<number>): Array<number> {
  let min: number = 0;
  for (let j = 0; j < nums.length; j++) {
    min = j
    for (let i = j; i < nums.length; i++) {
      if (nums[min] > nums[i]) {
        min = i;
      }
    }
    let temp = nums[j];
    nums[j] = nums[min];
    nums[min] = temp;
  }
  console.log(nums);
  
  return nums;
}

selectionSort([9, 1, 4, 2, 8, 3, 1, 3, 7]);
