const express = require('express');
const router = express.Router();
const Cart = require("../models/cart.models"); // Import the Cart model

// Route to fetch cart items based on user ID and group by the createdAt date
router.get('/cart-history/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Query the database for the cart items and group by the createdAt date
    const cartItems = await Cart.aggregate([
      { $match: { userId } }, // Match cart items by userId
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, // Group by the creation date
          items: { $push: "$$ROOT" }, // Push all the cart item details into the 'items' array
        }
      },
      { $sort: { "_id": -1 } } // Sort by the createdAt date in descending order (latest first)
    ]);

    if (cartItems.length === 0) {
      return res.status(404).json({ error: 'No cart items found for this user' });
    }

    // If cart items exist, send them categorized by date as the response
    res.json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
