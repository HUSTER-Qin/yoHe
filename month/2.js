function clone(target) {
    if (typeof target === 'object') {
        let cloneTarget = {};
        for (const key in target) {
            cloneTarget[key] = clone(target[key]);
        }
        return cloneTarget;
    } else {
        return target;
    }
};

let map = new Map()
function deepClone(target) {
    
    if (typeof target === 'object') {
        if (typeof target === "function") {
            return target
        } 
        if (map.get(target)) {
            return map.get(target)
        }
        let result = new Object()
        map.set(target, result)
        if (Array.isArray(target)) {
            result = []
        }
        for (const key in target) {
            if (Object.hasOwnProperty.call(target, key)) {
                result[key] = deepClone(target[key])
            }
        }
        return result
    }
    return target
}

const target = { field1: 1, field2: undefined, field3: { child: 'child' }, field4: [2, 4, 8], field5:()=>{}};
target.target = target;
console.log(deepClone(target));
function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index);
    } return array;
}
// function clone(target, map = new Map()) {
//     if (typeof target === 'object') {
//         let cloneTarget = Array.isArray(target) ? [] : {};
//         if (map.get(target)) { return map.get(target); }
//         map.set(target, cloneTarget);
//         for (const key in target) {
//             cloneTarget[key] =
//                 clone(target[key], map);
//         }
//         return cloneTarget;
//     } else {
//         return target;
//     }
// };


function myNew() {
    let arg = Array.prototype.slice.call(arguments)
    let Ctor = arg.shift()
    let obj = Object.create(Ctor.prototype)
    let result = Ctor.apply(obj, [...arg])
    return result instanceof Object ? result : obj
}
function a() {
   
}

function myNew(that, ...args) {
    const obj = Object.create(that.prototype)
    const res = that.call(obj, ...args)
    return (res instanceof Object&& res!==null) ? res : obj
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("Lee", 21);
const person2 = myNew(Person, "Lee", 21)