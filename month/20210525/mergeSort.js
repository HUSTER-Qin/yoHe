
// function sort(arr) {
//     if (arr.length === 1) return arr
//     let mid = Math.floor(arr.length / 2)
//     let [part1, part2] = [sort(arr.slice(0, mid)), sort(arr.slice(mid))]
//     console.log(part1, part2);

//     console.log(part1, part2);
// }


// let a = [1, 4, 2, 5, 7, 3]

// console.log(sort(a));

function sort(arr) {
    if (arr.length === 1) return arr

    //分成两部分
    let mid = Math.floor(arr.length / 2)
    let [part1, part2] = [sort(arr.slice(0, mid)), sort(arr.slice(mid))]
    console.log(part1, part2);
    //对比+合并
    let result = []
    while (part1.length > 0 && part2.length > 0)
        result.push((part1[0] < part2[0] ? part1 : part2).shift())
    return [...result, ...part1, ...part2]
}
let a = [1, 4, 2, 5, 7, 3]

console.log(sort(a));