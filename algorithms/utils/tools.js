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
	fn(a)
	console.timeEnd(fn.name)
}
/**
 * 生成指定长度的随机数 数组
 * @param {number} len 
 */
function random(len) {
	return Array.from({length:len},()=>Math.round(Math.random()*100))
}
module.exports = exports = {
	less,
	exch,
	time,
	random
}