// src/HomePage.js
import React from 'react';
import './HomePage.css';
import logo from './logo.png';

const HomePage = ({ onOrderNow, onAboutClick }) => {
    return (
        <div className="home-page">
            <nav className="navbar">
                <div className="logo-container">
                    <img src={logo} alt="YummyRoute Logo" className="logo" />
                    <span className="website-name">YummyRoute</span>
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    {/* Use onClick on the anchor tag */}
                    <li><a href="#about" onClick={(e) => { e.preventDefault(); onAboutClick(); }}>About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="home-content">
                <h1>Welcome to YummyRoute Our Food Ordering App</h1>
                <p>Your next Meal is just a click Away</p>
                <button className="order-button" onClick={onOrderNow}>Order Now</button>
            </div>
        </div>
    );
};

export default HomePage;
