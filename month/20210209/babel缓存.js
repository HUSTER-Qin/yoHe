
// webpack 
// hash
// 修改任何文件，都会全部生成新的文件hash值
// chunkhash
// 根据入口依赖来生成，hash。只要我们不改动，就不会变化
// contenthash
// 通过 文件内容来生成hash值


// babel
// babel - loader 中可使用 cacheDirectory 来配置开启缓存，默认是关闭缓存的
// source： 源文件
// identifier： 升级 标志
// options：
// 确定文件是否一致，来是否需要更新。使用md4 校验