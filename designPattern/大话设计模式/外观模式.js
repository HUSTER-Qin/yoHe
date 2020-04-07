class SubSys1 {
  methodOne () {
    console.log('子系统1')
  }
}
class SubSys2 {
  methodOne () {
    console.log('子系统2')
  }
}
class SubSys3 {
  methodOne () {
    console.log('子系统3')
  }
}

class Facade {
  constructor () {
    this.one = new SubSys1()
    this.two = new SubSys2()
    this.three = new SubSys3()
  }

  methodA () {
    console.log('方法组一\n')

    this.one.methodOne()
    this.two.methodOne()
  }

  methodB () {
    console.log('方法组二\n')

    this.two.methodOne()
    this.three.methodOne()
  }
}

const face = new Facade()

face.methodA()
face.methodB()
