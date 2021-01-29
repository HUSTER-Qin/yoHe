

function Parent() {
    this.name = 'kevin'
}

Parent.prototype.getName = function () {
    console.log(this.name);
}


function Child() {
    
}

Child.prototype = new Parent()

var child = new Child()

console.log(child.getName());