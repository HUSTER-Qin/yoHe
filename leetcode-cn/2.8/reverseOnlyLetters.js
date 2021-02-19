/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {

    let i = 0
    let j = S.length - 1
    let arr = S.split('')
    while (i <= j) {
        let left = /^[a-zA-Z]+$/.test(arr[i])
        let right = /^[a-zA-Z]+$/.test(arr[j])
        if (left && right) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            j--
        }
        if (!left) {
            i++
        }
        if (!right) {
            j--
        }
    }
    return arr.join("")
};

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));

