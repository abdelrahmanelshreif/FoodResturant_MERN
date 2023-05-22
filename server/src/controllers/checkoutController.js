const Checkout = require("../models/checkout");

// Controller function for the create checkout route
async function createCheckout(req, res) {
  try {
    // Extract the checkout data from the request body
    const {
      firstName,
      lastName,
      username,
      email,
      address,
      address2,
      country,
      state,
      zip,
      paymentMethod,
      ccName,
      ccNumber,
      ccExpiration,
      ccCvv,
    } = req.body;

    // Create a new checkout instance using the Checkout model
    const newCheckout = new Checkout({
      firstName,
      lastName,
      username,
      email,
      address,
      address2,
      country,
      state,
      zip,
      paymentMethod,
      ccName,
      ccNumber,
      ccExpiration,
      ccCvv,
    });

    // Save the new checkout to the database
    const savedCheckout = await newCheckout.save();

    // Send the saved checkout as a response
    res.json(savedCheckout);
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  createCheckout,
};
