/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    let result = 0

    while (x!=0) {
        let temp = result * 10 + x % 10
        if (temp > Math.pow(2, 31) || temp < -Math.pow(2, 31)) {
            return 0
        }
        result = temp

        x = x / 10 | 0
    }
    return result
};

reverse(1534236469)