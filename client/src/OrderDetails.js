// src/OrderDetails.js
import React from 'react';

const OrderDetails = ({ cart, totalAmount, paymentMethod }) => {
    const styles = {
        container: {
            padding: '20px',
            maxWidth: '600px',
            margin: '0 auto',
            border: '1px solid #eaeaea',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
            fontFamily: 'Arial, sans-serif',
        },
        heading: {
            textAlign: 'center',
            color: '#333',
            marginBottom: '15px',
        },
        list: {
            listStyleType: 'none',
            padding: '0',
            margin: '0',
        },
        listItem: {
            padding: '10px',
            borderBottom: '1px solid #eaeaea',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'background-color 0.3s',
        },
        total: {
            fontWeight: 'bold',
            fontSize: '1.2em',
            marginTop: '20px',
            textAlign: 'center',
        },
        thankYou: {
            textAlign: 'center',
            marginTop: '10px',
            fontSize: '1em',
            color: '#666',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Order Details</h2>
            <ul style={styles.list}>
                {cart.map((item, index) => (
                    <li key={index} style={styles.listItem}>
                        <span>{item.name}</span>
                        <span>${item.price.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
            <h3 style={styles.total}>Total Amount: ${totalAmount.toFixed(2)}</h3>
            <h3 style={styles.total}>Payment Method: {paymentMethod}</h3>
            <p style={styles.thankYou}>Thank you for your order!</p>
        </div>
    );
};

export default OrderDetails;
