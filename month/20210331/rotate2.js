/**
 Do not return anything, modify matrix in-place instead.
 */

// 输入：matrix = [[1, 2], [3, 4]]
// 输出：[[3, 1], [4, 2]]
// var rotate = function (matrix) {
//     let len = matrix.length

//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < Math.floor(len / 2); j++) {

//             [matrix[i][j], matrix[i][len - j - 1]] = [matrix[i][len - j - 1], matrix[i][j]]
//         }

//     }
//     console.log(matrix);
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len-i; j++) {
//             [matrix[i][j], matrix[len - j - 1][len - i - 1]] = [matrix[len - j - 1][len - i - 1], matrix[i][j]]
//         }

//     }
//     return matrix
// };

function rotate(matrix) {
    for (let i = matrix.length - 1; i >= 0; i--) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[j].push(matrix[i].shift())
        }
    }
    return matrix
};
matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]

console.log(rotate(matrix));