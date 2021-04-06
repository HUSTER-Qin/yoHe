/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let len = n
    if (n < 0) {
        x = 1 / x
        len = -n
    }
    let result = 1

    for (let i = 0; i < len; i++) {
        result = result * x
    }
    console.log(result);
    return result
};


myPow(2.00000 , - 2147483648)