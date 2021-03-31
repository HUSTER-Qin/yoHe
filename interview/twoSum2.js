


function addStrings(num1, num2) {
    let i = num1.length - 1
    let j = num2.length - 1
    let add = 0

    let result = ""

    while (i > 0 || j > 0|| add!=0) {
        let x = i >= 0 ? num1[i] - "0" : 0
        let y = j >= 0 ? num1[j] - "0" : 0

        let sum = x + y + add
        result += (sum%10 + "0")
        add = sum / 10
        j--
        i--
    }
    return result;
}

console.log(addStrings('1234', "1234"));