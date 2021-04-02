class Node {
    constructor(value) {
        this.val = value
        this.left = null
        this.next = null
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        if (!this.root) {
            this.root = new Node(val)
            return
        }
        let current = this.root
        while (current) {
            if (val < current.val) {     
                if (!current.left) {
                    current.left = new Node(val)
                    return
                }
                current = current.left
            } else {
               
                if (!current.next) {
                    current.next = new Node(val)
                    return
                }
                current = current.next
            }
        }
    }
}


module.exports = {
    Tree
}