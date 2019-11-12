
/**
 * 将一个数组分成几个同等长度的数组
 * @param {分割的原数组} array 
 * @param {每个子数组的长度} size 
 */
function sliceArray(array, size) {
    var result = [];
    for (var x = 0; x < Math.ceil(array.length / size); x++) {
        var start = x * size;
        var end = start + size;
        result.push(array.slice(start, end));
    }
    return result;
}  
/**
 * 计算单词个数
 * @param {文本字符串} value 
 */
function wordStatic(value){
	// 获取文本框对象
	if (value) {
		// 替换中文字符为空格
		value = value.replace(/[\u4e00-\u9fa5]+/g, " ");
		// 将换行符，前后空格不计算为单词数
		value = value.replace(/\n|\r|^\s+|\s+$/gi, "");
		// 多个空格替换成一个空格
		value = value.replace(/\s+/gi, " ");
		// 更新计数
		var length = 0;
		var match = value.match(/\s/g);
		if (match) {
			length = match.length + 1;
		} else if (value) {
			length = 1;
		}
		return length;
	}
}
/**
 * 两个大数相加
 * @param {数字字符串} l1 
 * @param {数字字符串} l2 
 */
const bigNumber = function (l1,l2) {
	l1 = l1.split("")
	l2 = l2.split("")
	let temp=0, res=""
	
	while (l1.length || l2.length || temp) {
		// ~~ 转成数字（undefined不会异常）
		temp += ~~l1.pop() + ~~l2.pop()
		res = (temp % 10) +res
		temp = temp >9
	}
	return res
}
// let a = bigNumber('3782647863278468012934670', '23784678091370408971329048718239749083');

/**
 * 生成uuid
 */
const uuid = function() {
	let i, random;
	let uuid = "";
  
	for (i = 0; i < 32; i++) {
	  random = (Math.random() * 16) | 0;
	  if (i === 8 || i === 12 || i === 16 || i === 20) {
		uuid += "-";
	  }
	  uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
	}
  
	return uuid;
};
  

/**
 * 阿拉伯数字 转中文大小写
 * @param {阿拉伯数字} num 
 */
let toChinesNum = function(num) {
	let changeNum = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"]; //changeNum[0] = "零"
	let unit = ["", "十", "百", "千", "万"];
	num = parseInt(num);
	let getWan = temp => {
	  let strArr = temp
		.toString()
		.split("")
		.reverse();
	  let newNum = "";
	  for (var i = 0; i < strArr.length; i++) {
		newNum =
		  (i == 0 && strArr[i] == 0
			? ""
			: i > 0 && strArr[i] == 0 && strArr[i - 1] == 0
			? ""
			: changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i])) +
		  newNum;
	  }
	  return newNum;
	};
	let overWan = Math.floor(num / 10000);
	let noWan = num % 10000;
	if (noWan.toString().length < 4) noWan = "0" + noWan;
	return overWan ? getWan(overWan) + "万" + getWan(noWan) : getWan(num);
};
  
/**
 * 指定光标位置
 * @param {元素} elem 
 * @param {光标位置} index 
 */
function  setCursorPosition (elem, index) {
	console.log(elem.setSelectionRange)
	var val = elem.value
	var len = val.length
	// 超过文本长度直接返回
	if (len < index) return
	setTimeout(() => {
	  elem.focus()
	  if (elem.setSelectionRange) { // 标准浏览器
		elem.setSelectionRange(index, index)
	  } else { // IE9-
		var range = elem.createTextRange()
		range.moveStart('character', -len)
		range.moveEnd('character', -len)
		range.moveStart('character', index)
		range.moveEnd('character', 0)
		range.select()
	  }
	}, 10)
  }