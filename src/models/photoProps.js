const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PhotoPropsSchema = new Schema({
	isIndex: { type: Boolean, default: false },
	year: { type: Number, default: 2016 },
	isFavorite: { type: Boolean, default: false },
  url: { type: String, unique: true }
});
mongoose.model('PhotoProps',PhotoPropsSchema);
