import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, subject, message });
  };

  return (
    
    <>

    <head>
        <link rel="icon" href="/images.png" />
        <title>Contact - FoodHub</title>
    </head>
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
            <Link to="/concept" className="font-semibold hover:text-red-500"><b>About Us</b></Link>
            <Link to="/restaurant" className="font-semibold hover:text-red-500"><b>Restaurants</b></Link>
            <Link to="/review" className="font-semibold hover:text-red-500"><b>Reviews</b></Link>
            <Link to="/contact" className="font-semibold hover:text-red-500"><b>Contact Us</b></Link>
            <Link to="/login" className="font-semibold hover:text-red-500"><b>Logout</b></Link>

          </nav>

          <Link to="/cart" style={{ marginRight: '20px' }} className="text-xl cart-icon hover:text-red-500">
            <i className="bi bi-cart-fill"></i>
          </Link>
        </div>
      </header>

      <main className="contact-page">
        <div className="contact-container">
          <h1>Contact FoodHub</h1>

          <div className="contact-grid">
            <div className="contact-form">
              <h2>Message Us</h2>
              <form onSubmit={handleSubmit}>
                <table className="message-table">
                  <tbody>
                    <tr>
                      <td><label htmlFor="name">Name:</label></td>
                      <td><input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /></td>
                    </tr>
                    <tr>
                      <td><label htmlFor="email">Email:</label></td>
                      <td><input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></td>
                    </tr>
                    <tr>
                      <td><label htmlFor="subject">Subject:</label></td>
                      <td><input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} /></td>
                    </tr>
                    <tr>
                      <td><label htmlFor="message">Message:</label></td>
                      <td><textarea id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required /></td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="submit-cell">
                        <button type="submit">Send Message</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>

            <div className="contact-info">
              <h2>Our Information</h2>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Model Town, Lahore, Pakistan</p>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <p>+92 300 1234567<br />+92 300 7654321</p>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <p>info@foodhub.com<br />support@foodhub.com</p>
              </div>
              <div className="info-item">
                <i className="fas fa-clock"></i>
                <p>Monday - Saturday: 9AM - 11PM<br />Sunday: 12PM - 10PM</p>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
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
    </>
  );
}

export default Contact;
