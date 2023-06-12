# 手写数组去重

1、利用Array.prototype.indexOf()方法,如果不存在返回-1

```js
Array.prototype.unique = function() {
	const newArray = [];
  // 使用forEach遍历
	this.forEach(item => {
        // !newArray.includes(item)
		if(newArray.indexOf(item) == -1){	// 如果新数组中不存在该元素，则将该元素push到新数组
			newArray.push(item);		
		}
	});
	return newArray;
}
```



2、利用对象的key不重复的特性去重

```js
Array.prototype.unique = function () {
  const newArray = [];
  const tmp = {};
  for (let i = 0; i < this.length; i++) {
    // 使用JSON.stringify()进行序列化
    if (!tmp[typeof this[i] + JSON.stringify(this[i])]) {
      // 将对象序列化之后作为key来使用
      tmp[typeof this[i] + JSON.stringify(this[i])] = 1;
      newArray.push(this[i]);
    }
  }
  return newArray;
}
```

3、ES6中的Set对象。

```js
Array.prototype.unique = function() {
    return Array.from(new Set(arr))
    // or return [...new Set(arr)]
}
```



总结：

+ 从性能上出发：最优的数组去重算法是采用Map数据结构实现的算法。

+ 从写法简洁上出发：最合适的数组去重算法是采用Set数据结构实现的算法。

