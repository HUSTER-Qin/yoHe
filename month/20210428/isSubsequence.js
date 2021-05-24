/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let a = 0;
    let b = 0;

    while (b<t.length&&a<s.length) {
        if (s[a] === t[b]) {
            a++
            b++
        } else {
            b++
        }
    }

    return a===s.length
};

s = "axc", t = "ahbgdc"
console.log(isSubsequence(s, t));