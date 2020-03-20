class GameRole {
  constructor () {
    this.vit = 0
    this.atk = 0
    this.def = 0
    this.cache = []
  }

  stateDisplay () {
    console.log(`体力${this.vit}`)
    console.log(`攻击力${this.atk}`)
    console.log(`防御力${this.def}`)
  }

  getInitState () {
    this.vit = 100
    this.atk = 100
    this.def = 100
  }

  fight () {
    this.vit = this.vit - 20
    this.atk = this.atk - 20
    this.def = this.def - 20
  }

  setCache () {
    this.cache.push({
      vit: this.vit,
      atk: this.atk,
      def: this.def
    })
  }

  getCache () {
    const { vit, atk, def } = this.cache.pop()
    this.vit = vit
    this.atk = atk
    this.def = def
  }
}

const fr = new GameRole()

fr.getInitState()
fr.setCache()
fr.fight()
fr.stateDisplay()
fr.getCache()
fr.stateDisplay()
