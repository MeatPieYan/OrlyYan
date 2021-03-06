const qiniu = require('qiniu');
const { qiniuSettings } = require('../globalConfig');

const models = require('../models');
const PhotoPropsModel = models.PhotoPropsModel;

qiniu.conf.ACCESS_KEY = qiniuSettings.ACCESS_KEY;
qiniu.conf.SECRET_KEY = qiniuSettings.SECRET_KEY;

const baseDownloadUrl = qiniuSettings.downloadUrl;
const policy = new qiniu.rs.GetPolicy();
const EntryPath = qiniu.rs.EntryPath;
const client = new qiniu.rs.Client();


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

exports.addPhotoPropsIntoMongo = async (photoInfo) => {
  photoInfo = new PhotoPropsModel({
    isIndex: true,
    year: 2016,
    isFavorite: true,
    photoName: 'index_5.JPG'
  });

  return photoInfo.save();
}

exports.getPhotoNameByYear = async (year) => {
  return PhotoPropsModel.find({year}).exec();

}

exports.getPhotosByNames = async (photoName) => {
  return new Promise((resolve, reject)=>{
    if(!photoName){
      reject("no photo from mongo");
    }
    const photos = photoName.map((photo)=>{
      return {...photo.toObject(), url: policy.makeRequest(baseDownloadUrl + photo.photoName)};
    });

    resolve(photos);
  });

}
