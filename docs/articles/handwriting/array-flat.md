# 实现数组拍平

```js
Array.prototype.flat = function(){
    const res = this.map(item => {
        if(Array.isArray(item)){
            return item.flat()
        } else {
            return [item]
        }
    })
    return [].concat(...res)
}

// 使用 reduce、concat 和递归展开无限多层嵌套的数组
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
Array.prototype.flat = function(){
  return this.reduce((pre, cur)=>{
    return pre.concat(Array.isArray(cur)? cur.flat() : cur)
  }, [])
}
arr1.flat();
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]

// forEach 遍历数组会自动跳过空元素
const eachFlat = (arr = [], depth = 1) => {
  const result = []; // 缓存递归结果
  // 开始递归
  (function flat(arr, depth) {
    // forEach 会自动去除数组空位
    arr.forEach((item) => {
      // 控制递归深度
      if (Array.isArray(item) && depth > 0) {
        // 递归数组
        flat(item, depth - 1)
      } else {
        // 缓存元素
        result.push(item)
      }
    })
  })(arr, depth)
  // 返回递归结果
  return result;
}
eachFlat(arr1, Infinity);

// Use Generator function
function* flatten(array) {
    for (const item of array) {
        if (Array.isArray(item)) {
            yield* flatten(item);
        } else {
            yield item;
        }
    }
}

var arr = [1, 2, [3, 4, [5, 6]]];
const flattened = [...flatten(arr)];
// [1, 2, 3, 4, 5, 6]

```
