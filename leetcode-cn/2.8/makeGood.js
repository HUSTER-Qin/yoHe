/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let arr = s.split("")
    let i = 0
    while (i < arr.length) {
        if (arr[i + 1] && arr[i] !== arr[i + 1]) {
            if (arr[i] === arr[i + 1].toLocaleLowerCase() || arr[i] === arr[i + 1].toLocaleUpperCase()) {
                arr.splice(i, 2)
                i = 0
                continue
            }
        }

        i++
    }
    return arr.join('')
};

makeGood('leEeetcode')