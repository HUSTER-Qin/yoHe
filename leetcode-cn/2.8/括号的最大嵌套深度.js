/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let stack = []
    let depth = 0;
    for (let i = 0; i < s.length; i++){
        let code = s[i]
        switch (code) {
            case "(":
                stack.push(code)
                break;
            case ")":
                 depth = Math.max(depth,stack.length)
                 stack.pop()
                    
                break;
            default:
                break;
        }
    }
    return depth
};

console.log(maxDepth("1+(2*3)/(2-1)"));