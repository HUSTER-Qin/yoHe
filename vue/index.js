
const Observer = require('./Observer');
const Watcher = require('./Watcher');


let man = {
	height: 180,
	weight: 70,
	wealth:1000
}

let ob = new Observer(man)

// let w = new Watcher(ob, 'strength', () => {
// 	let { height, weight } = ob
// 	if (height > 160 && weight > 70) return 'strong'
// 	return 'weak'
// }, () => {
// 	console.log(`i am so ${ob.strength} !`)
		
// })

// ob.strength
// ob.height = 20
// console.log('===');

new Watcher(ob, 'isGreat', () => {
	let {height, weight, wealth} = ob
	if (height > 180 && weight > 70 && wealth > 100000) return 'Great!'
	return 'not good enough ...'
  }, () => {
	console.log(`they say i am ${ob.isGreat}`)
})
  
ob.isGreat

ob.height = 10

