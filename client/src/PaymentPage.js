// PaymentPage.js
import React, { useState } from 'react';

const PaymentPage = ({ onPaymentSuccess, cart, setPage }) => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();

    // Validate payment details if necessary
    if (paymentMethod === 'creditCard' || paymentMethod === 'debitCard') {
      if (!cardNumber || !expiryDate || !cvv) {
        setError('Please fill in all payment details.');
        return;
      }
    }

    // Calculate total amount
    const totalAmount = cart.reduce((total, item) => total + item.price, 0);
    
    // Call onPaymentSuccess with payment details
    onPaymentSuccess(totalAmount, paymentMethod);
    
    // Redirect to order details page after successful payment
    setPage("orderDetails");
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Payment Page</h1>
      <h2>Your Order Summary</h2>
      <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>

      <form onSubmit={handlePayment}>
        <div>
          <label>
            <input 
              type="radio" 
              value="creditCard" 
              checked={paymentMethod === 'creditCard'} 
              onChange={() => setPaymentMethod('creditCard')} 
            />
            Credit Card
          </label>
          <label>
            <input 
              type="radio" 
              value="debitCard" 
              checked={paymentMethod === 'debitCard'} 
              onChange={() => setPaymentMethod('debitCard')} 
            />
            Debit Card
          </label>
          <label>
            <input 
              type="radio" 
              value="payOnDelivery" 
              checked={paymentMethod === 'payOnDelivery'} 
              onChange={() => setPaymentMethod('payOnDelivery')} 
            />
            Pay on Delivery
          </label>
        </div>

        {paymentMethod !== 'payOnDelivery' && (
          <>
            <div>
              <label>
                Card Number:
                <input 
                  type="text" 
                  value={cardNumber} 
                  onChange={(e) => setCardNumber(e.target.value)} 
                  placeholder="1234 5678 9012 3456" 
                  required 
                />
              </label>
            </div>
            <div>
              <label>
                Expiry Date:
                <input 
                  type="text" 
                  value={expiryDate} 
                  onChange={(e) => setExpiryDate(e.target.value)} 
                  placeholder="MM/YY" 
                  required 
                />
              </label>
            </div>
            <div>
              <label>
                CVV:
                <input 
                  type="text" 
                  value={cvv} 
                  onChange={(e) => setCvv(e.target.value)} 
                  placeholder="123" 
                  required 
                />
              </label>
            </div>
          </>
        )}

        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
