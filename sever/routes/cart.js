
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  cartitems: Array,
  totalPrice: Number
});

const Order = mongoose.model('Order', orderSchema);

router.post('/api/checkout', async (req, res) => {
  const { cartitems, totalPrice } = req.body;

  const order = new Order({ cartitems, totalPrice });
  try {
    await order.save();
    res.status(200).json({ orderId: order._id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save order' });
  }
});

router.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve orders' });
  }
});
module.exports = router;
