/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	let arr = nums1.concat(nums2)
	arr = arr.sort((a,b)=>a-b)
	mid = Math.floor(arr.length / 2)
	let res = 0
	if (arr.length % 2 === 0) {
		res = (arr[mid-1] + arr[mid])/2
	} else {
		res = arr[mid]
	}
	return res
};
// @lc code=end
