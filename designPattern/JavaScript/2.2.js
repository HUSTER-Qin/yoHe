
function Super (name) {
  this.name = name
  this.list = [1, 2, 3]
}
Super.prototype.display = function () {
  console.log(this.name)
}

function Sub (name) {
  Super.call(this, name)
}

// Sub.prototype = new Super()
inherit(Sub, Super)
Sub.prototype.display = function () {
  console.log(this.name, this.list)
}

Sub.prototype.change = function () {
  this.list = [12]
}

function inherit (sub, super1) {
  function F () { }
  F.prototype = super1.prototype
  sub.prototype = new F()
  sub.constructor = sub
}

const sub = new Sub('sub')

sub.display()
console.log(Sub instanceof Super)
const sub2 = new Sub('sub2')
sub2.change()
sub.display()
sub2.display()
