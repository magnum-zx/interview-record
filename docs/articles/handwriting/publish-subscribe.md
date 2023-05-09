# 手写发布订阅模式

```js
class EventEmitter {
    constructor() {
        this.events= {}
    }
    //事件订阅，需要接收订阅事件名和对应的回调函数
    on(eventName, callback) {
        if(!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)
    }
    //移除订阅，需要移除的订阅事件名及指定的回调函数
    off(eventName, callback) {
        if(this.events[eventName]) {
            // indexOf 与 findIndex的区别
            // indexOf 根据元素值查找对应索引
            // findIndex 参数是一个查询函数，可以自定义查询条件，返回满足条件的元素索引
            const index = this.events[eventName].indexOf(callback)
            if(index !== -1) {
                // 移除指定订阅事件的回调函数
                this.events[eventName].splice(index, 1)
            }
        }
    }
    //事件发布，需要接收发布事件名和对应的参数
    emit(eventName, once = false, ...args) {
        if(this.events[eventName]) {
            // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
            const tasks = this.events[eventName].slice()
            tasks.forEach((callback)=>callback(...args))
            if(once) {
                delete this.events[eventName]
            }
        }
    }
}

// test
const eventBus = new EventEmitter()
const task1 = () => { console.log('task1')}
const task2 = () => { console.log('task2')}

eventBus.on('task', task1)
eventBus.on('task', task2)
eventBus.off('task', task1)

setTimeout(() => {
  eventBus.emit('task') // task2
}, 1000)
```
