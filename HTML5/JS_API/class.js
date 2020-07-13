const a =class {
  constructor (html) {
    this.html = html
  }

  sayName () {
    console.log(this.html)
  }

  get html () {
    return this.html
  }

  set html (val) {
    this.html = val
  }
}

const a1 = Object.getOwnPropertyDescriptor(a.prototype, 'html')

console.log('get' in a1)
