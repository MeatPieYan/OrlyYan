const router = require('koa-router')();

const photoController = require('../controllers/photoController');

router.get('/hello', async (ctx, next) => {
  next();
  ctx.response.body = `<h1>hello world</h1>`;
});

router.get('/getAllPhoto', photoController.getAllPhoto);
router.get('/getIndexPhoto', photoController.getIndexPhoto);
router.get('/getLogo', photoController.getLogo);

module.exports = router.routes();
