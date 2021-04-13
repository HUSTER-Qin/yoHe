let str = "<姓名>=dfd <性别>=男"

let reg = /(<.+>=)/g

str.replace(reg, function (a, b, c) {
	console.log(a);
})
