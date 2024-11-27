const express = require('express');
const router = express.Router();
const Cart = require("../models/cart.models"); // Import the Cart model

// Add item to cart or update its quantity
router.post('/add-to-cart', async (req, res) => {
  try {
    const { userId, name, description, price, image, category, productId } = req.body;

    if (!name || !price || !productId || !userId) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // Check if the item already exists in the cart
    const existingItem = await Cart.findOne({ userId, productId });

    if (existingItem) {
      // Increment quantity if the item exists
      existingItem.quantity += 1;
      const updatedItem = await existingItem.save();
      return res.status(200).json(updatedItem);
    }

    // Create a new cart item
    const newCartItem = new Cart({
      userId,
      name,
      description,
      price,
      image,
      category,
      productId,
      quantity: 1,
    });

    const savedItem = await newCartItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update item quantity in the cart
router.put('/update-quantity/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { action } = req.body; // "increment" or "decrement"

    const cartItem = await Cart.findOne({ productId: id});

    if (!cartItem) {
      return res.status(404).json({ error: "Item not found." });
    }

    if (action === 'increment') {
      cartItem.quantity += 1;
    } else if (action === 'decrement') {
      cartItem.quantity = Math.max(cartItem.quantity - 1, 0); // Prevent negative quantity
    } else {
      return res.status(400).json({ error: "Invalid action." });
    }

    const updatedItem = await cartItem.save();
    res.status(200).json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get('/getAll', async (req, res) => {
  try {
    // Fetch all cart items for admin
    const cartItems = await Cart.find(); // No filtering by userId
    res.status(200).json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});




module.exports = router;
