

function all(arr) {
  let result = []
  let count = 0
    return new Promise((resolve, reject) => {
         for (const index of Object.keys(arr)) {
           Promise.resolve(arr[index])
             .then((res) => {
               count++
               result[index] = res;
               if (count === arr.length) {
                 resolve(result);
               }
             })
             .catch((err) => {
              return reject(err);

             });
         }
    });
   
}

function allSettled(arr) {
  let result = []
  let count = 0
  return new Promise((resolve, reject) => {
    for (const index of Object.keys(arr)) {
      Promise.resolve(arr[index]).then(res => {
        result[index] = {
          status: 'fulfilled',
          value:res
        }
      }).catch(err => {
        result[index] = {
          status: 'rejected',
          reason: err
        }
      }).finally(() => {
        count++
        if (count === arr.length) {
          resolve(result)
        }
      })
    }
  })
}

function test(text = "666", time = 1000) {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(text)
    }, time)
  })
}

let p1 = test("p1", 3000)
let p2 = test("p2", 1000)
let p3 = test("p3", 2000)
let pArr = [p1, p2, p3]

function race(arr) {
  return new Promise((resolve, reject) => {
    for (const value of arr) {
      Promise.resolve(value).then(resolve).catch(reject)
    }
  })
}

allSettled(pArr).then(res => {
  console.log(res);
})

