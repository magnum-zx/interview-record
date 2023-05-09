# 实现柯里化

```js
function curry(fn){
    // 获取原函数的参数长度
    const argsLen = fn.length
    // 保存预设参数
    const presetArgs = [].slice.call(arguments, 1)
    // 返回新函数
    return function(){
        const restArgs = [].slice.call(arguments)
        const allArgs = [...presetArgs, ...restArgs]
        if(allArgs.length >= argsLen){
            return fn.apply(this, allArgs)
        } else {
            return curry.call(null, fn, ...allArgs)
        }
    }
}

// test
var curried = curry(fn);
curried(1, 2, 3); // 6
curried(1, 2)(3); // 6
curried(1)(2, 3); // 6
curried(1)(2)(3); // 6
curried(7)(8)(9); // 24
```
