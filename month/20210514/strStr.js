/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * haystack = "hello", needle = "ll"
 */
 var strStr = function(haystack, needle) {
    let i = 0
    let j = 0
    if(needle==="") return 0
    while (j<= haystack.length) {
        if(j-i===needle.length){
            return i
        }
     
        if(haystack[j]===needle[j-i]){
            j++
        }else{
            i++
            j = i
        }

    }
    return -1
};
haystack = "abc", needle = "c"
// haystack = "mississippi", needle = "mississippi"
// haystack = "hello", needle = "ll"
console.log(strStr(haystack, needle));