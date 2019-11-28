const next = function (t) {
	let next = []
	next[1] = 1;
	let j = 1;
	let i = 0;
	while (i < t.length - 1) {
		if (j === 0 || t[i] === t[j]) {
			++i;
			++j;
			next[i] = j
		} else {
			j = next[j]
		}
	}
	return next
}


let str = 'ababaaaba'
console.log(next(str));



