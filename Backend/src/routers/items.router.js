const express = require('express');
const Item = require('../models/items.model');  // Ensure path is correct

const router = express.Router();

// GET route to fetch all items grouped by category
router.get('/', async (req, res) => {
  try {
    // Use MongoDB's aggregation to group items by category
    const itemsByCategory = await Item.aggregate([
      {
        $group: {
          _id: "$category",  // Group by category
          items: { $push: "$$ROOT" }  // Push all items in the same category
        }
      },
      {
        $sort: { _id: 1 }  // Sort categories alphabetically by category name
      }
    ]);

    res.status(200).json({
      success: true,
      data: itemsByCategory,
    });
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching items',
    });
  }
});

module.exports = router;
