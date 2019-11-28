const { Stack } = require('../utils')

const func = function (str) {
	let stack = new Stack()
	let index = 0
	let flag = true
	let mark = {
		")": "(",
		"}": "{",
		"]": "["
	}
	while (index < str.length) {
		if (mark[str[index]]) {
			if (stack.peek() !== mark[str[index]]) {
				flag = false
				break
			}
			stack.pop()
		}else {
			stack.push(str[index])
		}
		index++
	}
	return flag

}
let a = "[()]{}{[()()](})"
console.log(func(a));
