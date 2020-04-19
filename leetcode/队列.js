/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.list =[]
    this.max = k-1
    this.len = -1
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()){
			return false
        }
    this.list.push(value)
    this.len++
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()){
        return false
    }
    
    this.len--
    return this.list.shift()
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
 if(this.isEmpty()){
        return -1
    }
    
    this.len--
    return this.list.shift()
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()){
        return -1
	}
	console.log(this.len);
	
    return this.list[this.len]
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function(	) {
    return this.len===-1
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.len===this.max
};


//  Your MyCircularQueue object will be instantiated and called as such:
  var obj = new MyCircularQueue(3)
  var param_1 = obj.enQueue(7)
  var param_2 = obj.deQueue()
  var param_3 = obj.Front()
 var param_4 = obj.Rear()
 var param_5 = obj.isEmpty()
 var param_6 = obj.isFull()


