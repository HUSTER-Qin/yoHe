
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
/**
 * 生成指定长度的随机数 数组
 * @param {number} len 
 */
function random(len) {
	return Array.from({length:len},()=>Math.round(Math.random()*100))
}
/**
 * v>w true
 * false
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
function time(fn, a) {
	console.time(fn.name)
	fn(a)
	console.timeEnd(fn.name)
}
let selectSort = function (arr) {
	let len = arr.length
	for (let i = 0; i < len; i++) {
		for (let j = i + 1; j < len; j++) {
			if (less(arr[i], arr[j])) {
				exch(arr, i, j)
			}
		}
	}
	return arr
}
let selectSort2 = function (arr) {
	let len = arr.length
	let index = 0 
	for (let i = 0; i < len; i++) {
		index = i
		for (let j = i + 1; j < len; j++) {
			if (less(arr[index], arr[j])) {
				index = j
			}
		}
		if (index != i) {
			exch(arr, i, index)
		}	
	}
	return arr
}
let insertSort = function (arr) {
	let len = arr.length
	for (let i = 1; i < len; i++) {
		for (let j = i; j > 0; j--) {
			if (less(arr[j-1], arr[j])) {
				exch(arr,j-1,j)
			}
		}	
	}
	return arr
}
let insertSort2 = function (arr) {
	let len = arr.length
	let cur = null
	let index = 0
	for (let i = 1; i < len; i++) {
		cur = arr[i]
		index = i
		for (let j = i; j > 0; j--) {
			if (less(arr[j - 1], cur)) {
				arr[j] = arr[j - 1]
				index = j-1
			}
		}
		if (index != i) {
			arr[index] = cur
		}
		
	}
	// console.log(arr);
	return arr
}

const shellSort = function (arr) {
	let len = arr.length
	for (let increment = Math.floor(len/2); increment >0; increment = Math.floor(increment/2)) {
		for (let i = increment; i < len; i++) {
				for (let j = i; j >increment; j-=increment) {
					if (less(arr[j-increment], arr[j])) {
						exch(arr,j-increment, j)
					} else {
						break;
					}
					console.log(arr[j-increment], arr[j],j,increment);
					
				}
		}

	}
	return arr
}

function shellSortInt( a) {
	for(var increment=1;increment>0;increment--){
		for(var i = increment;i<a.length;i++){
			var temp = a[i];
			var j;
			for(j=i;j>=increment;j-=increment){
				 if(a[j-increment]>temp){
					 a[j] = a[j-increment];
				 }else{
					 break;
				 }    
			 } 
			 a[j]=temp;
		}
	}
	// console.log(a);
	return a
}
function shellSort2(arr) {
	var len = arr.length;
	for (var h = Math.floor(len / 2); h > 0; h = Math.floor(h / 2)) {
		for (var i = h; i < len; i++) {
			for (var j = i; j >= 0 && less(arr[j - h], arr[j]); j -= h) {
				exch(arr, j - h, j)
			}
		}
	}
	return arr
}


let arr = [2, 5, 23, 9, 12, 99, 34, 2, 1, 77, 44]
console.log(arr);
arr = random(100000)

isSort(selectSort([...arr]))
time(selectSort, [...arr])

isSort(selectSort2([...arr]))
time(selectSort2, [...arr])

isSort(insertSort([...arr]))
time(insertSort, [...arr])

isSort(insertSort2([...arr]))
time(insertSort2, [...arr])


isSort(shellSort2([...arr]))
time(shellSort2, [...arr])


// isSort(shellSort([...arr]))
// time(shellSort, [...arr])

isSort(shellSortInt([...arr]))
time(shellSortInt, [...arr])

let shellInsertSort2 = function (arr) {
	let len = arr.length
	let cur = null
	let index = 0
	for (var h = Math.floor(len / 2); h > 0; h = Math.floor(h / 2)) {
		for (let i = h; i < len; i++) {
			cur = arr[i]
			index = i
			for (let j = i; j > 0&&less(arr[j - h], cur); j-=h) {
				// if () {
					arr[j] = arr[j - h]
					index = j-h
				// }
			}
			if (index != i) {
				arr[index] = cur
			}
			
		}
	}
	// console.log(arr);
	return arr
}
isSort(shellInsertSort2([...arr]))
time(shellInsertSort2, [...arr])