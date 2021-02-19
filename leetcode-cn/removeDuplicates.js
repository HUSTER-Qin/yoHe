/**
 * @param {number[]} nums
 * @return {number}
 * nums = [0,0,1,1,1,2,2,3,3,4],
 */
var removeDuplicates = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[j] = nums[i]
            j++
        }
    }
    console.log(j)
    return j
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k%nums.length;
    const route2 = function (start, end, nums) {
        while (start < end) {
            let temp = nums[start]
            nums[start++] = nums[end]
            nums[end--] = temp
        }
    }
    route2(0, nums.length - 1, nums)
    route2(0, k - 1, nums)
    route2(k, nums.length - 1, nums)
    console.log(nums);
    return nums
};

rotate([-1], 2)

var containsDuplicate = function (nums) {
    if (nums < 2) return false
    let target = Array.from(new Set(nums))
    return target.le !== nums.length
};

containsDuplicate([3, 1])

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let j = 0
    for (let i = 0; i < nums.length-1; i++) {

        for (j = 0; j < nums.length-1; j++) {
            if (nums[i] === nums[j]&&i!=j) {
                break;
            }
        }
        if (j === nums.length-1) {
            return nums[i]
        }
    }
};

console.log(singleNumber([2, 2, 1]));


var moveZeroes = function (nums) {
    let j = 0
    let i = 0;
    while (j < nums.length) {
        if (nums[i] !== 0) {
            nums[j++] = nums[i] || 0
        }

        i++
    }
};

moveZeroes([0, 1, 0, 3, 12])


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let len = matrix[0].length
    let arr = JSON.parse(JSON.stringify(matrix))
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            arr[j][len - i - 1] = matrix[i][j]
        }
    }
    matrix = arr
    return arr
};

let a = rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
console.log(a);


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let len = digits.length - 1
    while (len >= 0) {
        digits[len] = digits[len] + 1
        if (digits[len] % 10 !== 0) {
            return digits
        }
        len--
    }
    digits.shift(1)
    console.log(digits);
    return digits
};

plusOne([9])