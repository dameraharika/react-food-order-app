// src/RestaurantOrders.js
import React from 'react';

const RestaurantOrders = ({ orders }) => {
  return (
    <div>
      <h2>Restaurant Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet!</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <h3>Order {index + 1}</h3>
              <ul>
                {order.cart.map((item, idx) => (
                  <li key={idx}>
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
              <h4>Total: ${order.totalAmount}</h4>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantOrders;
