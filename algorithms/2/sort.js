
const { Random } = require('../utils')
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
			if (less(a[min], a[j])) {
				// 记录最小位置
				min = j
			}
		}
		// 交换元素
		exch(a, i, min)
	}
	return a
}
// sort(Random(10))
// selectionSort(['S', 'O', "R", "T", "E", "X", "A", "M", "P", "L", "E"])


/**
 * 将元素与已经左边排序好的 挨个比较直到 排到头
 * 插入排序
 * - 对已经有序或者接近有序将比随机排序快得多
 * @param {Array} a 
 */
function insertSort(a) {
	let order = 0
	for (let i = 1; i < a.length; i++) {
		for (let j = i; j > 0 ; j--) {
			if (less(a[j - 1], a[j])) {
				exch(a, j, j - 1)
			}
		}	
		

	}
	return a
}

function insertSort2(a) {
	let cur = null
	let j = 0
	for (let i = 1; i < a.length; i++) {
		temp = a[i]
		j = i
		while (j > 0 && less(a[j - 1], temp)) {
			a[j] = a[j - 1]
			j--
		}
		if (j != i) {
			a[j] = temp
		}
	}
	return a
}

// insertSort(Random(10))
insertSort(['S', 'O', "R", "T", "E", "X", "A", "M", "P", "L", "E"])

insertSort2(['S', 'O', "R", "T", "E", "X", "A", "M", "P", "L", "E"])



/**
 * 比较两个元素
 * @param {*} v 
 * @param {*} w 
 */
function less(v, w) {
	return v > w
}

/**
 * 交换元素
 * @param {Array} a 
 * @param {Number} i 
 * @param {Number} j 
 */
function exch(a, i, j) {
	[a[i], a[j]] = [a[j], a[i]]
}
/**
 * 单行打印数组
 * @param {Array} params 
 */
function show(params) {


}
/**
 * 测试数据是否有序
 * @param {Array} params 
 */
function isSorted(params) { }