/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {  
    let hight = n
    let low = 0
    while (low<=hight) {
        let mid = Math.floor((hight+low)/2)
        let s = guess(mid)
        if(s===0) return mid
        if (s > 0) {
            low = mid+1
        } else {
            hight = mid-1
        }
    }
};
// @lc code=end

