import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './restaurant.css';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();  
  const [cartItems, setCartItems] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const [address, setAddress] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({});

  useEffect(() => {

    const orderDetails = location.state?.orderDetails;

    if (orderDetails) {

      setCartItems(orderDetails.cartItems);
      setTotalBill(orderDetails.totalBill);
      setAddress(orderDetails.address);
      setPaymentMethod(orderDetails.paymentMethod);
      setCardDetails(orderDetails.cardDetails || {});
    }
  }, [location.state]);

  return (
    <div>
       <header className="flex justify-between items-center px-6 h-20 bg-white shadow-md">

        <div className="homeNavbar">

          <div className="logo-container">
            <a
              href="http://localhost:5173/home"
              className="logo font-bold text-xl text-red-500 flex items-center gap-2"
            >
              <i className="fas fa-utensils"></i> FoodHub
            </a>
          </div>


          <nav className="hidden md:flex space-x-6 mr-6">
            <a href="/concept" className="font-semibold hover:text-red-500"><b>About Us</b></a>
            <a href="/restaurant" className="font-semibold hover:text-red-500"><b>Restaurants</b></a>
            <a href="/review" className="font-semibold hover:text-red-500"><b>Reviews</b></a>
            <a href="/contact" className="font-semibold hover:text-red-500"><b>Contact Us</b></a>
            <a href="/login" className="font-semibold hover:text-red-500"><b>Logout</b></a>
            
          </nav>

          <a href="/cart" style={{ marginRight: '20px' }} className="text-xl cart-icon hover:text-red-500">
            <i className="bi bi-cart-fill"></i>
          </a>
        </div>
      </header>

      <div className="order-confirmation-container">
        <h1>Order Confirmation</h1>

        
        <div className="order-summary">
          <h2 style={{justifyContent: 'center',}}>Order Summary</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan="4">Your cart is empty</td>
                </tr>
              ) : (
                cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity * parseInt(item.price.replace('rs.', ''))}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className="total-price">
            <h3>Total: Rs. {totalBill}</h3>
          </div>
        </div>

       
        <div className="address">
          <h2>Delivery Address</h2>
          <p>House Number: {address.houseNumber}</p>
          <p>Street Number: {address.streetNumber}</p>
          <p>Area: {address.area}</p>
          <p>City: {address.city}</p>
        </div>

       
        <div className="payment-details">
          <h2>Payment Details</h2>
          {paymentMethod === 'card' ? (
            <div>
              <p>Card Number: **** **** **** {cardDetails.cardNumber?.slice(-4)}</p>
              <p>Expiry Date: {cardDetails.expiryDate}</p>
              <p>CVV: ****</p>
            </div>
          ) : (
            <div>
              <p>Cash on Delivery (COD)</p>
              <p>COD Charges: Rs. 200</p>
            </div>
          )}
        </div>

      
        <div className="confirm-button">
          <button onClick={() => navigate('/home')}>Back to Home</button>
        </div>
      </div>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="./home">Home</a></li>
              <li><a href="./restaurants">Restaurants</a></li>
              <li><a href="./reviews">Reviews</a></li>
              <li><a href="./concept">About Us</a></li>
              <li><a href="./contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Our Restaurants</h3>
            <ul>
              <li><a href="#">Pakistani Cuisine</a></li>
              <li><a href="#">Fast Food</a></li>
              <li><a href="#">BBQ & Grill</a></li>
              <li><a href="#">Desserts</a></li>
              <li><a href="#">Beverages</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><i className="fas fa-map-marker-alt"></i> Model Town, Lahore, Pakistan</p>
            <p><i className="fas fa-phone"></i> +92 300 1234567</p>
            <p><i className="fas fa-envelope"></i> info@foodhub.com</p>

            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe for special offers</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 FoodHub. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OrderConfirmation;
