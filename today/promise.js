const promise = new Promise((resolve, reject) => {
	console.log(1)
	await promise
	resolve(true)
	console.log(2)
})
// promise.then(() => {
// 	console.log(3)
// })
console.log(4)

// 1
// 4
// 3
// 2