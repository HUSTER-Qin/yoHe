/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 * A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3
 */

    var merge = function (A, m, B, n) {

        let aIndex = m-1
        let bIndex = n-1
        let index = A.length-1
        while (aIndex>=0&&bIndex>=0) {
            A[aIndex] > B[bIndex] ? A[index--] = A[aIndex--] : A[index--] = B[bIndex--]
        }

        while (aIndex >= 0) {
            A[index--] = A[aIndex--]
        }
        while (bIndex>=0) {
            A[index--] = B[bIndex--]
        }
        return A
    };

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)