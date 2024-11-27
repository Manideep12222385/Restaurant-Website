// models/Deal.js
const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
   heading: { type: String, required: true },
   description: String,
   image: String,
   discount: { type: Number, default: 0 },  // You can add a discount percentage or amount
   expirationDate: { type: Date },  // Optional: You can set a date when the deal expires
   category: String,  // Optional: If deals are categorized
});

module.exports = mongoose.model('Deal', dealSchema);
