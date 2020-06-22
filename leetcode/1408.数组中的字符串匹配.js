/*
 * @lc app=leetcode.cn id=1408 lang=javascript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    // let result = []
    // for (let i = 0; i < words.length; i++) {
    //     for (let j = 0; j < words.length; j++) {
    //         if(j!==i&& words[j].includes(words[i])){
    //             result.push(words[i])
    //             break
    //         }   
    //     }
      
    // }
    // return result
    let result = []
    let str = words.join(',')
    for (let i = 0; i < words.length; i++) {
        if(str.indexOf(words[i])!==str.lastIndexOf(words[i])){
            result.push(words[i])
        }
        
    }
    return result
};
// @lc code=end


console.log(stringMatching(["mass","as","hero","superhero"]));
