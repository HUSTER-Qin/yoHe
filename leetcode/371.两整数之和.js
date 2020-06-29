/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if (a == 0) return b;
    if (b == 0) return a;
    let lower;
    let carrier;
    while (true) {
        lower = a ^ b;    // 计算低位
        carrier = a & b;  // 计算进位
        if (carrier == 0) break;
        a = lower;
        b = carrier << 1;
    }
    return lower;
};
// @lc code=end

