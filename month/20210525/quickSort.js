function sort(arr) {
    if (arr.length <= 1) return arr

    //选基准值
    let mid_pos = arr.length >> 1
    let mid = arr.splice(mid_pos, 1)[0]

    let left = [], right = []

    //和基准值比较,分别插入left,right数组
    arr.forEach(item => (item <= mid ? left : right).push(item))

    return [...sort(left), mid, ...sort(right)]//递归调用排序
}

let a = [1, 4, 2, 5, 7, 3]

console.log(sort(a));