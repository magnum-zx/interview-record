# 手写Promise

```js
class MyPromise{
    constructor(executor) {
        this.status = 'pending'
        this.promiseResult = null // Promise的结果
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []
    
        try {
            executor(resolve, reject)
        } catch(err) {
            reject(err)
        }
    }
    resolve(value){
        if(this.status == 'pening'){
            this.status = 'fullfilled'
            this.promiseResult = value
            this.onFulfilledCallback.forEach(fn => fn(this.value)) // 调用成功的回调函数
        }
    }
                
    reject(reason){
        if(this.status === 'pending') {
            this.status = 'rejected'
            this.promiseResult = reason
            this.onRejectedCallbacks.forEach(fn => fn(this.reason))
        }
    }
    then(onFulfilled, onRejected) {
        // onFullfilled 如果不是函数，则改为函数直接返回value
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    // onRejected如果不是函数，则修改为函数，直接抛出错误
    onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}
    return new MyPromise((resolve, reject) => {
        const resolvePromise = (callback)=>{
            setTimeout(()=>{
                try{
                    let x = callback(this.promiseResult)
                    x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
                } catch(err) {
                    reject(err)
                }
            })
        }
        if(this.status === 'fulfilled') {
        // 用setTimeout实现异步，实际上.then应该是微任务
            resolvePromise(onFulfilled)
        }
        if (this.status === 'rejected') {
            resolvePromise(onRejected)
          }
        if (this.status === 'pending') {
            this.onFulfilledCallbacks.push(() => { // 将成功的回调函数放入成功数组
              resolvePromise(onFulfilled)
            })
            this.onRejectedCallbacks.push(() => { // 将失败的回调函数放入失败数组
              resolvePromise(onRejected)
            })
          }
      })
    }
}
```
