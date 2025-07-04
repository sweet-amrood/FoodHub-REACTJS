import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./restaurant.css";

import background1Img from "./assets/background.jpg";

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAddressPopupOpen, setIsAddressPopupOpen] = useState(true);
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);
  const [address, setAddress] = useState({});
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [addressError, setAddressError] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCartItems(savedCart);
    } else {
      setCartItems([]); 
    }
  }, []);

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.quantity * parseInt(item.price.replace("rs.", "")),
      0
    );
    setTotalBill(total);
  }, [cartItems]);

  const handleProceedToCheckout = () => {
    setIsPopupOpen(true); 
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([])); 
  };

  const handleAddMoreItems = () => {
    navigate("/restaurant"); 
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  
  const handleBackToAddress = () => {
    setIsPaymentPopupOpen(false);
    setIsAddressPopupOpen(true);
  };

  // Address validation
  const handleAddressSubmit = () => {
  if (!address.houseNumber || !address.streetNumber || !address.area || !address.city) {
    setAddressError("All fields must be filled in.");
    return;
  }
  setAddressError(''); 

  
  localStorage.setItem('address', JSON.stringify(address));


  setIsAddressPopupOpen(false);
  setIsPaymentPopupOpen(true);
};

const handlePaymentMethodSelect = (method) => {
  setPaymentMethod(method);
  setIsPaymentPopupOpen(true); 

  if (method === "cash") {

    handlePaymentSubmit(method);
  }
};


useEffect(() => {
  const savedAddress = JSON.parse(localStorage.getItem('address'));
  if (savedAddress) {
    setAddress(savedAddress); 
  }
}, []);




  const handleCardPaymentSubmit = () => {
    const { cardNumber, expiryDate, cvv } = cardDetails;


    const cardNumberRegex = /^[0-9]{16}$/; 
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/; 
    const cvvRegex = /^[0-9]{3}$/; 

    
    if (!cardNumber || !cardNumber.match(cardNumberRegex)) {
      alert("Please enter a valid 16-digit card number.");
      return;
    }

  
    if (!expiryDate || !expiryDate.match(expiryDateRegex)) {
      alert("Please enter a valid expiry date (MM/YY).");
      return;
    }


    if (!cvv || !cvv.match(cvvRegex)) {
      alert("Please enter a valid 3-digit CVV.");
      return;
    }

    const [expMonth, expYear] = expiryDate.split("/").map((str) => parseInt(str));
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; 


    const expiryDateObj = new Date(expYear + 2000, expMonth - 1); 
    const currentDateObj = new Date(currentYear, currentMonth - 1);

    if (expiryDateObj < currentDateObj) {
      alert("The expiry date has passed. Please enter a valid expiry date.");
      return;
    }

   
    handlePaymentSubmit();
  };

 
  const handlePaymentSubmit = async (methodOverride = null) => {
  if (isSubmitting) return;
  setIsSubmitting(true);

  const methodToUse = methodOverride || paymentMethod;

  if (!methodToUse || !cartItems.length || !totalBill || !address) {
    alert("Please complete all fields.");
    setIsSubmitting(false);
    return;
  }

  const orderNumber = `ORD-${Math.floor(Math.random() * 10000)}`;

  const orderDetails = {
    orderNumber,
    cartItems,
    totalBill,
    address,
    paymentMethod: methodToUse,
    cardDetails: methodToUse === 'card' ? cardDetails : undefined,
  };

  try {
    const response = await axios.post("http://localhost:5000/placeOrder", orderDetails);
    console.log("Order placed successfully:", response.data);

    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));

    navigate("/orderconfirmation", { state: { orderDetails } });
  } catch (error) {
    console.error("Error placing the order:", error);
    alert("Error placing the order. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="main" style={{
      backgroundImage: `url(${background1Img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', 
      height: '1000px', 
      width: '100%', 
    }}>
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
            <a href="/login" className="font-semibold hover:text-red-500"><b>Login</b></a>
            <a href="/signup" className="font-semibold hover:text-red-500"><b>Sign Up</b></a>
          </nav>

          <a href="/cart" style={{ marginRight: '20px' }} className="text-xl cart-icon hover:text-red-500">
            <i className="bi bi-cart-fill"></i>
          </a>
        </div>
      </header>

      <div className="cart-container">
        <h3>Your Cart</h3>

        <div className="checkout-table">
          <div className="checkout-header">
            <div className="header-item">Item</div>
            <div className="header-item">Quantity</div>
            <div className="header-item">Price Per Unit</div>
            <div className="header-item">Total Price</div>
          </div>

          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="checkout-item" key={index}>
                <div className="item-name">{item.name}</div>
                <div className="item-quantity">{item.quantity}</div>
                <div className="item-price">{item.price}</div>
                <div className="item-total">
                  {item.quantity * parseInt(item.price.replace('rs.', ''))}
                </div>
              </div>
            ))
          )}

          <div className="checkout-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>Rs. {totalBill}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>Rs. 100</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>Rs. {totalBill + 100}</span> {/* Adding Delivery Fee */}
            </div>
          </div>

          <div className="checkout-buttons">
            <button onClick={handleProceedToCheckout} className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>

          {/* Clear Cart and Add More Items Buttons */}
          <div className="additional-buttons">
            <button onClick={handleClearCart} className="clear-btn">
              Clear Cart
            </button>
            <button onClick={handleAddMoreItems} className="add-items-btn">
              Add More Items
            </button>
          </div>
        </div>
      </div>

      {/* Popup for Address and Payment */}
      {isPopupOpen && (
        <div className="popup-overlay show" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <span className="close" onClick={handleClosePopup}>×</span>

            {/* Address Form */}
            {isAddressPopupOpen && (
              <>
                <h3>Enter Address</h3>
                <input
                  type="text"
                  placeholder="House Number"
                  onChange={(e) => setAddress({ ...address, houseNumber: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Street Number"
                  onChange={(e) => setAddress({ ...address, streetNumber: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Area"
                  onChange={(e) => setAddress({ ...address, area: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="City"
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                />
                {addressError && <p style={{ color: "red" }}>{addressError}</p>}
                <button onClick={handleAddressSubmit}>Next</button>
              </>
            )}

            {/* Payment Form */}
            {isPaymentPopupOpen && (
              <>
                <h3>Select Payment Method</h3>
                <div>
                  <button onClick={() => handlePaymentMethodSelect("cash")}>Cash on Delivery</button>
                  <button onClick={() => handlePaymentMethodSelect("card")}>Pay by Card</button>
                </div>

                {paymentMethod === "card" && (
                  <div>
                    <input
                      type="text"
                      placeholder="Card Number"
                      value={cardDetails.cardNumber}
                      onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Expiry Date"
                      value={cardDetails.expiryDate}
                      onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      value={cardDetails.cvv}
                      onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                    />
                    <button onClick={handleCardPaymentSubmit}>Submit Payment</button>
                  </div>
                )}
              </>
            )}

            {/* Back Button to go to Address Step */}
            {isPaymentPopupOpen && (
              <button onClick={handleBackToAddress}>Back</button>
            )}
          </div>
        </div>
      )}

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

export default CartPage;