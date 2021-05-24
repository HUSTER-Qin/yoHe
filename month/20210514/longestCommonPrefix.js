/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    // 
    let result = strs[0]

    for (let i = 0; i < strs.length; i++) {
        if(result==="") return ""
        while (strs[i].indexOf(result)!=0) {
            result = result.substring(0, result.length-1)
        }
        
    }
    return result
};
strs = ["flower","flow","flight"]
strs = ["c","acc","ccc"]
longestCommonPrefix(strs)