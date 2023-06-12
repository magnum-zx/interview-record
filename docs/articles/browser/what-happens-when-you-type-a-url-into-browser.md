# 从输入URL到页面加载的过程中发生了什么？



1、首先在浏览器中输入URL

2、查找缓存：浏览器先查看浏览器缓存-系统缓存-路由缓存中是否有该地址页面，如果有则显示页面内容。如果没有则进行下一步。

- 浏览器缓存：浏览器会记录DNS一段时间，因此，只是第一个地方解析DNS请求；
- 操作系统缓存:如果在浏览器缓存中不包含这个记录，则会使系统调用操作系统， 获取操作系统的记录(保存最近的DNS查询缓存)；
- 路由器缓存：如果上述两个步骤均不能成功获取DNS记录，继续搜索路由器缓存；
- ISP缓存：若上述均失败，继续向ISP搜索。

3、DNS域名解析：浏览器向DNS服务器发起请求，解析该URL中的域名对应的IP地址。`DNS服务器是基于UDP的，因此会用到UDP协议`

4、建立TCP连接：解析出IP地址后，根据IP地址和默认80端口，和服务器建立TCP连接

5、发起HTTP请求：浏览器发起读取文件的HTTP请求，该请求报文作为TCP三次握手的第三次数据发送给服务器

6、服务器响应请求并返回结果：服务器对浏览器请求做出响应，并把对应的html文件发送给浏览器

7、关闭TCP连接：通过四次挥手释放TCP连接

8、**浏览器渲染**：客户端（浏览器）解析HTML内容并渲染出来，浏览器接收到数据包后的解析流程为：

- 构建DOM树：词法分析然后解析成DOM树（dom tree），是由dom元素及属性节点组成，树的根是document对象
- 构建CSS规则树：生成CSS规则树（CSS Rule Tree）
- 构建render树：Web浏览器将DOM和CSSOM结合，并构建出渲染树（render tree）
- 布局（Layout）：计算出每个节点在屏幕中的位置
- 绘制（Painting）：即遍历render树，并使用UI后端层绘制每个节点。

9、JS引擎解析过程：调用JS引擎执行JS代码（JS的解释阶段，预处理阶段，执行阶段生成执行上下文，VO，作用域链、回收机制等等）
