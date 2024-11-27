const mongoose = require('mongoose');

const orderHistorySchema = new mongoose.Schema({
  userId: { type: String, required: true },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  // Define other fields here as necessary
});

const OrderHistory = mongoose.model('OrderHistory', orderHistorySchema);

module.exports = OrderHistory;
