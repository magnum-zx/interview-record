# 浅拷贝与深拷贝

## 浅拷贝

如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址。

浅拷贝是拷贝一层，深层次的引用类型则共享内存地址。

```js
function shallowClone(obj) {
    const newObj = {}
    for(let prop in obj){
        // Object.prototype.hasOwnProperty() 返回布尔值，对象中是否具有指定属性
        // 该方法会忽略掉那些从原型链上继承到的属性 
        if(obj.hasOwnProperty(prop)) {
            newObj[prop] = obj[prop]
        }
    }
    return newObj
}
```

存在浅拷贝的有：

- Object.assign
- Array.prototype.slice()，Array.prototype.concat
- 拓展运算符实现的复制




## 深拷贝

深拷贝开辟一个新的栈，两个对象属完成相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性。

常见的深拷贝方式有：

- _.cloneDeep()
- jQuery.extend()
- JSON.stringify()
- 手写循环递归

#### 

```js
// _.cloneDeep()

const _ = require('lodash')
const obj1 = {
    a: 1,
    b: {f: {g: 1}},
	c: [1, 2, 3]
}
const obj2 = _.cloneDeep()(obj1)
console.log(obj1.b.f === obj2.b.f) // false 引用地址不同
```



```js
// jQuery.extend()
const $ = require('jquery');
const obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
const obj2 = $.extend(true, {}, obj1);
console.log(obj1.b.f === obj2.b.f); // false
```

**

```js
// JSON.stringify()
const obj2=JSON.parse(JSON.stringify(obj1));
// 但是这种方式存在弊端，会忽略undefined、symbol和函数
```



## 循环递归实现深拷贝

![img](https://cdn.jsdelivr.net/gh/magnum-zx/blog-image@main/img/3265f1c5aeac4fc489dcf6a257fc76e2~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

```js
function deepClone(obj, hash = new WeakMap()) {
    // WeakMap与Map相比，其中的键是弱引用，
    // 一个对象若只被弱引用所引用，则被认为是不可访问（或弱可访问）的，并因此可能在任何时刻被回收。
    if(obj === null) return obj
    if(obj instanceof Date) return new Date(obj)
    if(obj instanceof RegExp) return new RegExp(obj)
    // 可能是普通变量值或者对象，如果是函数不需要深拷贝
    if(typeof obj !== "object") return obj;
    // 是对象的话需要深拷贝,用hash解决循环引用的问题(循环引用：对象的属性引用了自身)
    // 当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，如果有的话直接返回，如果没有的话继续拷贝
    if(hash.get(obj)) return hash.get(obj);
    // 找到的是所属类原型上的constructor，而原型上的constructor指向当前类本身
    let cloneObj = new obj.constructor();
    hash.set(obj, cloneObj);
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            // 递归拷贝
            cloneObj[key] = deepClone(obj[key], hash)
        }
    }
    return cloneObj
}
```

> 注意：
>
> 1、map与传统对象的区别：传统对象只能用字符串作为键值
>
> 2、map与weakmap区别：
>
> ​	第一，WeakMap只能将对象作为键名（除了null），
>
> ​	第二，WeakMap的键名引用的对象是弱引用，
>
> ​	第三，WeakMap不可遍历
>
> 3、强引用必须自己手动删除引用，弱引用的对象是可以被垃圾回收的

