
function subarraySum(nums: number[], k: number): number {
    let ans: number = 0
    let sums: number[] = [0]
    for (let i = 0; i < nums.length; i++) {
        sums[i+1] = sums[i]+ nums[i]
    }   
   for (let i = 1; i < sums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (sums[i] - nums[j] === k) {
                ans++
            }            
        }       
   }
    console.log(ans);
    
    return ans;
    
}

let ns = [3, 5, 2 ,-2, 4, 1]
subarraySum(ns,8)