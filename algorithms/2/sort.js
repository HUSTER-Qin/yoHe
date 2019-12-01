

let { tools } = require('../utils')
/**
 * 选择排序
 * - 运行时间和输入无关
 * - 数据移动最少
 * @param {Array} a 
 */
function selectionSort(a) {
	let min = 0
	for (let i = 0; i < a.length; i++) {
		min = i
		for (let j = i; j < a.length; j++) {
			if (tools.less(a[min], a[j])) {
				// 记录最小位置
				min = j
			}
		}
		// 交换元素
		tools.exch(a, i, min)
	}
	return a
}
/**
 * 将元素与已经左边排序好的 挨个比较直到 排到头
 * 插入排序
 * - 对已经有序或者接近有序将比随机排序快得多
 * @param {Array} a 
 */
function insertSort(a) {
	let order = 0
	for (let i = 1; i < a.length; i++) {
		for (let j = i; j > 0; j--) {
			if (tools.less(a[j - 1], a[j])) {
				tools.exch(a, j, j - 1)
			}
		}
	}
	return a
}

/**
 * 插入排序：移动位置
 * @param {*} a 
 */
function insertSort2(a) {
	let cur = null
	let j = 0
	for (let i = 1; i < a.length; i++) {
		cur = a[i]
		j = i
		while (j > 0 && tools.less(a[j - 1], cur)) {
			a[j] = a[j - 1]
			j--
		}
		// 此时存在 cur 比前面的小
		if (j != i) {
			a[j] = cur
		}
	}
	// console.log(a);

	return a
}
/**
 * 希尔排序
 * 	- 基于插入排序的快速排序方法	
 * @param {*} params 
 */
function shellSort(arr) {
	var len = arr.length;
	for (var h = Math.floor(len / 2); h > 0; h = Math.floor(h / 2)) {
		for (var i = h; i < len; i++) {
			for (var j = i ; j >= 0 && tools.less(arr[j-h], arr[j]); j -= h) {
				tools.exch(arr, j-h, j)
			}
		}
	}
	return arr
}

let a = ['S', 'O', "R", "T", "E", "X", "A", "M", "P", "L", "E"]
a = tools.random(100000)

tools.time(selectionSort, [...a])
tools.time(insertSort2, [...a])
tools.time(shellSort, [...a])





// shellSort(['S', 'O', "R", "T", "E", "X", "A", "M", "P", "L", "E"])