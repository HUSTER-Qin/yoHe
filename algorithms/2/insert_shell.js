
let { tools } = require('../utils')

/**
 * 插入排序
 * - 将当前位置与之前排好序的每个位置进行比较
 * - 如果比当前位置大则交换
 * @param {Array} a 
 */
function insertSort(a) {
	for (let i = 0; i < a.length; i++) {
		for (let j = i; j > 0; j--) {
			if (tools.less(a[j - 1], a[j])) {
				tools.exch(a, j - 1, j)
			}
		}
	}
}
/**
 * 插入排序
 * - 将当前的值与之前排好序的比较
 * - 如果比当前位置的值大，则记录该位置直到第一个没有比他大的值则退出循环
 * - 将当前值插入到该位置
 * @param {Array} a 
 */
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
	return  a
	// console.log(a);

}
/**
 * 希尔排序
 * 	- 基于插入排序的快速排序方法
 *  - 实际是改变步长
 *  - 数量越大越有优势 
 * @param {*} a 
 */
// 相连两位的移动
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
	return a
	// console.log(a);
}
// 相连两位的交换
function shellSort2(arr) {
	var len = arr.length;
	for (var h = Math.floor(len / 2); h > 0; h = Math.floor(h / 2)) {
		for (var i = h; i < len; i++) {
			for (var j = i; j >= 0 && tools.less(arr[j - h], arr[j]); j -= h) {
				tools.exch(arr, j-h, j)
			}
		}
	}
	return arr
}
// 比当前大的向后移动一位覆盖，
// 将当前一位插入到最后一次被移动的位置
let shellSort3 = function (arr) {
	let len = arr.length
	let cur = null
	let index = 0
	for (var h = Math.floor(len / 2); h > 0; h = Math.floor(h / 2)) {
		for (let i = h; i < len; i++) {
			cur = arr[i]
			index = i
			for (let j = i; j > 0&&less(arr[j - h], cur); j-=h) {
					arr[j] = arr[j - h]
					index = j-h
			}
			if (index != i) {
				arr[index] = cur
			}
			
		}
	}
	return arr
}
let a = tools.random(10)
// tools.time(insertSort, [...a])
// tools.time(insertSort2, [...a])
tools.time(shellSort, [...a])
tools.time(shellSort2,[...a])