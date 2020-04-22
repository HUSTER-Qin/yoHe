
/**
 * 将一个数组分成几个同等长度的数组
 * @param {分割的原数组} array
 * @param {每个子数组的长度} size
 */
function sliceArray (array, size) {
  const result = [];
  for (let x = 0; x < Math.ceil(array.length / size); x++) {
    const start = x * size;
    const end = start + size;
    result.push(array.slice(start, end));
  }
  return result;
}
/**
 * 计算单词个数
 * @param {文本字符串} value
 */
function wordStatic (value) {
  // 获取文本框对象
  if (value) {
    // 替换中文字符为空格
    value = value.replace(/[\u4e00-\u9fa5]+/g, ' ');
    // 将换行符，前后空格不计算为单词数
    value = value.replace(/\n|\r|^\s+|\s+$/gi, '');
    // 多个空格替换成一个空格
    value = value.replace(/\s+/gi, ' ');
    // 更新计数
    let length = 0;
    const match = value.match(/\s/g);
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
const bignumber = function (l1, l2) {
  l1 = l1.split('');
  l2 = l2.split('');
  let temp = 0; let
    res = '';

  while (l1.length || l2.length || temp) {
    // ~~ 转成数字（undefined不会异常）
    temp += ~~l1.pop() + ~~l2.pop();
    res = (temp % 10) + res;
    temp = temp > 9;
  }
  return res;
};
// let a = bignumber('3782647863278468012934670', '23784678091370408971329048718239749083');

/**
 * 生成uuid
 */
const uuid = function () {
  let random = 0;
  let uuidVal = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 32; i++) {
    random = (Math.random() * 16) | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) { uuidVal += '-'; }
    // eslint-disable-next-line no-nested-ternary
    uuidVal += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
  }
  return uuidVal;
};
const generateUUID = function () {
  var d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now(); //use high-precision timer if available
  }
  var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}



/**
 * 阿拉伯数字 转中文大小写
 * @param {阿拉伯数字} num
 */
const toChinesnum = function (num) {
  for (var i = num.length - 1; i >= 0; i--) {
    num = num.replace(",", "")//替换num中的“,”
    num = num.replace(" ", "")//替换num中的空格
  }
  if (isNaN(num)) { //验证输入的字符是否为数字
    //alert("请检查小写金额是否正确");
    return;
  }
  //字符处理完毕后开始转换，采用前后两部分分别转换
  var part = String(num).split(".");
  var newchar = "";
  //小数点前进行转化
  for (i = part[0].length - 1; i >= 0; i--) {
    if (part[0].length > 10) {
      //alert("位数过大，无法计算");
      return "";
    }//若数量超过拾亿单位，提示
    var tmpnewchar = ""
    var perchar = part[0].charAt(i);
    switch (perchar) {
      case "0": tmpnewchar = "零" + tmpnewchar; break;
      case "1": tmpnewchar = "一" + tmpnewchar; break;
      case "2": tmpnewchar = "二" + tmpnewchar; break;
      case "3": tmpnewchar = "三" + tmpnewchar; break;
      case "4": tmpnewchar = "四" + tmpnewchar; break;
      case "5": tmpnewchar = "五" + tmpnewchar; break;
      case "6": tmpnewchar = "六" + tmpnewchar; break;
      case "7": tmpnewchar = "七" + tmpnewchar; break;
      case "8": tmpnewchar = "八" + tmpnewchar; break;
      case "9": tmpnewchar = "九" + tmpnewchar; break;
    }
    switch (part[0].length - i - 1) {
      case 0: tmpnewchar = tmpnewchar; break;
      case 1: if (perchar != 0) tmpnewchar = tmpnewchar + "十"; break;
      case 2: if (perchar != 0) tmpnewchar = tmpnewchar + "百"; break;
      case 3: if (perchar != 0) tmpnewchar = tmpnewchar + "千"; break;
      case 4: tmpnewchar = tmpnewchar + "万"; break;
      case 5: if (perchar != 0) tmpnewchar = tmpnewchar + "十"; break;
      case 6: if (perchar != 0) tmpnewchar = tmpnewchar + "百"; break;
      case 7: if (perchar != 0) tmpnewchar = tmpnewchar + "千"; break;
      case 8: tmpnewchar = tmpnewchar + "亿"; break;
      case 9: tmpnewchar = tmpnewchar + "十"; break;
    }
    newchar = tmpnewchar + newchar;
  }
  //替换所有无用汉字，直到没有此类无用的数字为止
  while (newchar.search("零零") != -1 || newchar.search("零亿") != -1 || newchar.search("亿万") != -1 || newchar.search("零万") != -1) {
    newchar = newchar.replace("零亿", "亿");
    newchar = newchar.replace("亿万", "亿");
    newchar = newchar.replace("零万", "万");
    newchar = newchar.replace("零零", "零");
  }
  //替换以“一十”开头的，为“十”
  if (newchar.indexOf("一十") == 0) {
    newchar = newchar.substr(1);
  }
  //替换以“零”结尾的，为“”
  if (newchar.lastIndexOf("零") == newchar.length - 1) {
    newchar = newchar.substr(0, newchar.length - 1);
  }
  return newchar;
};

/**
 * 指定光标位置
 * @param {元素} elem
 * @param {光标位置} index
 */
function setCursorPosition (elem, index) {
  console.log(elem.setSelectionRange);
  const val = elem.value;
  const len = val.length;
  // 超过文本长度直接返回
  if (len < index) return;
  setTimeout(() => {
    elem.focus(); if (elem.setSelectionRange) { // 标准浏览器
      elem.setSelectionRange(index, index);
    } else { // IE9-
      const range = elem.createTextRange();
      range.moveStart('character', -len);
      range.moveEnd('character', -len);
      range.moveStart('character', index);
      range.moveEnd('character', 0);
      range.select();
    }
  }, 10);
}

//函数防抖
function debounce (fn, interval = 300) {
  let timeout = null;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, interval);
  };
}

// 函数节流
function throttle (fn, interval = 300) {
  let canRun = true;
  return function () {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      canRun = true;
    }, interval);
  };
}

/**
 * 获取字符长度【区分双字节字符】
 * 将str中的双字节字符转换到两个单字节 计算长度
 * @param {*} str 
 */
function strLen (str) {
  return str.replace(/[^\x00-\xff]/g, "**").length
}