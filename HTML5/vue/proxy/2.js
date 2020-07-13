let obId = 0
let pendingDerivation = null

const dep = {
  event: {},
  on(key, fn) {
    if (!this.event[key]) {
      this.event[key] = new Set()
    }
    this.event[key].add(fn)
  },
  emit(key, args) {
    const fns = new WeakSet()
    const events = this.event[key]
    if (!events) return
    events.forEach(fn => {
      if (fns.has(fn)) return
      fns.add(fn)
      fn(args)
    })
  }
}

const autoRun = fn => {
  pendingDerivation = fn
  fn()
  pendingDerivation = null
}

const handler = {
  set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver)
    dep.emit(target.__obId + key)
    return result
  },
  get(target, key, value, receiver) {
    if (target && key && pendingDerivation) {
      dep.on(target.__obId + key, pendingDerivation)
    }
    return Reflect.get(target, key, value, receiver)
  }
}

const observable = obj => {
  obj.__obId = `__obId${++obId}__`
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value !== 'object' || value === null) return
    obj[key] = observable(value)
  })
  return new Proxy(obj, handler)
}

const computed = fn => {
  return {
    computed: fn,
    [Symbol.toPrimitive]() {
      return this.computed()
    }
  }
}

// demo
const todoObs = observable({
  todo: [],
  get all() {
    return this.todo.length
  }
})

const compuFinish = computed(() => {
  return todoObs.todo.filter(t => t.finished).length
})

const print = () => {
  const all = todoObs.all
  console.log(`print: finish ${compuFinish}/${all}`)
}

autoRun(print)

todoObs.todo.push({
  finished: false
})

todoObs.todo.push({
  finished: true
})

// print: finish 0/0
// print: finish 0/1
// print: finish 1/2