/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1
    let reg = /[0-9a-zA-Z]/
    let regChart = /[a-zA-Z]/
    while (left < right) {
        while (!reg.test(s[left])) {
            left++
        }
        while (!reg.test(s[right])) {
            right--
        }
        if (s[left] !== s[right]) {
            if (regChart.test(s[left]) && regChart.test(s[right]) && s[left].toLowerCase() === s[right].toLowerCase()) {
                left++
                right--
                continue
            } else {
                return false
            }
        }
        left++
        right--


    };
    return true
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));