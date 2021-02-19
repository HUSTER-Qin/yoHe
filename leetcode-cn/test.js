
const person = {
    age: 21,
    name:'li'
}

const changeAge = (x = { ...person }) => x.age += 1

const changeAgeAndName = (x = { ...person }) => {
    x.age += 1;
    x.name = 's'
}

changeAge(person)
changeAgeAndName()
console.log((() => 0)());


function foo(a, b) {
    arguments[1] = 2
    console.log(a, b)
    console.log(arguments);
}
foo(1)

var myArr = ['foo', 'bar', 'baz']
myArr.length = 0
myArr.push('bin')
console.log(myArr)


let x = new URL('https://www.didichuxing.com/path?key1=a&key2=123&key_3=key2')

console.log(x.searchParams.get('key1'));