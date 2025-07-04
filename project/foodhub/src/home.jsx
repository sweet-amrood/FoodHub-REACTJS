import React, { useState, useEffect } from 'react';
import './style.css';
import ReactDOM from 'react-dom';






const HeroSection = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const suggestions = [
  'Biryani', 'Karahi', 'BBQ', 'Burger', 'Nihari', 'Pizza', 'Pasta', 'Tandoori', 
  'Grill Badshah', 'Ranchers', 'Waris Nihari', 'Master Biryani', 'Butt Karahi', 
  'chin', 'Sushi', 'Tempura', 'Ramen', 'Dim Sum', 'Wagyu Steak', 'Korean BBQ', 
  'Truffle Fries', 'Ahi Poke Bowl', 'Lobster Roll', 'Seared Scallops', 'Charcoal Grilled Lamb', 
  'Peking Duck', 'Wok-Fried Noodles', 'Wasabi Salmon', 'Miso Soup', 'Bao Buns', 
  'Mazang Paratha', 'Egg Paratha', 'Aloo Paratha', 'Keema Paratha', 'Chana Paratha',
  'Mutton Paratha', 'Beef Paratha', 'Dahi Paratha', 'Paratha Roll', 'Paratha with Chutney',
  'Paneer Paratha', 'Shami Kebab', 'Samosa', 'Chana Chaat', 'Lassi', 'Aloo Tikki', 'Chana Puri',
  'Chapli Kebab', 'Seekh Kebab', 'Sajji', 'Mutton Korma', 'Chicken Handi', 
  'Gosht Nihari', 'Pulao', 'Saag', 'Makki Roti', 'Shahi Tukda', 'Halwa', 'Raita', 
  'Lassi', 'Pesarattu', 'Gulab Jamun', 'Fried Fish', 'Chana Masala'
];


  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() === '') {
      setResults([]);
    } else {
      const filtered = suggestions.filter((word) =>
        word.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    }
  };

  return (
    <section className="hero bg-gradient-to-r from-red-100 to-orange-100 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          <span id="element"></span> <br /> Food Delivered to Your Doorstep
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Order from your favorite local restaurants with just a few clicks
        </p>
        <div className="search-bar flex max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search for restaurants or cuisines..."
            className="w-full p-3 rounded-l-lg border border-gray-300 focus:outline-none"
            value={query}
            onChange={handleInputChange}
          />
            

          <button className="bg-red-500 text-white p-3 rounded-r-lg hover:bg-red-600 transition">
            <i className="fas fa-search"></i>
          </button>
        </div>
        {results.length > 0 && (
          <div className="results-list">
            <ul>
              {results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      new window.Typed('#element', {
        strings: [
          'Order Your Favorite Food',
          'Fresh and Tasty Meals',
          'Delivered Fast to You',
          'Craving Something Delicious?',
          'Your Food, Your Way',
          'Get It While It’s Hot!',
          'Eat What You Love',
          'Fast Delivery, Great Taste'
        ],
        typeSpeed: 65,
        backSpeed: 65,
        loop: true,
        onStringTyped: (arrayPos, self) => {
         
          document.getElementById('element').classList.add('typed');
        },
        onReset: (self) => {
          
          document.getElementById('element').classList.remove('typed');
        }
      });
    };
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <header
        className="flex justify-between items-center px-6 h-20 bg-white shadow-md"
        
      >
        <div className="homeNavbar">
          <div
            className="logo-container"
            style={{
              display: 'flex',
              alignItems: 'right',
            }}
          >
            <a href="/home" className="logo font-bold text-xl text-red-500 flex items-center gap-2">
              <i className="fas fa-utensils"></i> FoodHub
            </a>
          </div>
          <nav className="hidden md:flex space-x-6 mr-6">
            <a href="/concept" className="font-semibold hover:text-red-500">
              <b>About Us</b>
            </a>
            <a href="/restaurant" className="font-semibold hover:text-red-500">
              <b>Restaurants</b>
            </a>
            <a href="/review" className="font-semibold hover:text-red-500">
              <b>Reviews</b>
            </a>
            <a href="/contact" className="font-semibold hover:text-red-500">
              <b>Contact Us</b>
            </a>
            <a href="/login" className="font-semibold hover:text-red-500">
              <b>Logout</b>
            </a>
            
          </nav>
          <a href="/cart" style={{ marginRight: '20px' }} className="text-xl cart-icon hover:text-red-500 md-right-10">
            <i className="bi bi-cart-fill"></i>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Section */}
      <section className="featured grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-16 bg-gray-50">
        <div
          className="featured-item bg-white p-6 rounded-lg shadow-md text-center"
          onClick={() => (window.location.href = '/restaurant')}
        >
          <i className="fa-solid fa-bowl-food text-5xl text-red-500 mb-4"></i>
          <h1 className="block text-xl font-bold text-gray-800 mb-2">Biryani</h1>
          <h3 className="text-lg font-medium text-gray-600">Authentic Pakistani Cuisine</h3>
          <p className="text-gray-500 mt-2">Enjoy traditional flavors from top local chefs</p>
        </div>
        <div
          className="featured-item bg-white p-6 rounded-lg shadow-md text-center"
          onClick={() => (window.location.href = '/restaurant')}
        >
          <i className="fa-solid fa-burger text-5xl text-red-500 mb-4"></i>
          <h1 className="block text-xl font-bold text-gray-800 mb-2">Burger</h1>
          <h3 className="text-lg font-medium text-gray-600">Fast Food Favorites</h3>
          <p className="text-gray-500 mt-2">All your comfort food cravings satisfied</p>
        </div>
        <div
          className="featured-item bg-white p-6 rounded-lg shadow-md text-center"
          onClick={() => (window.location.href = '/restaurant')}
        >
          <i className="fa-duotone fa-solid fa-truck text-5xl text-red-500 mb-4"></i>
          <h1 className="block text-xl font-bold text-gray-800 mb-2">Fast Delivery</h1>
          <h3 className="text-lg font-medium text-gray-600">Lightning Fast Delivery</h3>
          <p className="text-gray-500 mt-2">Get your food while it's still hot</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose FoodHub?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          FoodHub brings together the best restaurants in your city, offering a seamless ordering experience with real-time tracking and secure payments. Whether you're craving traditional Pakistani dishes or international cuisine, we've got you covered.
        </p>
      </section>

      {/* Footer */}
      <footer className="site-footer bg-gray-900 text-white py-12 px-6">
        <div className="footer-container grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="./home" className="hover:text-red-400">
                  Home
                </a>
              </li>
              <li>
                <a href="./restaurant" className="hover:text-red-400">
                  Restaurants
                </a>
              </li>
              <li>
                <a href="./review" className="hover:text-red-400">
                  Reviews
                </a>
              </li>
              <li>
                <a href="./concept" className="hover:text-red-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="./contact" className="hover:text-red-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4">Our Restaurants</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-400">
                  Pakistani Cuisine
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400">
                  Fast Food
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400">
                  BBQ & Grill
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400">
                  Desserts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400">
                  Beverages
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center gap-2 mb-2">
              <i className="fas fa-map-marker-alt"></i> Model Town, Lahore, Pakistan
            </p>
            <p className="flex items-center gap-2 mb-2">
              <i className="fas fa-phone"></i> +92 300 1234567
            </p>
            <p className="flex items-center gap-2 mb-4">
              <i className="fas fa-envelope"></i> info@foodhub.com
            </p>
            <div className="social-links flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe for special offers</p>
            <form className="newsletter-form flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded text-gray-900"
              />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; 2023 FoodHub. All rights reserved.</p>
          <div className="footer-links flex justify-center gap-6 mt-2">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
