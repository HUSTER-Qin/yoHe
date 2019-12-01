
let { tools } = require('../utils')


function insertSort(a) {
	for (let i = 0; i < a.length; i++) {
		for (let j = i; j > 0; j--) {
			if (tools.less(a[j - 1], a[j])) {
				tools.exch(a, j - 1, j)
			}
		}
	}
	console.log(a);
	
}

function insertSort2(a) {
	let cur = 0
	let j = 0
	for (let i = 1; i < a.length; i++) {
		cur = a[i]
		j = i
		while (j>0&&tools.less(a[j-1],cur)) {
			a[j] = a[j - 1]
			j--
		}
		if (j != i) {
			a[j] = cur
		}
	}
	console.log(a);

}
/**
 * 希尔排序
 * 	- 基于插入排序的快速排序方法
 *  - 数量越大越有优势 
 * @param {*} a 
 */
function shellSort(a) {
	let len = a.length
	let h = Math.floor(len / 2)
	while (h>0) {
		for (let i = h; i < len; i++) {
			for (let j = i - h; j < len - h; j++) {
				if (tools.less(a[j], a[j + h])) {
					tools.exch(a,j,j+h)	
				}	
			}	
		}
		h = Math.floor(h / 2)
	}
	console.log(a);
}
function shellSort2(arr) {
	var len = arr.length;
	for (var h = Math.floor(len / 2); h > 0; h = Math.floor(h / 2)) {
		for (var i = h; i < len; i++) {
			for (var j = i ; j >= 0 && tools.less(arr[j-h], arr[j]); j -= h) {
				tools.exch(arr, j-h, j)
			}
		}
	}
	console.log(arr);
	
	return arr
}
let a = tools.random(100000)
tools.time(insertSort, [...a])
tools.time(insertSort2, [...a])
tools.time(shellSort, [...a])
tools.time(shellSort2,[...a])