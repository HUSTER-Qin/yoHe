/**
 Do not return anything, modify matrix in-place instead.
 */

// 输入：matrix = [[1, 2], [3, 4]]
// 输出：[[3, 1], [4, 2]]
var rotate = function (matrix) {
    let len = matrix.length
    let new_m = Array.from({ length: len }, () => [])

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {

            new_m[j][len-i-1] = matrix[i][j]

        }

    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            matrix[i][j] = new_m[i][j]
            
        }
        
    }

    return matrix
};

matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]

console.log(rotate(matrix));