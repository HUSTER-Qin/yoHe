class Subject {
}

class Math1 extends Subject {
  say () {
    console.log('Math')
  }
}

class Proxy extends Subject {
  constructor () {
    super()
    this.real = null
  }

  say () {
    if (this.real === null) {
      this.real = new Math1()
    }
    this.real.say()
  }
}

const pro = new Proxy()

pro.say()
