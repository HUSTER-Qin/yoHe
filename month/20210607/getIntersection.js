
function getIntersection (arr) {
	if(arr.length<2) return arr
	const isNumber = function (array) {
		return  array.every(item=> typeof item ==="number"&&!Number.isNaN(item))
	}
	arr = arr.map(item => {
		return item.sort()
	})
	let a = arr.shift()

	while (arr.length>0) {
		let b = arr.shift()
		if (!isNumber(b) || !isNumber(a)) {
			return null
		}
		if (a[0] > b[1]||b[0]>a[1]) {
			return null
		}
		a[0] = Math.max(a[0], b[0])
		a[1] = Math.min(a[1], b[1])
	}
	console.log(a);
	return a
}

let a = [[5, 2], [4, 9], [3, 6]]
// let a = [[1,7] ,[8,9], [10,11]]
console.log(getIntersection(a));
// 


