const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const foodItemController = require("../controllers/foodItemController");
const checkoutController = require("../controllers/checkoutController");
const { authToken } = require("../middleware/adminAuth"); // Import the authToken middleware

// Define routes
router.get("/", (req, res) => {
  res.send("Our Server Is Ready");
});

//-----------------------------------------------------------------

// API For Sign Up New USER
router.post("/signup", userController.signup);

// API FOR GET MENU OF FOOD ITEMS
router.get("/api/FoodItems", foodItemController.getAllFoodItems);

// API FOR GET ITEM BY ID TO USE IT IN CART
router.get("/api/FoodItems/:id", foodItemController.getFoodItemById);

// POST request to create a new checkout
router.post("/api/checkout", checkoutController.createCheckout);

// GET user by username
router.get("/:username", userController.getUserByUsername);

// API For LOGIN
router.post("/login", userController.login);

// API FOR ADMIN LOGIN USER - ADMIN
router.post("/admin-login", userController.adminLogin);

//CRUD OPERATIONS
//-----------------------------------------------------------------

// Apply the authToken middleware to the following routes

//To Turn On Authorization Uncomment The Next Line
// router.use(authToken);

// For ADD
router.post("/menu/add", foodItemController.addFoodItem);

// API FOR UPDATING FOOD ITEM BY ID
router.put("/menu/update/:id", foodItemController.updateFoodItem);

// API FOR DELETE BY ID OF FOOD ITEM
router.delete("/menu/remove/:id", foodItemController.deleteFoodItem);

//-------------------------------------------------------------------
module.exports = router;
