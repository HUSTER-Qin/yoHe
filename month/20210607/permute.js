/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 输入: [1, 2, 3]
// 输出:
// [
//     [1, 2, 3],
//     [1, 3, 2],
//     [2, 1, 3],
//     [2, 3, 1],
//     [3, 1, 2],
//     [3, 2, 1]
// ]

// var permute = function (nums) {
//     if(nums.length<1) return []
//     let result = []
//     const swap = (nums, i, j) => [nums[i], nums[j]] = [nums[j], nums[i]]
//     const help = function (nums, p,q) {
//         if (p === q) {
//             result.push(nums.slice())
//         } else {
//             for (let i = p; i <= q; i++) {
//                 swap(nums,p,i)
//                 help(nums, p + 1, q)
//                 swap(nums, p, i)
//             }
//         }  
//     }
//     help(nums, 0, nums.length - 1)
//     return result
// };

function permute(nums) {
    const res = []
    function backtrack(path) {
        if (path.length === nums.length) {
            res.push(path)
            return
        }
        nums.forEach((item) => {
            if (path.includes(item)) {
                return
            }
            backtrack(path.concat(item))
        })
    }
    backtrack([])
    return res
}


console.log(permute([1, 2, 3]));