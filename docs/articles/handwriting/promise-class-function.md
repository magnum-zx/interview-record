# Promise.all

```js
const all = function(promiseList){
    let arr = []
    return new Promise((resolve, reject)=>{
        let cnt = 0
        promiseList.forEach((promise, index)=>{
            Promise.resolve(promise).then((res)=>{
                arr[index]=res
                cnt++
                if(cnt === promiseList.length) resolve(arr)
            }).catch()
        })
    })
}
```

# Promise.race

```js
const race = function(promises) {
    return new MyPromise((resolve, reject) => {
        promises.forEach(promise => {
            if (promise instanceof MyPromise) {
                promise.then(res => {
                    resolve(res)
                }, err => {
                    reject(err)
                })
            } else {
                // 不是promise类型，直接resolve
                resolve(promise)
            }
        })
    })
}
```
