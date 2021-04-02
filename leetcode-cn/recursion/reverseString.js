/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

    let help = function (s, len, i) {
        if (i >= Math.floor(len / 2)) {
            return s
        }
        [s[i], s[len - i - 1]] = [s[len - i - 1], s[i]]
       return help(s, len, ++i)
    }

    return help(s, s.length , 0 )
    
};


console.log(reverseString(["H","a","n","n","a","h"]));