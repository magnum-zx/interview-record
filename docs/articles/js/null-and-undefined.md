# null 与 undefined

1. null == undefined 返回true （use strict 返回false）

2. null === undefined 返回 false

3. null转为数字类型值为0,而undefined转为数字类型为 NaN(Not a Number)
4. undefined是代表调用一个值而该值却没有赋值,这时候默认则为undefined
5. null是一个很特殊的对象,最为常见的一个用法就是作为参数传入(说明该参数不是对象)
6. 设置为null的变量或者对象会被内存收集器回收