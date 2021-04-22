
let map = new Map()
function deepClone (target) {
    
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