const photoProxy = require('../proxy').photoProxy;

exports.getAllPhoto = async (ctx, next) => {
  const photos = await photoProxy.getAllPhoto();
  ctx.response.type = "text/html";
  ctx.response.body = "";
  photos.map((photo) => {
    ctx.response.body += `<img src="${photo.url}" />`;
  });
  next();
};
