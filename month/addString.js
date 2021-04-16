
// function addString (num1, num2) {

// 	let count = 0;
// 	let res = ""
// 	while (num1>0 || num2>0|| count!=0) {
// 		let _a = num1 % 10
// 		let _b = num2 % 10
// 		let result = _a + _b +count;
// 		if (result >= 10) {
// 			count = 1
// 			result = result %10
// 		} else {
// 			count = 0
// 		}
// 		num1 = Math.floor(num1 / 10)
// 		num2 = Math.floor(num2/10)
// 		res = result + res;
// 	}
// 	return res==="" ? 0 : res
// }

function addString (num1, num2) {
	let aIndex = num1.length - 1
	let bIndex = num2.length - 1
	let count = 0
	let res = ""
	while (aIndex >= 0 || bIndex >= 0||count!=0) {
		let _a = num1[aIndex] || 0
		let _b = num2[bIndex] || 0

		let result = Number(_a) + Number(_b) + count;
		if (result >= 10) {
			count = 1
			result = result % 10
		} else {
			count = 0
		}
		aIndex--
		bIndex--
		res = result + res;
	}
	return  res==="" ? 0 : res
}
console.log(addString("11", "9"));