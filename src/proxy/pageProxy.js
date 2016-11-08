const models = require('../models')
const CatagoryModel = models.CatagoryModel;

exports.getCatagoryList = async () => {
  return CatagoryModel.find().exec();
}

exports.addCatagory = async (catagory) => {
  catagory = new CatagoryModel({to: "/favorites", text: "Favorites", index: "3"});
  return catagory.save();
}
