const pageProxy = require('../proxy').pageProxy;

exports.getCatagoryList = async (ctx, next) => {
  const catagoryList = await pageProxy.getCatagoryList();
  ctx.response.type = "text/html";
  ctx.response.body = catagoryList;

  next();
}

exports.addCatagory = async (ctx, next) => {
  const result = await pageProxy.addCatagory();
  ctx.response.type = "text/html";
  ctx.response.body = result;

  next();
}
