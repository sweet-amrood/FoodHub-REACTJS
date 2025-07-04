// backend/models/order.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true },
  cartItems: [
    {
      name: String,
      quantity: Number,
      price: String,
      total: Number,
    },
  ],
  totalBill: { type: Number, required: true },
  address: {
    houseNumber: String,
    streetNumber: String,
    area: String,
    city: String,
  },
  paymentMethod: { type: String, enum: ['cash', 'card'], required: true },
  orderDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
