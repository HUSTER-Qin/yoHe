# new vue
## this._init(options)
- src/core/instance/index.js
- 初始化 各种变量和状态（生命周期事件）

## Vue.prototype.$mount
- 如果没有定义render 那么将el或者template转换成 render

## mountComponent
（src/core/instance/lifecycle.js）

## _render
- 生成Vnode
  - createElement 返回Vnode
    - _createElement

## _update
更新dom

## __patch__
- Vue.prototype.__patch__ = inBrowser ? patch : noop

## patch
	- createElm 的作用是通过虚拟节点创建真实的 DOM 并插入到它的父节点中


# 因为是递归调用，子元素会优先调用 insert，所以整个 vnode 树节点的插入顺序是先子后父

