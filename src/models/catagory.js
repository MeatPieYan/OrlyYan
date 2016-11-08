const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CatagorySchema = new Schema({
	to: { type: String },
	text: { type: String, unique: true },
	index: { type: Number, unique: true }
});


mongoose.model('Catagory',CatagorySchema);
