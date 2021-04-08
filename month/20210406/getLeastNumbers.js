/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {

    for (let i = 0; i < k; i++) {
        let isSwap = false
        for (let j = arr.length - 1; j> 0; j--) {
            if (arr[j-1] > arr[j]) {
                arr[j - 1] = arr[j - 1] + arr[j]
                arr[j] = arr[j - 1] - arr[j]
                arr[j - 1] = arr[j - 1] - arr[j]
                isSwap = true;
            }
            
        }
        if (!isSwap) {
            break
        }
        
    }
    let result = []
    for (let index = 0; index < k; index++) {
        result.push(arr[index])
        
    }
    return result
};

console.log(getLeastNumbers([3, 2, 1],2));