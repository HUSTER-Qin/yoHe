

var Sub = function (initValue) {
    // 请在此处编写你的代码，其他部分请勿修改，否则不记分。
    // begin
    this.value = initValue
    this.add = function (value) {
        let  v = typeof value ==='number' ? value : 0
        this.value += v
        return this
    }
    this.getResult = function () {
        return this.value
    }
    // end
};

let x = new Sub().add(100).add("50a").add(10).add(-30).getResult();
console.log(x);