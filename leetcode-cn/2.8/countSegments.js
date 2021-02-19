/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    let arr = s.split(' ')
    return  arr.filter(item=>item!=="").length
};

console.log(countSegments("    "));