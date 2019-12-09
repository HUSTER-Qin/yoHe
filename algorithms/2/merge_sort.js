/**
 * 
 * @param {*} arr 
 * @param {*} lo 
 * @param {*} mid 
 * @param {*} hi 
 */
function merge(a,lo,mid,hi) {
	let j = mid + 1
	let aux = []
	for (let index = lo; index <= hi; index++) {
		aux[index] = a[index]	
	}
	// console.log(aux)
	for (let k = lo; k <= hi; k++) {
		if (lo > mid) {
			console.log(lo,mid,'lo-mid')
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
function sort(a, lo, hi, label) {
	
	
	if (hi <= lo) return
	// console.log(lo,hi,label, 'lo-hi');
	let mid = Math.floor((hi + lo) / 2)
	sort(a, lo, mid,'left')
	sort(a, mid + 1, hi,'right')
	merge(a, lo, mid, hi)

}
let a = ['S', 'O', "R", "T", "E", "X", "A", "M", "P", "L", "E"]
// a = tools.random(100000)
sort(a, 0, a.length - 1,'root')


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