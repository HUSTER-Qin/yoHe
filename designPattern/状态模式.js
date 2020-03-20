class Work {
  constructor (state) {
    this.current = state
    this.hour = 0
    this.finish = 20
  }

  setState (state) {
    this.current = state
  }

  writeProgram () {
    this.current.writeProgram(this)
  }
}

class ConcreteStateA {
  writeProgram (context) {
    if (context.hour < 12) {
      console.log('%s精神饱满', context.hour)
    } else {
      context.setState(new ConcreteStateB())
      context.writeProgram()
    }
  }
}

class ConcreteStateB {
  writeProgram (context) {
    if (context.hour > 12) {
      console.log('%s 中午了', context.hour)
    } else {
      // context.setState(new NooState())
      // context.writeProgram()
      console.log('睡觉了')
    }
  }
}

const x = new Work(new ConcreteStateA())
x.hour = 13
x.writeProgram()
x.hour = 0
x.writeProgram()
