/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLocaleLowerCase()
    let i = 0;
    let j = s.length - 1

    while (i < j) {
        let left = /^[a-zA-Z]$/.test(s[i])
        let right = /^[a-zA-Z]$/.test(s[j])
        if (!left) {
            i++
            continue
        }
        if (!right) {
            j--
            continue
        }
        if (s[i] === s[j]) {
            i++
            j--
        } else {
            return false
        }
    }
    return true
};

console.log(isPalindrome("0P"));