

let num = 12
function isInteger(num) {
    return typeof num ==='number' && num%1===0
}

Math.isInteger(num)

function isInteger(num) {
    return Math.floor(num)===num
}