const express = require('express');
const Deal = require('../models/deals.model');  // Ensure the path to the Deal model is correct

const router = express.Router();

// GET route to fetch all deals
router.get('/', async (req, res) => {
  try {
    const deals = await Deal.find();  // Fetch all deals from the database
    
    res.status(200).json({
      success: true,
      data: deals,
    });
  } catch (error) {
    console.error('Error fetching deals:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching deals',
    });
  }
});

module.exports = router;
