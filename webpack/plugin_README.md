# 须知
 webpack plugin 的装载过程是在整个 webpack 编译周期中初始阶段

# webpack plugin开发流程

1. 开发过程极其类似loader只是 方式不一样
2. 插件需要new 所有会是一个class类，并且原型上会有apply函数，webpack会调用该函数且会注入一个compiler对象，该对象包含很多事件，具体可以去看看官网，[走你](https://webpack.docschina.org/api/plugins/)