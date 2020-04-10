
function inheritObject (subClass, SuperClass) {
  function F () { }
  F.prototype = SuperClass.prototype
  subClass.prototype = new F()
  subClass.constructor = subClass
}

function Student (props) {
  this.name = props.name || 'Unnamed'
}

Student.prototype.hello = function () {
  alert('Hello, ' + this.name + '!')
}

function PrimaryStudent (props) {
  Student.call(this, props)
  this.grade = props.grade || 1
}

// 实现原型继承链:
inheritObject(PrimaryStudent, Student)

// 绑定其他方法到PrimaryStudent原型:
PrimaryStudent.prototype.getGrade = function () {
  return this.grade
}
