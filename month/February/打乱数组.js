
class Solution{
    constructor(nums) {
        this.origin = [...nums]
        this.shuffleNums = [...nums]
    }
    reset() {
        return this.origin
    }
    shuffle() {
        let len = this.shuffleNums.length - 1
        while (len>=0) {
            let random = Math.floor(Math.random() * this.shuffleNums.length)
            [nums[len], nums[random]] = [nums[random],nums[len]]
            len--
        }
        return this.shuffleNums
    }
}