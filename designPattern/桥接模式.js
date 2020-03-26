
class Implementor {
  operation () {

  }
}

class ImplementorA extends Implementor {
  operation () {
    console.log('具体A方法的执行')
  }
}

class ImplementorB extends Implementor {
  operation () {
    console.log('具体B方法的执行')
  }
}

class Abstraction {
  constructor () {
    this.implementor = null
  }

  setImplementor (implementor) {
    this.implementor = implementor
  }

  operation () {
    this.implementor.operation()
  }
}

class RefineAbstraction extends Abstraction {
  operation () {
    this.implementor.operation()
  }
}

const ab = new RefineAbstraction()

ab.setImplementor(new ImplementorB())
ab.operation()

ab.setImplementor(new ImplementorA())
ab.operation()
