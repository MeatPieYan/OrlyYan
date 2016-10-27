const router = require('koa-router')();

router.get('/hello', async (ctx, next) => {
  next();
  ctx.response.body = `<h1>hello world</h1>`;
});

module.exports = router.routes();
