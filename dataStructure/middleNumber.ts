
// 计算数组中的 中间数；该数的左边和右边的和 相等

let mNum :number[];

const middleNumber = function mn(mNum:number[]):number {
    let len = mNum.length
    if (len<3) return -1
    let total = 0;
    let sum = 0;
    total = mNum.reduce((a,b)=>a+b)
    for (let i = 0; i < len; i++) {
        if (sum === total - sum- mNum[i]) {
            return i
        } else {
            sum += mNum[i];
        }
        
    }
    return -1
}

console.log(middleNumber([1,2,5,5,3,13]));