import React, { useState } from 'react';
import './FoodDisplay.css';
import pizza from './pizza.jpeg';
import burger from './burger.jpeg';
import logo from './logo.png';
import sushi from './sushi.jpeg';
import pasta from './pasta.jpeg';
import salad from './salad.jpeg';
import steak from './steak.jpeg';
import tacos from './tacos.jpeg';
import sandwich from './sandwich.jpeg';
import ramen from './ramen.jpeg';
import dumplings from './dumplings.jpeg';
import fries from './fries.jpeg';
import iceCream from './icecream.jpeg';
import curry from './curry.jpeg';
import pancakes from './pancakes.jpeg';
import smoothie from './smoothie.jpeg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

// Expanded food data with multiple sections
const foodData = [
  { id: 1, name: 'Pizza', price: 10, imageUrl: pizza, section: 'Veg' },
  { id: 2, name: 'Pasta', price: 12, imageUrl: pasta, section: 'Veg' },
  { id: 3, name: 'Curry', price: 13, imageUrl: curry, section: 'Veg' },
  { id: 4, name: 'Veggie Burger', price: 6, imageUrl: burger, section: 'Veg' },
  { id: 5, name: 'Stir-Fried Tofu', price: 11, imageUrl: salad, section: 'Veg' },
  { id: 6, name: 'Chicken Burger', price: 8, imageUrl: burger, section: 'Non-Veg' },
  { id: 7, name: 'Steak', price: 20, imageUrl: steak, section: 'Non-Veg' },
  { id: 8, name: 'Grilled Fish', price: 18, imageUrl: ramen, section: 'Non-Veg' },
  { id: 9, name: 'Lamb Chops', price: 25, imageUrl: steak, section: 'Non-Veg' },
  { id: 10, name: 'Shrimp Tacos', price: 15, imageUrl: tacos, section: 'Non-Veg' },
  { id: 11, name: 'Spring Rolls', price: 5, imageUrl: dumplings, section: 'Starters' },
  { id: 12, name: 'Stuffed Mushrooms', price: 7, imageUrl: salad, section: 'Starters' },
  { id: 13, name: 'Mozzarella Sticks', price: 6, imageUrl: fries, section: 'Starters' },
  { id: 14, name: 'Chicken Wings', price: 9, imageUrl: burger, section: 'Starters' },
  { id: 15, name: 'Nachos', price: 8, imageUrl: tacos, section: 'Starters' },
  { id: 16, name: 'Ice Cream Sundae', price: 7, imageUrl: iceCream, section: 'Desserts' },
  { id: 17, name: 'Chocolate Cake', price: 9, imageUrl: pancakes, section: 'Desserts' },
  { id: 18, name: 'Cheesecake', price: 10, imageUrl: pasta, section: 'Desserts' },
  { id: 19, name: 'Brownie', price: 6, imageUrl: pancakes, section: 'Desserts' },
  { id: 20, name: 'Fruit Tart', price: 8, imageUrl: salad, section: 'Desserts' },
  { id: 21, name: 'Smoothie', price: 5, imageUrl: smoothie, section: 'Beverages' },
  { id: 22, name: 'Iced Coffee', price: 4, imageUrl: iceCream, section: 'Beverages' },
  { id: 23, name: 'Lemonade', price: 3, imageUrl: smoothie, section: 'Beverages' },
  { id: 24, name: 'Milkshake', price: 6, imageUrl: iceCream, section: 'Beverages' },
  { id: 25, name: 'Hot Chocolate', price: 5, imageUrl: pancakes, section: 'Beverages' },
  { id: 26, name: 'Fries', price: 4, imageUrl: fries, section: 'Sides' },
  { id: 27, name: 'Garlic Bread', price: 3, imageUrl: pizza, section: 'Sides' },
  { id: 28, name: 'Onion Rings', price: 5, imageUrl: fries, section: 'Sides' },
  { id: 29, name: 'Coleslaw', price: 3, imageUrl: salad, section: 'Sides' },
  { id: 30, name: 'Mashed Potatoes', price: 6, imageUrl: pasta, section: 'Sides' },
];

const FoodDisplay = ({ addToCart, cart, onCheckout }) => {
  const [cartItems, setCartItems] = useState([]);
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
  const navigate = useNavigate();  // Initialize the navigate function

  // Add item to cart
  const handleAddToCart = (food) => {
    setCartItems([...cartItems, food]);
  };

  // Checkout and send data to backend
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      axios.post('http://localhost:5000/checkout', cartItems)
        .then((response) => {
          alert('Order placed successfully!');
          setCartItems([]);  // Clear cart after checkout
          navigate('/payment');  // Navigate to PaymentPage
        })
        .catch((error) => {
          console.error('Checkout failed:', error);
        });
    } else {
      alert('Your cart is empty.');
    }
  };

  // Render each food section
  const renderFoodSection = (section) => (
    <div className="section" key={section}>
      <h2>{section}</h2>
      <ul className="food-list">
        {foodData
          .filter(food => food.section === section)
          .map(food => (
            <li key={food.id} className="food-item">
              <img src={food.imageUrl} alt={food.name} className="food-image" />
              <div className="food-details">
                <h3>{food.name}</h3>
                <p>Price: ${food.price}</p>
                <button onClick={() => handleAddToCart(food)}>Add to Cart</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );

  return (
    <div className="food-display-container">
      <header className="header">
        <img src={logo} alt="Website Logo" className="logo" />
        <h1 className="website-name">YummyRoute</h1>
      </header>

      {/* Render food sections */}
      {["Veg", "Non-Veg", "Starters", "Desserts", "Beverages", "Sides"].map(section => 
        renderFoodSection(section)
      )}

      {/* Cart Section */}
      <div className="cart">
        <h2>Your Cart</h2>
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <h3>Total: ${totalAmount}</h3>
        <button onClick={handleCheckout} disabled={cartItems.length === 0} className="checkout-btn">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default FoodDisplay;
