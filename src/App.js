// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [orderId, setOrderId] = useState('');

  const handleDelivery = () => {
    const desc = document.getElementById('desc').value;
    const requestBody = {
      deliveryStatusId: 2,
      lastUpdateAt: new Date().toLocaleTimeString(),
      desc: desc,
    };

    fetch('http://api.shopiec.shop/api/orders/order/' + orderId, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('API response:', data);
      })
      .catch(error => {
        console.error('API error:', error);
      });

    console.log(`Đang giao đơn hàng ${orderId}`);
  };

  const handleReceived = () => {
    const desc = document.getElementById('desc').value;
    const requestBody = {
      deliveryStatusId: 3,
      lastUpdateAt: new Date().toLocaleTimeString(),
      desc: desc,
    };

    fetch('http://api.shopiec.shop/api/orders/order/' + orderId, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('API response:', data);
      })
      .catch(error => {
        console.error('API error:', error);
      });
    console.log(`Đã nhận hàng ${orderId}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shipper App</h1>
        <div>
          <label>Nhập ID đơn hàng:</label>
          <input
            id="orderId"
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
          <label>NOTE:</label>
          <input
            id="desc"
            type="text"
          />
        </div>
        <div>
          <button onClick={handleDelivery}>Đã lấy hàng</button>
          <button onClick={handleReceived}>Đã giao hàng</button>
        </div>
      </header>
      <img
        src="http://res.cloudinary.com/dte2ps5qs/image/upload/v1702111323/izp7k5x6s6iicrawvekt.png"
        alt="Shopiec Logo"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}

export default App;
