const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
});
productSchema.plugin(uniqueValidator)
const FoodItem = mongoose.model('FoodItem', productSchema);

module.exports = FoodItem;
