
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
console.log((()=>0)());