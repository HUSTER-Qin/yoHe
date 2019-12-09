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
 * 计算程序运行的时间
 * @param {*} fn 
 * @param {*} a 
 */
function time(fn, a) {
	console.time(fn.name)
	let r = fn(a)
	console.timeEnd(fn.name)
	isSort(r)
}
/**
 * 生成指定长度的随机数 数组
 * @param {number} len 
 */
function random(len) {
	return Array.from({ length: len }, () => Math.round(Math.random() * 100))
}
/**
 * 只支持升序
 * @param {Array} arr 
 * @param {String} order  
 */
function isSort(arr) {
	let f = true
	let index = 0
	while (index<arr.length) {
		if (arr[index] > arr[index + 1]) {
			f = false
			break
		}
		index++
	}
	console.log(f);	
	return f
}

module.exports = exports = {
	less,
	exch,
	time,
	random
}