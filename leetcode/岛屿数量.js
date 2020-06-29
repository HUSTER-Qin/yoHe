
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const fun = function name(arr, i, j) {
        if (i < 0
            || i >= arr.length
            || j < 0
            || j >= arr[i].length
            || arr[i][j] === '0') {
            return
        }
        arr[i][j] = '0'
        fun(arr, i - 1, j)
        fun(arr, i + 1, j)
        fun(arr, i, j - 1)
        fun(arr, i, j + 1)

    }
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        let child = grid[i]
        for (let j = 0; j < child.length; j++) {
            if (grid[i][j] === '1') {
                fun(grid, i, j)
                count++
            }

        }

    }
    console.log(count);
    return count
};

let t = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]]

numIslands(t)