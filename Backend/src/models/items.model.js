// models/Product.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
   name: { type: String, required: true },
   description: String,
   price: { type: Number, required: true },
   image: String,
   category: String,
   qty: { type: Number, default: 1 } 
});

module.exports = mongoose.model('Item', itemSchema);
