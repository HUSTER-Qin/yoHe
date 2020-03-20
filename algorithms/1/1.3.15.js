const { Queue } = require('../utils')

/**
 * 输出队列的 倒数第K个值； 队列至少有k个值以上
 * @param {} k
 */
const fun = function (k) {
  const queue = new Queue([1, 3, 2, 6, 9])
  console.log(queue)
  const len = queue.N
  let index = 0
  let node = null
  while (len - k >= index) {
    index++
    node = queue.dequeue()
  }
  return node.value
}
console.log(fun(3))
