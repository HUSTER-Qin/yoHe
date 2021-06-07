var transpose = function (A) {
    // let result = []
    // for (let i = 0; i < A.length; i++) {
    //     let t = A[i]
    //     for (let j = 0; j < t.length; j++) {
    //         Array.isArray(result[j]) ? result[j].push(t[j]) : result[j] = [t[j]] 
    //     }
    // }
    // return result
    return A[0].map((_, index) => {
        return A.map(item => {
            return item[index]
        })
    })
};

// console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
function majorityElement(arr) {
    let stack = []
    let top = -1
    for (const value of arr) {
        if (top === -1) {
            stack[++top] = value
        } else if (stack[top] === value) {
            stack[++top] = value 
        } else {
            top--
        }
    }
    console.log(stack);
}
// var majorityElement = function (nums) {
//     let map = new Map()
//     for (let value of nums) {
//         if (map.get(value) > nums.length / 2) return value
//         if (map.get(value)) {
//             map.set(value, 1)
//         } else {
//             map.set(value, map.get(value) + 1)
//         }
//     }
//     return -1
// };
var majorityElement = function (nums) {
    let map = new Map()
    for (let value of nums) {
       
        map.set(value, (map.get(value) || 0) + 1)
        if (map.get(value) > (nums.length / 2)) return value
    }
    return -1
};
majorityElement([1, 2, 5, 9, 5, 9,5,5,5])