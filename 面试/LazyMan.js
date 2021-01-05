
class LazyManClass{
    constructor(name) {
        this.name = name
        this.stack = []
        console.log(`Hi I am ${this.name}`)
        setTimeout(()=>{
            this.next()
        },0)

    }
    next(){
        let a =    this.stack.shift()
        a&&a()
    }
    sleep(time){
       this.stack.push(()=>{
           setTimeout(()=>{
               console.log(`等待了${time}秒`)
               this.next()
           },time)
       })
        return this;
    }
    eat(food){
       this.stack.push(()=>{
           console.log(`I am eating ${food}`)
           this.next()
       })
        return this;
    }
    sleepFirst(time){
       this.stack.unshift(()=>{
           setTimeout(()=>{
               console.log(`等待了${time}秒`)
               this.next()
           },time)
       })
        return this;
    }
}
function LazyMan(name){
    return new LazyManClass(name)
}

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');