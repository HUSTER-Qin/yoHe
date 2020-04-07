class Person {
  constructor (name) {
    this.name = name
  }

  show () {
    console.log(`--装扮的${this.name}`)
  }
}

/**
 * 装扮类
 */
class WearSneakers {
  constructor (person) {
    this.person = null
  }

  // 装扮的 过程
  Decorator (person) {
    this.person = person
  }

  /**
 * 装扮内容
 */
  WearSneakers () {
    console.log('破球鞋')
  }

  show () {
    this.WearSneakers()
    this.person.show()
  }
}
class WearSuit {
  constructor () {
    this.person = null
  }

  Decorator (person) {
    this.person = person
  }

  show () {
    console.log('西装')
    this.person.show()
  }
}

const p = new Person('小黑')
const d = (new WearSneakers()).Decorator()
const w = (new WearSuit()).Decorator()

w.show()
