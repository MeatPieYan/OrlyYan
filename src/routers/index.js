const router = require('koa-router')();

const photoController = require('../controllers/photoController');

router.get('/hello', async (ctx, next) => {
  next();
  ctx.response.body = `<h1>hello world</h1>`;
});

router.get('/', photoController.getAllPhoto);

module.exports = router.routes();
