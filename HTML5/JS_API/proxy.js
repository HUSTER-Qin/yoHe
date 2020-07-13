
// let target = {
// 	a:1
// }

const { strict } = require("assert");

// let px = new Proxy(target, {
// 	ownKeys (obj) {
// 		console.log('keys');
// 		return Reflect.ownKeys(obj)
// 	}
// })

// for (const key of Object.keys(px)) {
// 	console.log(key);
	
// }

// let t = {}
// let p = new Proxy(t, {})

// p.name = 'hello proxy'

// console.log(p); // { name: 'hello proxy' }
// console.log(t); // { name: 'hello proxy' }

// let target = {
// 	name:'target'
// }


// let proxy = new Proxy(target, {
// 	set (trapTarget, key, value, receiver) {
// 		if (!trapTarget.hasOwnProperty(key)) {
// 			if (isNaN(value)) {
// 				throw new TypeError('属性必须是数字')
// 			}
// 		}
// 		return Reflect.set(trapTarget, key, value, receiver)
// 	}
// })
//
// proxy.count = 1
// console.log(target.count); // 1
// console.log(proxy.count); // 1
//
// proxy.anotherName = 'proxy' // TypeError: 属性必须是数字


// let proxy = new Proxy({},{
// 	get(trapTarget, key, receiver){
// 		if(!(key in receiver)){
// 			throw  new TypeError(`属性${key}不存在`)
// 		}
// 		return Reflect.get(trapTarget,key,receiver)
// 	}
// })
//
// proxy.name = 'proxy'
// console.log(proxy.name) // proxy
// proxy.nam  //  TypeError: 属性nam不存在

// let target = {
// 	value:42,
// 	name: 'target'
// }
// let porxy = new Proxy(target,{
// 	has(trapTarget,key){
// 		if(key==='value'){
// 			return false
// 		}
// 		return Reflect.has(trapTarget,key)
// 	}
// })
// console.log('value' in porxy) // false
// console.log('toString' in porxy) // true
// console.log('name' in porxy) // true

// let target = {
// 	name:'target',
// 	value:42
// }

// Object.defineProperty(target,'name',{configurable:false})
// console.log('value' in target);
// console.log(delete target.value);
// console.log('value' in target);


// console.log('name' in target);
// // 严格模式  'use strict';
// console.log(delete target.name); // TypeError: Cannot delete property 'name' of #<Object>


let target = {
	name:'target',
	value:42
}

let proxy = new Proxy(target, {
	deleteProperty(traptarget, key){
		if(key==='value'){
			return false
		}
		return Reflect.deleteProperty(traptarget,key)
	}
})

console.log('value' in proxy); // true
console.log(delete proxy.value); // false
console.log('value' in proxy); // true



