

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
    let arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '?') {
            let j = 0
            let chart = 'a'
            while (arr[i - 1] === chart || arr[i + 1] === chart) {
                chart = String.fromCharCode(97 + j)
                j++
            }
            arr[i] = chart
        }

    }
    return arr.join("")
};

modifyString("j?qg??b")