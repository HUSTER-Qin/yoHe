// WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
// 原生WeakMap持有的是每个键或值对象的弱引用，正是由于弱引用，WeakMap的key是不可枚举
const wm = new WeakMap();
const o1 = {};
const o2 = {};
// 设置一个值  在同一个键插入不同的值 会覆盖
wm.set(o1, 'hello');
// 是否存在
wm.has(o1); // true
wm.has(o2); // false

wm.get(o1); // hello
wm.get(o2); // undefined

wm.delete(o1); // true
wm.delete(o2); // false


// 弱引用
const map = new Map();
let key = new Array(5 * 1024 * 1024);
// 建立了 map 对 key 所引用对象的强引用
map.set(key, 1);
// key = null 不会导致 key 的原引用对象被回收
key = null;

const wm1 = new WeakMap();
let key1 = new Array(5 * 1024 * 1024);
wm1.set(key1, 1);
key1 = null;
// eslint-disable-next-line max-len
// 当我们设置 wm.set(key, 1) 时，其实建立了 wm 对 key 所引用的对象的弱引用，但因为 let key = new Array(5 * 1024 * 1024) 建立了 key 对所引用对象的强引用，被引用的对象并不会被回收，但是当我们设置 key = null 的时候，就只有 wm 对所引用对象的弱引用，下次垃圾回收机制执行的时候，该引用对象就会被回收掉。
// WeakMap 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。
