

Function.prototype.bind = function(context,args){
    let that = context
    var fNOP = function () {};

    var fBound = function (...args1) {
        return context.apply(this instanceof fNOP ? this : context, args.concat(args1));
    }
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}