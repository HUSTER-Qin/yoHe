/**
 * @param {string[]} A
 * @return {number}
 */
// 找出非降序数列的个数
// 输入：["cba", "daf", "ghi","wie","sea"]           
// 输出：2
let minDeletionSize = function (A) {
    let result = 0
    for (let i = 0; i < A.length; i++) {
        let flag = true;
        // 数组越界问题（ A[i].length-1）
        for (let j = 0; j < A[i].length - 1; j++) {
            // 实际上我们需要统计所有是否降序
            // 刚才的判断方式：后一个比前一个大就break， 会导致后面的无法统计（da 判断完就退出了， 认为是降序）
            // 所以我们反过来 处理， 所有的都是升序 则认为 这是非降序的
            if (A[i][j] < A[i][j+1]) {
                flag = false
                break;
            }
        }
        if (!flag) {
            result++
        }

    }
    return result;
};

console.log(minDeletionSize(["cba", "daf", "ghi", "wie", "sea"]))