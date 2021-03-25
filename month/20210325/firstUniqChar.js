/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {

    let map = new Map()

    for (let i = 0; i < s.length; i++) {
        map.has(s[i]) ? map.set(s[i], map.get(s[i])+1) : map.set(s[i], 1)
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i
        }
    }
    return -1
};

s = "loveleetcode"

console.log(firstUniqChar(s));