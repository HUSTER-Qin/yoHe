
// while b比for 更快
// 除了forin 有明显的慢 其他几个都差不多（forin 会遍历原型对象）
function testWhile(a) {
	let index = 0
	while (index<a.length) {
		index++
	}
}
function testFor(a) {
	let j = 0
	for (let index = 0; index < a.length; index++) {
		j++
	}
}

function time(fun, a) {
	console.time(fun.name)
	fun(a)
	console.timeEnd(fun.name)
}

function random(len) {
	return Array.from({length:len},()=>Math.round(Math.random()*100))
}
let g = Random(10000000)
time(testWhile, g) // testWhile: 7.047ms
time(testFor, g) // testFor: 10.110ms

