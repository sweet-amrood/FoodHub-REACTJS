import React, { useState } from "react";

const Popup = ({ restaurant, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState({});

  const handleIncreaseQuantity = (item) => {
    setQuantity((prev) => ({
      ...prev,
      [item.name]: (prev[item.name] || 0) + 1,
    }));
  };

  const handleDecreaseQuantity = (item) => {
    setQuantity((prev) => ({
      ...prev,
      [item.name]: Math.max((prev[item.name] || 0) - 1, 0),
    }));
  };

  const handleAddToCart = () => {
    const cartItems = restaurant.menu.filter(
      (item) => quantity[item.name] && quantity[item.name] > 0
    );
    cartItems.forEach((item) => {
      onAddToCart(item, quantity[item.name]);
    });
    onClose(); 
  };

  return (
    <div className={`popup-overlay ${restaurant ? "show" : ""}`} onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>×</span>
        <h2>{restaurant?.name}</h2>
        <ul className="menu-list">
          {restaurant?.menu.map((item) => (
            <li key={item.name}>
              <div className="menu-item">
                <p>{item.name} <span>{item.price}</span></p>
                <div className="quantity-controls">
                  <button className="quantity-button" onClick={() => handleDecreaseQuantity(item)}>-</button>
                  <input
                    type="number"
                    value={quantity[item.name] || 0}
                    readOnly
                    className="quantity-input"
                  />
                  <button className="quantity-button" onClick={() => handleIncreaseQuantity(item)}>+</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
       
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Popup;
