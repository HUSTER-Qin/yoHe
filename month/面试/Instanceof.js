Object.prototype.fakeInstanceOf = function(constructor) {
    let obj = this;
    while (true) {
        if (obj.__proto__ === null) {
            return false;
        }
        if (obj.__proto__ === constructor.prototype) {
            return true;
        }
        obj = obj.__proto__;
    }
}