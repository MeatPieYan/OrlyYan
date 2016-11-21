const photoProxy = require('../proxy').photoProxy;

exports.getAllPhoto = async (ctx, next) => {
  const photos = await photoProxy.getAllPhoto();
  ctx.response.type = "text/html";
  ctx.response.body = photos;

  next();
};

exports.getIndexPhoto = async (ctx, next) => {
  const photos = await photoProxy.getPhotoByPrefix("index");
  ctx.response.type = "text/html";
  ctx.response.body = photos;

  next();
}

exports.getLogo = async (ctx, next) => {
  const logo = await photoProxy.getPhotoByPrefix("logo");
  ctx.response.type = "text/html";
  ctx.response.body = logo;

  next();
}

exports.getPhotosByYear = async (ctx, next) => {
  const year = ctx.params.year || 2016;
  const photoNames = await photoProxy.getPhotoNameByYear(ctx.params.year);
  const photos = await photoProxy.getPhotosByNames(photoNames);
  ctx.response.type = 'text/html';
  ctx.response.body = photos;

  next();
}

exports.addPhotoPropsIntoMongo = async (ctx, next ) => {
  const result = await photoProxy.addPhotoPropsIntoMongo();
  ctx.response.body = result;

  next();
}
