const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const productSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  ccName: {
    type: String,
    required: true,
  },
  ccNumber: {
    type: String,
    required: true,
  },
  ccExpiration: {
    type: String,
    required: true,
  },
  ccCvv: {
    type: String,
    required: true,
  },
});
orderSchema.plugin(uniqueValidator)
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
