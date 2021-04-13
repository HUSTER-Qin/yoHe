
function Parent() {
    
}

function Child() {
    Parent.call(this)

}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child





