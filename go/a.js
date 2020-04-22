let str = JSON.stringify({"a":"1"});
console.log(str)
var buff = new TextEncoder().encode(str);
websocket.send(codeBuffer(buff));
console.log("发送数据")
