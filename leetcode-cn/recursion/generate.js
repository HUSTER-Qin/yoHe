/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    let result = Array.from({length:numRows},()=>[])
    let help = function (rows, numRows , result) {
        if (rows> numRows) {
            return result
        }
        for (let i = 0; i < rows; i++) {
            if (i == 0 || i === rows - 1) {
               result[rows-1].push(1)
            } else {
                 result[rows - 1].push(result[rows - 2][i - 1] + result[rows - 2][i]);
           }
            
        }
        help(rows+1, numRows, result)
    }
    help(1, numRows, result)
    console.log(result);
    return result
};

generate(5)