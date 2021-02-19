
// 统计 html  标签 以 B 开头的数量

// const tags = document.querySelector('*')

// const value = [...tags].filter(item => item.tagName.startsWith('B'))

// 替换日期格式

let reg = /(\d{2})\.(\d{2})\/(\d{4})/

console.log("10.24/2017".replace(reg, '$3-$1-$2'));
