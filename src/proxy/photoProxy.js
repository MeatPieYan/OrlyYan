const qiniu = require('qiniu');
const { qiniuSettings } = require('../globalConfig');

qiniu.conf.ACCESS_KEY = qiniuSettings.ACCESS_KEY;
qiniu.conf.SECRET_KEY = qiniuSettings.SECRET_KEY;

const baseDownloadUrl = qiniuSettings.downloadUrl;
const policy = new qiniu.rs.GetPolicy();


exports.getAllPhoto = async () => {
  return new Promise((resolve, reject) => {
    qiniu.rsf.listPrefix(qiniuSettings.bucket, '', null, null, null, (err, result, response) => {
      if(response.statusCode === 200) {
        const photos = result.items.map((photo) => {
          return {...photo, url: policy.makeRequest(baseDownloadUrl + photo.key)};
        });
        resolve(photos);
      }
      reject(err);
    });
  });
}

exports.getPhotoByPrefix = async (prefix) => {
  return new Promise((resolve, reject) => {
    qiniu.rsf.listPrefix(qiniuSettings.bucket, prefix, null, null, null, (err, result, response) => {
      if(response.statusCode === 200) {
        const photos = result.items.map((photo) => {
          return {...photo, url: policy.makeRequest(baseDownloadUrl + photo.key)};
        });
        resolve(photos);
      }
      reject(err);
    });
  });
}
