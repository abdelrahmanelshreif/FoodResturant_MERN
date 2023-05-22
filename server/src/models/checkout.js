const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
// Define schema
const checkoutSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  address2: {
    type: String,
    required: false,
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
    required: false,
  },
  ccName: {
    type: String,
    required: false,
  },
  ccNumber: {
    type: String,
    required: false,
  },
  ccExpiration: {
    type: String,
    required: false,
  },
  ccCvv: {
    type: String,
    required: false,
  },
  itemList: {
    type: [String],
    required: true,
  },
});

// Create model from schema
checkoutSchema.plugin(uniqueValidator)
const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = Checkout;
