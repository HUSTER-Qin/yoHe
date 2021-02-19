/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {

    let str = ""
    for (let i = 0; i<s.length; i++) {
        str = s.slice(0, i)
        let num = (s.length - str.length) / str.length
        let b = num % 1 === 0 && str.repeat(num)
        if (num % 1 === 0 && str.repeat(num+1) === s) return true
    }
    return false

};

console.log(repeatedSubstringPattern("abcabcabcabc"));
