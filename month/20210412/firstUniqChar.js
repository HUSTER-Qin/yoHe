/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]+1))
        } else {
            map.set(s[i],1)
        }
    }
    let result = -1
    for (let j = 0; j < s.length; j++) {
        if (map.get(s[j]) === 1) {
            result = j
            break
        }
        
    }
    return result
};