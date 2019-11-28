const readline = require('readline');
/**
 * 命令行输入
 * @param {*} len 输入个数
 * @param {*} callback 输入结束执行的回调
 */
const read = function (len=0,callback) {
	return new Promise((resolve,reject) => {
		let a = []
		 readline.createInterface({
			input: process.stdin,
			output: process.stdout
		}).on('line', function (temp) {
			a.push(temp)
			if (a.length === len ) {
				this.close(temp)
			}
		}).on('close', function () {
			callback(a)
			process.exit(0);
		});
	})

}

module.exports = read
// read(5, function (err, result) {
// 	console.log(err, result);
	
// })