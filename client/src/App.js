// src/App.js
import React, { useState } from "react";
import "./App.css";
import HomePage from "./HomePage";
import Login from "./Login";
import FoodDisplay from "./FoodDisplay";
import OrderDetails from "./OrderDetails";
import RestaurantOrders from "./RestaurantOrders";
import About from "./About";
import PaymentPage from "./PaymentPage";

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [totalAmount, setTotalAmount] = useState(0); // Store the total amount

  const addToCart = (food) => {
    setCart((prevCart) => [...prevCart, food]);
  };

  const handleLogin = () => {
    setPage("foodDisplay");
  };

  const handleCheckout = () => {
    setPage("payment"); // Change page state to "payment" to show PaymentPage
  };

  const handlePaymentSuccess = (method) => {
    const calculatedTotal = cart.reduce((total, item) => total + item.price, 0); // Calculate total amount
    setTotalAmount(calculatedTotal); // Set the total amount

    setPaymentMethod(method);
    
    // Update orders with the total amount and payment method
    setOrders((prevOrders) => [
      ...prevOrders,
      { cart, totalAmount: calculatedTotal, paymentMethod: method }
    ]);
    setCart([]);
    setPaymentComplete(true);
    setPage("orderDetails"); // Navigate to Order Details page
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <HomePage
            onOrderNow={() => setPage("login")}
            onAboutClick={() => setPage("about")}
          />
        );
      case "login":
        return <Login onLogin={handleLogin} />;
      case "foodDisplay":
        return <FoodDisplay addToCart={addToCart} cart={cart} onCheckout={handleCheckout} />;
      case "payment":
        return <PaymentPage onPaymentSuccess={handlePaymentSuccess} cart={cart} setPage={setPage} />;
      case "orderDetails":
        return <OrderDetails cart={cart} totalAmount={totalAmount} paymentMethod={paymentMethod} />;
      case "restaurantOrders":
        return <RestaurantOrders orders={orders} />;
      case "about":
        return <About />;
      default:
        return null;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;
