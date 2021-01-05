
function zeroMove (arr) {
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

console.log(zeroMove([0,0,0,3,12]));