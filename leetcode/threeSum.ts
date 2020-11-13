/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 排序 + 双指针
// 本题的难点在于如何去除重复解。

// 算法流程：
// 特判，对于数组长度 nn，如果数组为 nullnull 或者数组长度小于 33，返回 [][]。
// 对数组进行排序。
// 遍历排序后数组：
// 若 nums[i]>0nums[i]>0：因为已经排序好，所以后面不可能有三个数加和等于 00，直接返回结果。
// 对于重复元素：跳过，避免出现重复解
// 令左指针 L=i+1L=i+1，右指针 R=n-1R=n−1，当 L<RL<R 时，执行循环：
// 当 nums[i]+nums[L]+nums[R]==0nums[i]+nums[L]+nums[R]==0，执行循环，判断左界和右界是否和下一位置重复，去除重复解。并同时将 L,RL,R 移到下一位置，寻找新的解
// 若和大于 00，说明 nums[R]nums[R] 太大，RR 左移
// 若和小于 00，说明 nums[L]nums[L] 太小，LL 右移
// 复杂度分析
// 时间复杂度：O\left(n^{2}\right)O(n 
// 2
//  )，数组排序 O(N \log N)O(NlogN)，遍历数组 O\left(n\right)O(n)，双指针遍历 O\left(n\right)O(n)，总体 O(N \log N)+O\left(n\right)*O\left(n\right)O(NlogN)+O(n)∗O(n)，O\left(n^{2}\right)O(n 
// 2
//  )
// 空间复杂度：O(1)O(1)

var threeSum = function(nums:Array<number>) {
	let len:number = nums.length;
	nums = nums.sort()
	let result: number[][]= []
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			return []
		}
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
		let L = i + 1;
		let R = len - 1;
		while (L<R) {
			if (nums[i]+ nums[L]+nums[R]===0) {
				result.push([nums[i], nums[L], nums[R]]);
				while (L<R && nums[L]===nums[L+1]) {
					L = L + 1;
				}
				while (L<R&& nums[R]===nums[R+1]) {
					R = R - 1;
				}
			} else if (nums[i] + nums[L] + nums[R] > 0) {
				R=R-1
			} else {
				L=L+1
			}
		}

		
	}
	 return result
};

console.log(threeSum([0, 0, 0, 0]));


// var threeSum = function(nums) {
//     if(nums.length<2) return -1
//     let map = new Map()

//     for(let i =0 ; i< nums.length-1;i++){
//         let num = nums[i]+ nums[i+1]
//         map.set(num,[nums[i],nums[i+1]])
//     }
//     let result = []
//     for(let i =2 ; i< nums.length;i++){
//         let num = 0 - nums[i]
//        if(map.get(num)){
//            result.push(map.get(num).concat(nums[i]))
//        }
//     }
//     return result;
// };

// console.log(threeSum([0,0,0,0]));