const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const path = require('path')
const fs = require('fs')
const app = new Koa()
const router = new Router()

const bundle = fs.readFileSync(path.resolve(__dirname, './dist/server.bundle.js'), 'utf-8')
const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
  template: fs.readFileSync(path.resolve(__dirname, './dist/index.ssr.html'), 'utf-8')
})

// 后端Server
router.get('/index', async (ctx, next) => {
  try {
    let html = await new Promise((resolve, reject) => {
      // 这里直接使用 renderToString 的 Promise 模式，返回的 html 字符串没有样式和 __INITIAL_STATE__，原因暂时还没有查到
      // 所以，只能暂时先自己封装一个 Promise，用 renderToString 的 callback 模式
      renderer.renderToString((err, html) => {
        if (err) {
          reject(err);
        } else {
          resolve(html);
        }
      });
    });

    ctx.type = 'html';
    ctx.status = 200;
    ctx.body = html;
  } catch (err) {
    console.error(err);
    ctx.status = 500;
    ctx.body = '服务器内部错误';
  }
});

app.use(serve(path.resolve(__dirname, './dist')))

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('浏览器端渲染地址： http://localhost:3000')
  console.log('服务器端渲染地址： http://localhost:3000/index')
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
