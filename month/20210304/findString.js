/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function (words, s) {

    let left = 0;
    let right = words.length-1
    
    while (left<= right) {
        let mid = Math.floor(left + (right - left) / 2)
        let temp = mid
        while (left<=mid && words[mid]==="") {
            mid--
        }
        if (words[mid] === s) {
            return mid
        }
        if (words[mid].charAt(0) > s.charAt(0)) {
            right = mid
        } else {
            left = temp+1
        }
    }
    return -1
};

words = ["AX zEfzhxdXXbeCQOKa", "aLRAEYPIZokU", "giqyZpvcOHdfPpRqHAD", "mhQf", "uwIPRHFftk"]

console.log(findString(words, "btRVwblGdpLTtSLbjFzB"));