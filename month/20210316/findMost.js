// ['a', 'b'], ['A', 'B'], ['1', '0']，输出['aA1', 'aA0', 'aB1', 'aB0', 'bA1', 'bA0', 'bB1', 'bB0']


const findMost = function (arr, key) {
    let target = ""
    let count = 0

    for (let index = 0; index < arr.length; index++) {
        if (count === 0) {
            target = arr[index]
            count=1
        } else {
            if (target === arr[index]) {
                count++
            } else {
                count--
            }
        }
    }
    return target
}
// [1, 1, 2 , 3, 3, 3, 3, 4, 6, 6]，给定一个数 n，例如 3

let c = [1, 1, 2, 3, 3, 3, 3, 4, 6, 6]

console.log(findMost(c, 3));
