import React from "react";
import { Link } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import conceptImage from "./assets/concept.jpg";

export default function ConceptPage() {
  return (
    <>
    <head>
        <link rel="icon" href="/images.png" />
        <title>About Us - FoodHub</title>
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
          <a href="/concept" className="font-semibold hover:text-red-500"><b>About Us</b></a>
          <a href="/restaurant" className="font-semibold hover:text-red-500"><b>Restaurants</b></a>
          <a href="/review" className="font-semibold hover:text-red-500"><b>Reviews</b></a>
          <a href="/contact" className="font-semibold hover:text-red-500"><b>Contact Us</b></a>
          <a href="/login" className="font-semibold hover:text-red-500"><b>Logout</b></a>
        </nav>

        <a href="/cart" style={{ marginRight: '20px' }} className="text-xl cart-icon hover:text-red-500">
          <i class="bi bi-cart-fill"></i>
        </a>
        </div>
      </header>

      <main className="concept-page">
        <h1>Our Concept</h1>

        <div className="concept-section">
          <div className="concept-image"
          style={{
            backgroundImage: `url(${conceptImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          >
          </div>
          <div className="concept-text">
            <h2>Bridging Restaurants and Food Lovers</h2>
            <p>
              FoodHub was born from a simple idea: to create a seamless connection
              between authentic Pakistani restaurants and food enthusiasts who
              appreciate quality cuisine.
            </p>

            <h3>Our Mission</h3>
            <p>We aim to:</p>
            <ul>
              <li>Showcase the best local restaurants and their specialties</li>
              <li>Provide a hassle-free ordering experience</li>
              <li>Support small businesses in the food industry</li>
              <li>Deliver authentic flavors to your doorstep</li>
            </ul>

            <h3>How It Works</h3>
            <ol>
              <li>Browse restaurants and menus</li>
              <li>Select your favorite dishes</li>
              <li>Choose delivery or pickup</li>
              <li>Pay securely online</li>
              <li>Enjoy your meal!</li>
            </ol>

            <h3>Future Plans</h3>
            <p>
              We're constantly working to expand our restaurant network and improve
              our service with features like:
            </p>
            <ul>
              <li>Real-time order tracking</li>
              <li>Scheduled deliveries</li>
              <li>Loyalty programs</li>
              <li>More payment options</li>
            </ul>
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
    </>
  );
}