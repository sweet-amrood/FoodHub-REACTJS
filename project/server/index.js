const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/employee');
const OrderModel = require('./models/order'); 

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/employee', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("connection error:", err));


app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email, password })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("success");
        } else {
          res.json("invalid password");
        }
      } else {
        res.json("user not found");
      }
    })
});


app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/placeOrder', (req, res) => {
  console.log("Received order:", req.body);
  const { cartItems, totalBill, address, paymentMethod } = req.body;


  if (!cartItems || !totalBill || !address || !paymentMethod) {
    return res.status(400).json({ message: "Missing required fields", body: req.body });
  }

  
  const orderNumber = `ORD-${Math.floor(Math.random() * 10000)}`;


  const newOrder = {
    orderNumber,
    cartItems,
    totalBill,
    address,
    paymentMethod,
  };

 
  OrderModel.create(newOrder)
    .then(order => res.status(200).json({ message: 'Order placed successfully', order }))
    .catch(err => res.status(500).json({ message: 'Error placing order', error: err.message }));
});


app.listen(5000, () => {
  console.log("🚀 Server started on http://localhost:5000");
});
