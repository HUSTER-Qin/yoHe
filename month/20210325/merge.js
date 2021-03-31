/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// https://leetcode-cn.com/leetbook/read/top-interview-questions/xmi2l7/
var merge = function (nums1, m, nums2, n) {
    let len = nums1.length - 1
    n = n - 1
    m = m - 1
    while (m >= 0 && n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[len--] = nums1[m--]
        } else {
            nums1[len--] = nums2[n--]
        }
    }
    if (m >= 0) {
        while (len >= 0) {
            nums1[len--] = nums1[m--]
        }
    }
    if (n >= 0) {
        while (len >= 0) {
            nums1[len--] = nums2[n--]
        }
    }
    return nums1
};
nums1 = [0], m = 0, nums2 = [1], n = 1

console.log(merge(nums1, m, nums2, n));