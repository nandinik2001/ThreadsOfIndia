const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

let cart = [];

// Get all items in the cart
app.get('/api/cart/items', (req, res) => {
  res.json(cart);
});

// Add an item to the cart
app.post('/api/cart/items', (req, res) => {
  const item = req.body;
  cart.push(item);
  res.status(201).json(item);
});

// Clear the cart
app.delete('/api/cart/items', (req, res) => {
  cart = [];
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
