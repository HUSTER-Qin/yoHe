
class Component {
  constructor (name) {
    this.name = name
  }

  display (depth) {
    console.log(Array.from({ length: depth }, () => '-').join('') + this.name)
  }
}

class Composite extends Component {
  constructor (name) {
    super()
    this.name = name = name
    this.list = new Set()
  }

  add (c) {
    this.list.add(c)
  }

  remove (c) {
    this.list.delete(c)
  }

  display (depth) {
    console.log(Array.from({ length: depth }, () => '-').join('') + this.name)
    this.list.forEach(item => {
      item.display(depth + 2)
    })
  }
}

class Leaf extends Component {

}

const root = new Composite('root')

root.add(new Leaf('leaf a'))
root.add(new Leaf('leaf b'))

const comp = new Composite('Composite X')

comp.add(new Leaf('leaf Xa'))
comp.add(new Leaf('leaf Xb'))

root.add(comp)

const leaf = new Leaf('Level D')
root.add(leaf)
// debugger
root.display(1)
root.remove(leaf)
root.display(1)
