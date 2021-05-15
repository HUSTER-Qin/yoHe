// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var subsets = function (nums) {
// 	 let result = []
// 	let target = []
// 	 const help = function (index) {
// 		 if (index <= nums.length) {
// 			 console.log(target);
// 			result.push([...target])
// 		 }
// 		//  if(target.length===nums.length) return
// 			for (let i = index; i < nums.length; i++) {
// 				target.push(nums[i])
// 				help(i + 1)
// 				target.pop()	
// 			} 
// 	 }
// 	help(0)
// 	return result;
// };

var subsets = function(nums) {
    let result = []
    let target = []

    const help = function(nums,index){
        if(target.length<= nums.length){
            result.push([...target])
		}
		if(target.length===nums.length) return
        for(let i = index; i< nums.length; i++){
            target.push(nums[i])
            help(nums,i+1)
            target.pop()
        }
    }
	help(nums,0)
	console.log(result);
    return result;
};
subsets([1,2,3])