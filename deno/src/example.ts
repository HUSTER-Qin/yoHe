const apiList = Object.getOwnPropertyNames(window)

console.log(`Supported global API [count: ${apiList.length}]: \r\n`);
console.log(`${apiList.join(',\r\n')}`);

console.log(Deno.build);
