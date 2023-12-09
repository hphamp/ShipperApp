// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [orderId, setOrderId] = useState('');

  const handleDelivery = () => {
    // Xử lý logic khi đơn hàng đang giao
    console.log(`Đang giao đơn hàng ${orderId}`);
  };

  const handleReceived = () => {
    // Xử lý logic khi đơn hàng đã nhận hàng
    console.log(`Đã nhận hàng ${orderId}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shipper App</h1>
        <div>
          <label>Nhập ID đơn hàng:</label>
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
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
