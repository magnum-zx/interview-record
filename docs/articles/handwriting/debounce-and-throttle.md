# 手写防抖(debounce)函数

> 触发高频事件后 n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间
>
> (换句话说就是在delay时间内只会执行最后一次被触发的fn)

使用场景：

- 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖
- 手机号、邮箱验证输入检测
- 调整浏览器窗口大小时，resize 次数过于频繁，只需窗口调整完成后，计算窗口大小。防止重复渲染。
- 文本编辑器实时保存，当无任何更改操作一秒后进行保存

```js
function debounce(fn, delay) {
	let timer
	return function(...args) {
		clearTimeout(timer)
		timer = setTimeout(()=>{
			fn.apply(this, args)
		}, delay)
	};
}
```



# 手写节流（throttle）

> 高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率

使用场景：

- `scroll` 事件，每隔一秒计算一次位置信息等
- 浏览器播放事件，每个一秒计算一次进度信息等
- input 框实时搜索并发送请求展示下拉列表（搜索联想），每隔一秒发送一次请求 (也可做防抖)
- 滚动加载，加载更多或滚到底部监听

```js
// setTimeout
function thorttle(fn, delay) {
  let timer;
  return function () {
    if (timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      }, delay);
    }
  };
}

// 时间戳
function throttle(fn, delay) {
  let start = 0;
  return (...rest) => {
    let now = new Date();
    if (now - start > delay) {
      fn.call(this, ...rest);
      start = now;
    }
  };
}
```

