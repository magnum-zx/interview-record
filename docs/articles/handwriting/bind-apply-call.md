<!--
 * @Author: magnum_zx
 * @Date: 2023-06-12 12:54:56
 * @LastEditors: wuzx wzx19980321@163.com
 * @LastEditTime: 2023-06-12 12:55:02
 * @FilePath: /interview-record/docs/articles/handwriting/bind-apply-call.md
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
# 手写 call、apply 及 bind 函数

## call

```js
Function.prototype._call = function(context, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    args = args ? args : []
    //给context新增一个独一无二的属性以免覆盖原有属性
    const key = Symbol()
    context[key] = this
    //通过隐式绑定的方式调用函数
    const result = context[key](...args)
    delete context[key]
    return result
}
```

## apply

```js
Function.prototype._apply = function(context, args) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    args = args ? args : []
    //给context新增一个独一无二的属性以免覆盖原有属性
	const key = Symbol()
    context[key] = this
    let result
    //通过隐式绑定的方式调用函数
    const result = context[key](...args)
    delete context[key]
    return result
}
```

## bind

```js
Function.prototype._bind = function(context, ...args) {
    if(typeof this !== 'function'){
        throw '请使用函数调用'
    }
    const fn = this
    context = context || window
    args = args ? args : []
    return function newFn(...rest) {
        // 如果bind返回的那个函数是被new调用,this应指向返回的那个函数。
        if (this instanceof newFn) {
            return new fn(...args, ...rest)
        }
        return fn.call(context, ...args, ...rest)
    }
}

```

## 区别

- call、apply、bind都将this指向绑定到第一个参数，第一个参数是null / undefined，等同于指向全局对象

- call、apply会立即执行函数，区别是apply的第二个参数是函数执行时的参数的数组，而call是单个传入

- bind返回的是一个绑定了this指向的函数