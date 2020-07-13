/**
 * Created by qin on 2019/9/12.
 */
class HelloWorldPlugin {
	constructor(options) {
	  this.options = options
	}
	apply(compiler) {
	  compiler.hooks.afterPlugins.tap('entryOption', params => {
		console.log(params)
	  })
	  compiler.hooks.emit.tap('entryOption', compilation => {
		// 在生成文件中，创建一个头部字符串：
		var filelist = 'In this build:\n\n';
	
		// 遍历所有编译过的资源文件，
		// 对于每个文件名称，都添加一行内容。
		for (var filename in compilation.assets) {
		  filelist += ('- '+ filename +'\n');
		}
		console.log(filelist)
		// 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
		compilation.assets['filelist1.md'] = {
		  source: function() {
			return filelist;
		  },
		  size: function() {
			return filelist.length;
		  }
		};
		compilation.chunks.forEach(function (chunk) { 
		  console.log(chunk.modules)
		})
	  })
	  compiler.hooks.compile.tap('MyPlugin', params => {
		console.log('以同步方式触及 compile 钩子。')
	  })
	  compiler.hooks.run.tapPromise('MyPlugin', compiler => {
		return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
		  console.log('以具有延迟的异步方式触及 run 钩子')
		})
	  })
	  compiler.hooks.run.tapAsync('MyPlugin1', (compiler, callback) => {
		console.log('以异步方式触及 run 钩子。')
		callback()
	  })
	}
  }
  module.exports = HelloWorldPlugin;
  