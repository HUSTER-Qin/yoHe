
class Play {
  constructor (name) {
    this.name = name
  }

  attack () {
    console.log(`${this.name} come on`)
  }
}

class Target {
  constructor (name) {
    this.name = name
  }

  '进攻' () {
    console.log(`${this.name}进攻`)
  }
}

class Translate {
  constructor (ob) {
    this.current = ob
  }

  attack () {
    this.current['进攻']()
  }
}

const play = new Play('外国人')

play.attack()

const t = new Translate(new Target('被翻译者'))
t.attack()
