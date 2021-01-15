
function twoSum(arr, target) {
	let map = new Map()
	for (let i = 0; i < arr.length; i++) {
	
		let temp = target - arr[i]
		if (map.has(temp)) {
			return [map.get(temp), i]
		} else {
			map.set(arr[i],i)
		}
		
	}
}

console.log(twoSum([2, 7, 11, 15], 9));


function isUrl(url) {
	try {
		new URL(url);
		return true;
	}catch(err){
  return false;
	}
}

console.log(isUrl('ftp://a.com'));

function convert(arr) {
	
}