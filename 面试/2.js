

const numToReverseStr = num => {

    if ('number' !== typeof num) throw '输入需为int型整数';

    if (!Math.floor(num / 10)) return num.toString();

    return (num % 10).toString() + numToReverseStr(Math.floor(num / 10));
}