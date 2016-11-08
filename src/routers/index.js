const router = require('koa-router')();

const photoController = require('../controllers/photoController');
const pageController = require('../controllers/pageController');

router.get('/hello', async (ctx, next) => {
  next();
  ctx.response.body = `<h1>hello world</h1>`;
});

//photos
router.get('/getAllPhoto', photoController.getAllPhoto);
router.get('/getIndexPhoto', photoController.getIndexPhoto);
router.get('/getLogo', photoController.getLogo);

//page control
router.get('/addCatagory', pageController.addCatagory);
router.get('/getCatagoryList', pageController.getCatagoryList);

module.exports = router.routes();
