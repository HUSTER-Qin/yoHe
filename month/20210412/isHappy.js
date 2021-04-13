/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    if (n < 0 || n < 5 && n > 1) {
        return false
    }
    const square = function (n) {
        let sq = 0;
        while (n) {
            let temp = n % 10
            n = Math.floor(n / 10);
            sq +=temp*temp
        }
        return sq
    }

    while (n!==0) {
             if(n == 1){
                return true;
            }
          n = square(n);
    }
    return false
};

isHappy(19)