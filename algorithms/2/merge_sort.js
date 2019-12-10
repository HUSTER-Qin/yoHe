let { tools } = require('../utils')
/**
 * 
 * @param {*} arr 
 * @param {*} lo 
 * @param {*} mid 
 * @param {*} hi 
 */
function merge(a, lo, mid, hi) {
	let j = mid + 1
	let aux = []
	for (let index = lo; index <= hi; index++) {
		aux[index] = a[index]
	}
	// console.log(aux)
	for (let k = lo; k <= hi; k++) {
		if (lo > mid) {
			console.log(lo, mid, 'lo-mid')
			a[k] = aux[j++]
		} else if (j > hi) {
			a[k] = aux[lo++]
		} else if (aux[j] < aux[lo]) {
			a[k] = aux[j++]
		} else {
			a[k] = aux[lo++]
		}

	}
	console.log(a);
	console.log('===');


}
function merge2(a, lo, mid, hi) {
	let i = lo
	let j = mid+1
	let m = mid
	let n = hi
	let k = 0
	let aux = []
	// 由于两个数列都已经有序，我们只需从两个数列的低位轮番拿出各自最小的数来PK就就行了。
	while (i <= m && j <= n) {
		if (a[i] > a[j]) {
			aux[k++] = a[j++]
		} else {
			aux[k++] = a[i++]
		}
	}
	// 将未比较的元素插入到临时数组
	while (i <= m) {
		aux[k++] = a[i++]
	}
	while (j <= n) {
		aux[k++] = a[j++]
	}
	// 将排序好的序列 插入到原始序列
	for (let index = 0; index < k; index++) {
		a[lo + index] = aux[index]

	}
	console.log(a);
	
}
function sort(a, lo, hi, label) {


	if (hi <= lo) return
	// console.log(lo,hi,label, 'lo-hi');
	let mid = Math.floor((hi + lo) / 2)
	sort(a, lo, mid)
	sort(a, mid + 1, hi)
	merge2(a, lo, mid, hi)

}
// let a = ['S', 'O', "R", "T", "E", "X", "A", "M", "P", "L", "E"]
// a = tools.random(10)
let a = [63, 9, 19, 42, 95, 65, 79, 19, 87, 77]
console.log(a);

sort(a, 0, a.length - 1)
console.log(a);

// function merge2(a,lo,mid,hi) {	
// 	let aux = []
// 	for (let index = lo; index <=hi; index++) {
// 		aux[index] = a[index]	
// 	}
// 	for (let k = lo; k <= hi; k++) {

// 	}

// }

// function sort2(a, lo, hi) {
// 	let mid = Math.floor((lo + hi) / 2)
// 	sort(a, lo, mid)
// 	sort(a, mid + 1, hi)
// 	merge(a,lo,mid,hi)
// }
// sort2(a,0,a.length-1)