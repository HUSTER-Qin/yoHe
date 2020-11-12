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
