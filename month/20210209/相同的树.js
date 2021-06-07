

function isSameTree(root1, root2) {
    if (!root1 && !root2) return true
    if (!root1 || !root2) return false
    
    if (root1.val !== root2.val) {
        return false
    }
  return  isSameTree(root1.left, root2, left) && isSameTree(root1.right, root2.right)
    
}


function isSymmetric(root1, root2) {
    if (!root1 && !root2) return true
    if (!root1 || !root2) return false

    if (root1.val !== root2.val) {
        return false
    }

   return isSymmetric(root1.left, root2.right) && isSymmetric(root1.right, root2.left)

}


function invertTree(root) {
    if (!root) return null
    
    let left = invertTree(root.left)
    let right = invertTree(root.right)

    root.left = right
    root.right = left
    return root
}

function fib(n) {
    if (n <=1) return n
    return fib(n-1)+ fib(n-2)
}

let cache = [0,1]

function fib(n) {
    return typeof cache[n] === 'number' ? cache[n] : cache[n]=fib(n-1)+ fib(n-2)
}



let a = [1, 3, 8, 10, null, null, null]
let b = [2, 5, 9]

function mergeArray(a,b,m,n) {
    let len = m+n- 1;
    m = m - 1
    n= n-1

    while (m>=0&& n>=0) {
        a[len--] = a[m] > b[n] ? a[m--] : b[n--]
    }

    while (n>=0) {
        a[len--] = a[j--]
    }
}
mergeArray(a, b, 4, 3)
console.log(a);

