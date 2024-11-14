const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Change to your MySQL username
  password: '', // Change to your MySQL password
  database: 'yummy_route', // Ensure you have created the database
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the database');
});

// Endpoint to handle checkout and insert into the database
app.post('/checkout', (req, res) => {
  const cartItems = req.body;

  // Loop through each item and insert into MySQL
  cartItems.forEach(item => {
    const { name, price } = item;
    const query = 'INSERT INTO orders_items(item_name, price) VALUES (?, ?)';
    db.query(query, [name, price], (err, result) => {
      if (err) {
        console.error('Error inserting order:', err);
        return res.status(500).json({ message: 'Error placing order' });
      }
    });
  });

  res.status(200).json({ message: 'Order placed successfully' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
