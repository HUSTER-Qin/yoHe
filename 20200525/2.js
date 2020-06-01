function getMaxSubArr(arr, target) {
    if (arr.length === 1) {
      return arr[0] < target ? arr : [];
    }
    const dp = [[arr[0]]];
    for (let i = 1; i < arr.length; i++) {
      const c = arr[i];
      const lastDp = dp[i - 1];
      const sum = lastDp.reduce((acc, cur) => acc + cur, 0);
      // 理想情况，直接追加
      if (c + sum < target && lastDp[lastDp.length - 1] === arr[i - 1]) {
        dp[i] = [...dp[i - 1], c];
      } else {
      // 尝试往回找个更好的
        if (c < target) {
          const newArr = [];
          let sumDiff = target;
          let j = i;
          let newItem = arr[j];
          while (j >= 0 && sumDiff >= newItem) {
            sumDiff -= newItem;
            newArr.unshift(newItem);
            j--;
            newItem = arr[j];
          }
          dp[i] = dp[i - 1].length > newArr.length ? dp[i - 1] : newArr;
        } else {
        // 都比target大了，无话可说
          dp[i] = dp[i - 1];
        }
      }
    }
    return dp[arr.length - 1];
  }

let arr =[0, 1, 3, -1, 4, 6, -2]
console.log(getMaxSubArr(arr, 10));
