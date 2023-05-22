const FoodItem = require("../models/foodItem");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Controller function for the get food items route
async function getAllFoodItems(req, res) {
  try {
    const foodItems = await FoodItem.find();
    res.json(foodItems);
  } catch (error) {
    console.error("Failed to fetch food items", error);
    res.status(500).json({ error: "Failed to fetch food items" });
  }
}

// Controller function for the get food item by ID route
async function getFoodItemById(req, res) {
  const { id } = req.params;

  // Validate if the provided ID is a valid MongoDB ObjectID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  // Find the food item by its ID
  FoodItem.findById(id)
    .then((foodItem) => {
      if (!foodItem) {
        return res.status(404).json({ error: "Food item not found" });
      }

      res.json(foodItem);
    })
    .catch((error) => {
      console.error("Failed to fetch food item", error);
      res.status(500).json({ error: "Failed to fetch food item" });
    });
}

// Controller function for the add food item route
async function addFoodItem(req, res) {
  try {
    const newItem = await FoodItem.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to add item to the menu" });
  }
}

// Controller function for the update food item by ID route
async function updateFoodItem(req, res) {
  try {
    const itemId = req.params.id;
    const updatedItem = await FoodItem.findOneAndUpdate(
      { id: itemId },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to update item in the menu" });
  }
}

// Controller function for the delete food item by ID route
async function deleteFoodItem(req, res) {
  try {
    const itemId = req.params.id;
    await FoodItem.deleteOne({ id: itemId });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: "Failed to remove item from the menu" });
  }
}

module.exports = {
  getAllFoodItems,
  getFoodItemById,
  addFoodItem,
  updateFoodItem,
  deleteFoodItem,
};
