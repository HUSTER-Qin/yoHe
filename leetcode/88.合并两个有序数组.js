/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	// nums1 = nums1.splice(0, m).concat(nums2.splice(0, n)).sort()
	// return nums1 
	let p = m + n - 1
	let p1 = m - 1
	let p2 = n - 1
	while (p1 >= 0 && p2 >= 0) {
		// 把两者都大的往后放
			nums1[p--] = nums1[p1] < nums2[p2] ? nums2[p2--] : nums1[p1--]
	}
	while (p2>=0){
        nums1[p--] = nums2[p2--]
    }
	return nums1
};
// @lc code=end
console.log(merge([4,5,6,0,0,0], 3, [1,2,3], 3));