/**
 * 生成指定长度的随机数 数组
 * @param {number} len 
 */
function random(len) {
	return Array.from({length:len},()=>Math.round(Math.random()*100))
}

module.exports = exports = random