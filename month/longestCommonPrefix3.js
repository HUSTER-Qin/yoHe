function longestCommonPrefix(strs) {
    if(strs.length == 0) {
        return "";
    }
    let result = strs[0];
    for(let i=0; i<strs.length; i++) {
        while(strs[i].indexOf(result) != 0) {
            result = result.substring(0, result.length-1);
            if(result.length == 0) {
                return "";
            }
        }
    }
    return result;
}

longestCommonPrefix(["flower", "flow", "flight"])