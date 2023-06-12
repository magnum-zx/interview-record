# this指向的问题

1. 箭头函数的 `this` 指向上一层作用域
2. 普通函数中的 `this` 指向 `window` ，严格模式下为 `undefined`
3. 当函数作为对象的方法属性（Method），并且被对象调用时，this指向该对象
4. 构造函数中的this指向创建的实例对象
5. call/apply/bind方法调用的函数，this指向call/apply/bind方法的第一个参数