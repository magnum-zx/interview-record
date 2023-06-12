# JS中检测数据类型的方法

## typeof 关键字

> 可以判断准确基本类型（除了null）和函数，但是无法精确判断引用类型

返回值：

"undefined": 值未定义

"boolean": 布尔值

"string": 值为字符串

"number": 值为数字

"object": 值为对象或者**null**

"function": 值为函数

"symbol": 值为符号

## instanceof

> 可以判断引用类型，返回值为布尔值

```js
const result = [] instanceof Array; // true
```



## constructor：

> 实例对象可以访问原型链上原型对象的constructor属性，得到实例原型的构造函数

缺点：

- **undefined**和**null**没有constructor属性，所以判断时代码可能会报错--这很致命，会导致代码运行不下去，所以只有在确定待判断的值不是undefined和null才能使用
- 由于constructor属性是**可以变更**的，也会导致检测出的结果不正确



## Object.prototype.toString.call()

> 通用检测对象类型

```js
Object.prototype.toString.call(new Date); // '[object Date]'
Object.prototype.toString.call(new String); // '[object String]'
Object.prototype.toString.call(Math); // '[object Math]'
```



## （扩展）typeof 与 instanceof 的区别

- typeof 会返回一个运算数的基本类型，instanceof 返回的是布尔值
- instanceof 可以准确判断引用数据类型，但是不能正确判断基本数据类型
- typeof 虽然可以判断基本数据类型（null 除外），但是无法判断引用数据类型（function 除外）

