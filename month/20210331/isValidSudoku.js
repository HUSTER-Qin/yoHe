/**
 * @param {character[][]} board
 * @return {boolean}
 */

let a = [
    [".", "8", "7", "6", "5", "4", "3", "2", "1"],
    ["2", ".", ".", ".", ".", ".", ".", ".", "."],
    ["3", ".", ".", ".", ".", ".", ".", ".", "."],
    ["4", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", ".", "."],
    ["6", ".", ".", ".", ".", ".", ".", ".", "."],
    ["7", ".", ".", ".", ".", ".", ".", ".", "."],
    ["8", ".", ".", ".", ".", ".", ".", ".", "."],
    ["9", ".", ".", ".", ".", ".", ".", ".", "."]]


var isValidSudoku = function (board) {

    let rows = Array.from({ length: 9 }, () => [])
    let columns = Array.from({ length: 9 }, () => [])
    let target = Array.from({ length: 9 }, () => [])
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const current = board[i][j];
            if (current !== ".") {
                let box_index = Math.floor((i / 3)) * 3 + Math.floor(j / 3)
                if (rows[i][current] > 0 || columns[j][current]>0 || target[box_index][current] > 0) {
                    return false
                }
                rows[i][current] = 1
                columns[j][current] = 1
                target[box_index][current] = 1



            }

        }

    }
    return true
};

console.log(isValidSudoku(a));