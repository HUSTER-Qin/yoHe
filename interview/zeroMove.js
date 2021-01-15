
function zeroMove(arr) {
	let index = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 0) {
			index++
		} else {
			arr[i - index] = arr[i]
			arr[i] = 0
		}
	}
	return arr
}

console.log(zeroMove([0, 0, 0, 3, 12]));


function a(arr) {
	// console.log(arr);
	if (arr.length === 5) {
		return arr
	} else {
		arr.push(parseInt(Math.random() * (32 - 2 + 1) + 2, 10))
		a(arr)
	}

}
let x = a([])
console.log(x);