# koa 与express

express：自带路由等规则，使用普通的回调函数

koa： 提供基础框架，依靠中间件来集成；利用async/await来处理异步问题

#  NodeJS的优缺点

优点

1. 高并发
2. I/O密集型应用。 遇到I/O事件会创建一个线程去执行，然后主线程会继续往下执行的

缺点

1. 不适合CPU密集型应用
2. 只支持单核CPU，不能充分利用CPU
3. 可靠性低，一旦代码某个环节崩溃，整个系统都崩溃。原因：单进程，单线程
   1. 解决方案：（1）Nnigx反向代理，负载均衡，开多个进程，绑定多个端口；
   2. （2）开多个进程监听同一个端口，使用cluster模块；

# CDN加速服务

CDN的全称是(Content Delivery Network)，即内容分发网络。

- 解决问题
  - 解决由于网络带宽小、用户访问量大、网点分布不均等原因，提高用户访问网站的响应速度。
- 原理
  - 将您源站的资源缓存到位于全球各地的CDN节点上，用户请求资源时，就近返回节点上缓存的资源，而不需要每个用户的请求都回您的源站获取，避免网络拥塞、缓解源站压力，保证用户访问资源的速度和体验

# DOM事件机制

// 参考：https://www.cnblogs.com/starof/p/4066381.html

DOM0: 直接通过标签绑定；

- 特点：同一元素同一种事件只能绑定一个函数。不存在兼容问题
- 清除事件：给改事件函数置为null

DOM2:通过 addEventListener 绑定的事件; 

- 特点：同一元素同一种事件可以绑定多个，按照addEventListener绑定顺序执行；
- addEventListener：三个参数1）事件名2）函数3）true则表示在捕获阶段调用，为false表示在冒泡阶段调用。
- 清除事件：removeEventListener

## 事件流

事件发生时会在元素节点与根节点之间按照特定的顺序传播，路径所经过的所有节点都会收到该事件，这个传播过程即DOM事件流。

### 事件流模型

事件传播的顺序对应浏览器的两种事件流模型：捕获型事件流和冒泡型事件流。

1. 冒泡型事件流：事件的传播是从最`特定`的事件目标到最不特定的事件目标。即从DOM树的`叶子到根`。
   - div>—><body>—>**<html>**—>document
   - 阻止冒泡： e.stopPropagation();
2. 捕获型事件流：事件的传播是从最`不特定`的事件目标到最特定的事件目标。即从DOM树的`根到叶子`。
   - 在捕获型事件流中click事件传播顺序为**document**—>**<html>**—>**<body>**—>**<div>**

### DOM事件流

DOM标准规定事件流包括三个阶段：事件捕获阶段、处于目标阶段和事件冒泡阶段。

- 事件捕获阶段：**实际目标**（<div>）在捕获阶段**不会接收事件**。也就是在捕获阶段，事件从document到<html>再到<body>就停止了。上图中为1~3.
- 处于目标阶段：事件在<div>上发生并处理。**但是事件处理会被看成是冒泡阶段的一部分**。
- 冒泡阶段：事件又传播回文档。



## 事件流的应用

### 事件代理

事件代理的原理用到的就是事件冒泡和目标元素，把事件处理器添加到父元素，等待子元素事件冒泡，并且父元素能够通过target（IE为srcElement）判断是哪个子元素，从而做相应处理
- 优点：1）将多个事件处理器减少到一个，因为事件处理器要驻留内存，这样就提高了性能。2）DOM更新无需重新绑定事件处理器，因为事件代理对不同子元素可采用不同处理方法

# http状态码

### 200
表示正常0k，这个是地球人都知道的了。
### 301 
Moved Permanently 表示客户请求的文档在其他地方，新的URL在Location头中给出，浏览器应该自动地访问新的URL。
### 304
Not Modified：客户端有缓冲的文件并发出了一个条件性的请求（一般是提供If-Modified-Since头表示客户只想比指定日期更新的文档）。服务器告诉客户，原来缓冲的文档还可以继续使用。

# async/await

async 函数就是 Generator 函数的语法糖。

优点
1. 内置执行器。
2. 更好的语义
3. 更广的适用性
async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数

# TCP/IP

TCP (Transmission Control Protocol)和UDP(User Datagram Protocol)协议属于传输层协议

TCP支持的应用协议主要有：Telnet、FTP、SMTP等； UDP支持的应用层协议主要有：NFS（网络文件系统）、SNMP（简单网络管理协议）、DNS（主域名称系统）、TFTP（通用文件传输协议）等。 TCP/IP协议与低层的数据链路层和物理层无关，这也是TCP/IP的重要特点

1. TCP(Transimision Control Protocal)
	- 传输控制协议
	- 可靠的、面向连接的协议
	- 传输效率低

2. UDP(User Datagram Protocal)
	- 用户数据报协议
	- 不可靠的、无连接的服务
	- 传输效率高
# http、https、HTTP2

http（超文本传输协议(HyperText Transfer Protocol) ）

特点：

1. 无状态性

2. 持久连接

缺陷：

1. 耗时：传输数据每次都要建立连接
2. 不安全：HTTP是明文传输的
3. Header内容过大
4. keepalive压力过大

影响因素：

1. 带宽
2. 延迟：1）浏览器阻塞（浏览器的限制，超过浏览器的最大连接数，后续请求会被阻塞）
3. DNS查询
4. 建立连接

### https
1. SSL(Secure Sockets Layer)，简称安全套接入层
2. TLS(Transport Layer Security)，简称安全传输层协议，该协议由两层组成： TLS 记录协议（TLS Record）和 TLS 握手协议（TLS Handshake）
3. 一般把TLS协议归为传输层安全协议。
4. HTTPS可以理解为 HTTP+SSL/TLS， 即 HTTP 下加入 SSL 层，HTTPS 的安全基础是 SSL，因此加密的详细内容就需要 SSL，用于安全的 HTTP 数据传输。

### HTTP2.0

	1. 新的二进制格式（Binary Format）
 	2. 多路复用（MultiPlexing），即连接共享，即每一个request都是是用作连接共享机制的。（多个请求可同时在一个连接上并行执行。某个请求任务耗时严重，不会影响到其它连接的正常执行）
 	3. header压缩
 	4. 服务端推送（server push）



# 用户访问网站全过程

1. DNS解析获取IP;1）浏览器缓存DNS解析。2）本地host解析。3）域名解析服务器

2. 发起TCP连接请求

3. 负载均衡

4. 浏览器渲染；生成DOM Tree。根据CSS内容，生成CSS Rule Tree(规则树)。调用JS执行引擎执行JS代码。

   - 解析HTML，得到一个DOM tree

   - 解析CSS，得到CSSOM tree
   - 将两者整合成渲染数，render tree
   - 布局（layout）， 根据Render Tree计算每个节点的位置大小等信息 （在草稿本上画了个草图）
   - 绘制（Painting ）根据计算好的信息绘制整个页面
   - 重排（回流）步骤4
   - 重绘 步骤5

5. 静态资源的加载；在渲染过程中发现页面引用了其他未加载的image、css文件、js文件等静态内容

6. TCP断开

### 解析html

1. 自上而下解析HTML
2. 遇到style，会下载样式表，同时构建CSSOM tree，`并不会阻塞HTML解析`
3. 遇到script，会立即下载并执行得到的脚本，会阻塞`html的解析`；<script> 标签的async和defer属性可以改变阻塞HTML解析的情况，但是较低版浏览器不支持，所以最佳的实践是，将<script>放在</body>前。
   1. 正常script：下载阻塞，执行阻塞
   2. async： 下载异步，执行阻塞
   3. defer：下载异步，最后执行
4. 可能还有GPU渲染3D的过程



# 跨域

### 什么是跨域
请注意：localhost和127.0.0.1虽然都指向本机，但也属于跨域。
1. 不同域名（子域名不同）
2. 不同协议
3. 不同端口

同源：是指域名，协议，端口均相同

限制：

1. 不能通过ajax的方法去请求不同源中的文档。
2.  浏览器中不同域的框架之间是不能进行js的交互操作的。

**兼容表单（form），因为历史上表单一直可以发出跨域请求。**

### 跨域方法

1. jsonp跨域： 本质上是依靠js的跨域加载，利用插入js的回调函数获取数据

   - 安全问题，可能执行不安全代码
   - 确认jsonp失败不容易

2. document.domain+iframe来跨子域

   1. document.domain，将父页面设置成子页面的主域，获取iframe可以操作
   
      ```html
      <iframe src = "http://script.a.com/dir/b.html" id="iframe" onload = "loLoad()"></iframe>
      <script>
      document.domain = "a.com";//设置成主域
      function test(){
          var iframe = document.getElementById("iframe");
          var win = iframe.contentWindow;
          //在这里就可以操作b.html
      }
      </script>
      ```
   
   2. window.name+iframe
   
      1. window的name属性特征：name 值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值（2MB），即在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个window.name的，每个页面window.name都有读写的权限。
   
   
   
3. window.postMessage

   1. html5新引进的特性，可以使用它来向其它的window对象发送消息

      ```js
      win.postMessage('哈哈，我是来自页面a.html的信息哟！','*');//向不同域的www.script.com/b.html发送消息
      ```

4. 使用跨域资源共享（CORS）来跨域

   1. CORS：一种跨域访问的机制，可以让AJAX实现跨域访问；CORS允许一个域上的网络应用向另一个域提交跨域AJAX请求。
      服务器设置Access-Control-Allow-Origin HTTP响应头之后，浏览器将会允许跨域请求．
   2. 非简单请求 会发送一次options请求去预检查，请求方法是`PUT`或`DELETE`
   
# CSS 字符截断

   ```css
overflow:hidden;  // 内容会被修剪，并且其余内容是不可见的。
text-overflow:ellipsis; // 显示省略符号来代表被修剪的文本。
white-space:nowrap // 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止
   ```

多行

```css
 overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 用来限制在一个块元素显示的文本的行数,这是一个不规范的属性（unsupported WebKit property），它没有出现在 CSS 规范草案中。
  -webkit-box-orient: vertical; //  设置或检索伸缩盒对象的子元素的排列方式 。
```

1. 利用伪类也可以

   

# VUE双向绑定原理

vue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的，

Object.defineProperty( )的两个描述属性get和set

1. 实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。

2. 实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。

3. 一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。

   ```js
   Observer 它的作用是给对象的属性添加 getter 和 setter，用于依赖收集和派发更新；
   dep Dep 是整个 getter 依赖收集的核心；实际上就是对 Watcher 的一种管理，Dep 脱离 Watcher 单独存在是没有意义的
   Watcher
   ```

   派发更新

   ```js
   引入了一个队列的概念，这也是 Vue 在做派发更新的时候的一个优化的点，它并不会每次数据改变都触发 watcher 的回调，而是把这些 watcher 先添加到一个队列里，然后在 nextTick 后执行 flushSchedulerQueue。
   ```

   - 队列排序

   `queue.sort((a, b) => a.id - b.id)` 对队列做了从小到大的排序，这么做主要有以下要确保以下几点：

   1. 组件的更新由父到子；因为父组件的创建过程是先于子的，所以 `watcher` 的创建也是先父后子，执行顺序也应该保持先父后子。
   2. 用户的自定义 `watcher` 要优先于渲染 `watcher` 执行；因为用户自定义 `watcher` 是在渲染 `watcher` 之前创建的。

# 自定义事件的实现方法

Mdn

```js
var event = new Event('build');
// Listen for the event.
elem.addEventListener('build', function (e) { ... }, false);
// Dispatch the event.
elem.dispatchEvent(event);
```

要向事件对象添加更多数据，可以使用 [CustomEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent)

```js
var event = new CustomEvent('build', { 
   bubbles: true, // 事件冒泡
  'detail': elem.dataset.time 
});
function eventHandler(e) {
  log('The time is: ' + e.detail);
}
```

# 本地储存



