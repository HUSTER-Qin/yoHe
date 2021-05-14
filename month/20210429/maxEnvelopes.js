/**
 * @param {number[][]} envelopes
 * @return {number}
 * envelopes = [[5,4],[6,4],[6,7],[2,3]]
 */
 var maxEnvelopes = function(envelopes) {
    let arr = envelopes.sort((a,b)=>{
        return a[0]-b[0]
    })
    let len = arr.length
    let dp = Array.from({length:arr.length},()=>1)
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if(arr[i][1]>arr[j][1]&&arr[i][0]!=arr[j][0]){
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        } 
    }
    console.log(dp);
    console.log(arr);
    return Math.max(...dp)
};
maxEnvelopes([[7,8],[12,16],[12,5],[1,8],[4,19],[3,15],[4,10],[9,16]])