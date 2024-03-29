# 为什么0.1+0.2  !== 0.3

JS基于 [IEEE 754](https://link.juejin.cn/?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FIEEE_754) 标准的**浮点数**运算，计算机可支持浮点数的小数部分可支持到**52位**，所有两者相加，在转换成十进制，得到的数就不准确了

解决方案：math.js, bignumber.js, decimal.js, big,js...

## 十进制小数转二进制小数（采用 `×2` 取整法）

对小数点以后的数乘以2，得出结果，取结果的整数部分(不是 0 就是 1)，然后再对结果的小数点以后的数乘以2，得出结果，再取结果整数部分，再然后然后再对结果的小数点以后的数乘以2。。。。无限循环

### 0.1 + 0.2

![img](https://cdn.jsdelivr.net/gh/magnum-zx/blog-image@main/img/291d1fef910846b591f36d09759b3336~tplv-k3u1fbpfcp-watermark.awebp)

​	0.1和0.2转成二进制都是无限循环的，超过了最大位数，所以**存储时只能通过近似值去存储**他们，那自然的，当`0.1 + 0.2`时，**近似值转十进制肯定也是近似值，所以造成误差**，最大位数是根据硬盘内存大小决定的，所以一般硬盘内存越大，精确度越高。



## 整数、负整数十进制转二进制

#### 1、整数：

除二取余，然后倒序排列，高位补零

#### 2、负整数：

- 把正整数转二进制 
- 对二进制取反 
- 对取反后的二进制加1

