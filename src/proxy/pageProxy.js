const models = require('../models')
const CatagoryModel = models.CatagoryModel;

exports.getCatagoryList = async () => {
  return CatagoryModel.find({},null, {sort: {index: 1}}).exec();
}

exports.addCatagory = async (catagory) => {
  catagory = new CatagoryModel({to: "/Catagory/2016", text: "Favorites", index: "3"});
  return catagory.save();
}
