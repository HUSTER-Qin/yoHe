function Person() {}
var person = new Person();
Person.prototype = {};
console.log(Person.prototype.constructor === Person); // false
console.log(person.constructor === Person); // true
person.__proto__ = {};
console.log(person.constructor === Person); // false

