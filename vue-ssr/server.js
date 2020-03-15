const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');
const app = new Koa();
const router = new Router();

const bundle = fs.readFileSync(path.resolve(__dirname, './dist/server.bundle.js'), 'utf-8');
const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
  template: fs.readFileSync(path.resolve(__dirname, './dist/index.ssr.html'), 'utf-8')
});

// 后端Server
router.get('/index',async (ctx, next) => {
  // 这里用 renderToString 的 promise 返回的 html 有问题，没有样式
  await renderer.renderToString((err, html) => {
    if (err) {
      console.error(err);
      ctx.status = 500;
      ctx.body = '服务器内部错误';
    } else {
      console.log(html);
      ctx.status = 200;
      ctx.body = html;
    }
  });
});

app.use(serve(path.resolve(__dirname, './dist')));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
	console.log('浏览器端渲染地址： http://localhost:3000');
	console.log('服务器端渲染地址： http://localhost:3000/index');
});
