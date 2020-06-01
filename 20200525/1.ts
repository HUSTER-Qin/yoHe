// 1. 给定一个数组和一个正整数N，求一个和小于N的最长连续子数组



function minChildArray(arr: number[], target: number) {
	// 小于一个 判断大小返回
	if (arr.length === 1) return arr[0] < target ? arr[0] : []
	const dp = [[arr[0]]] // 记录第一个
	for (let i = 1; i < arr.length; i++) {
		const local = arr[i]
		const lastDep = dp[i - 1] // 获取前一个

		let sum = lastDep.reduce((a:number,b:number)=> a+b,0) // 获取当前的和

		if(local+sum< target && lastDep[lastDep.length-1]===arr[i-1]){
			dp[i] = [...lastDep, local]
		}else{
			if(local< target){
				let newArr = []
				let j = i
				let newItem = arr[j]
				let targetItem = target
				while (j>=0 && newItem<= targetItem) {
					targetItem -= newItem
					newArr.unshift(newItem)
					j--
					newItem = arr[j]
				} 
				dp[i] = dp[i-1].length > newArr.length ? dp[i-1] : newArr
			}else{
				dp[i] = dp[i-1]
			}
		}

	}
	return dp
}
let array: number[] = [0, 1, 3, -1, 4, 6, -2]
console.log(minChildArray(array, 10));
