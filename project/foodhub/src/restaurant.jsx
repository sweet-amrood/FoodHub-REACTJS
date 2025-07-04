import React, { useState } from "react";
import Popup from "./popup";
import { useNavigate } from "react-router-dom";
import "./restaurant.css";

import biryaniImg from "./assets/biryani.png";
import karahiImg from './assets/karahi.jpeg';
import bbqImg from './assets/bbq.jpg';
import burgerImg from './assets/burger.jpeg';
import nihariImg from './assets/nihari.jpeg';
import pastaImg from './assets/chinese.jpg';
import savourImg from './assets/savour.jpeg';
import mazangprathaImg from './assets/mazangpratha.jpg';
import cheeziousImg from './assets/cheezious.jpg';
import papajohnsImg from './assets/papajohns.png';
import mcdonaldsImg from './assets/mcdonalds.png';
import kfcImg from './assets/kfc.png';
import subwayImg from './assets/subway.png';
import yumsImg from './assets/yums.jpeg';
import haveliImg from './assets/haveli.jpeg';


const RestaurantPage = () => {
  const [cart, setCart] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);
  const navigate = useNavigate();

  const restaurantData = [
    {
      name: "Master Biryani",
      image: biryaniImg,
      description: "Specializing in authentic Hyderabadi and Sindhi biryani",
      rating: "★★★★☆ 4.2",
      location: "Mall Road, Lahore",
      menu: [
        { name: 'Hyderabadi Biryani', price: 'rs.400' },
        { name: 'Sindhi Biryani', price: 'rs.450' },
        { name: 'Tikka Biryani', price: 'rs.650' },
        { name: 'Biryani full', price: 'rs.500' },
        { name: 'Biryani Half', price: 'rs.250' },
        { name: 'Raita & Salad', price: 'rs.100' },
        { name: 'Bottle', price: 'rs.60' },
        { name: 'Mineral Water', price: 'rs.50' },
      ],
    },
    {
      name: "butt Karahi",
      image: karahiImg,
      description: "Famous for its rich, flavorful Karahi dishes and traditional Punjabi spices",
      rating: "★★★★☆ 4.6",
      location: "Lakshami Chowk, Lahore",
      menu: [
        { name: 'Chicken Karahi', price: 'rs.2500' },
        { name: 'Mutton Karahi', price: 'rs.4700' },
        { name: 'beef Karahi', price: 'rs.3500' },
        { name: 'Naan', price: '50' },
        { name: 'Raita & Salad', price: 'rs.100' },
        { name: 'Bottle', price: 'rs.60' },
        { name: 'Mineral Water', price: 'rs.50' },
      ],
    },
    {
      name: "Grill Badshah",
      image: bbqImg,
      description: "Known for its royal grilled delicacies and mouth-watering barbecue.",
      rating: "★★★★★ 4.8",
      location: "cantt, Lahore",
      menu: [
        { name: 'Tikka', price: 'rs.450' },
        { name: 'Seekh Kababs', price: 'rs.400' },
        { name: 'Kastoori Boti', price: 'rs.750' },
        { name: 'Makhan Tikka', price: 'rs.750' },
        { name: 'Makhan Kastoori Boti', price: 'rs.450' },
        { name: 'Makhan Seekh Kababs', price: 'rs.700' },
        { name: 'Grilled Chicken Piece', price: 'rs.850' },
        { name: 'Naan', price: '50' },
        { name: ' Garlic Naan', price: '80' },
        { name: 'Raita', price: 'rs.80' },
        { name: 'Bottle', price: 'rs.70' },
        { name: 'Mineral Water', price: 'rs.60' },
      ],
    },
    {
      name: "Ranchers",
      image: burgerImg,
      description: "Serving the finest steaks and grilled and zinger burgres in a cozy, rustic setting.",
      rating: "★★★★☆ 4.4",
      location: "Shalimar Road, Lahore",
      menu: [
        { name: 'Krunch', price: 'rs.399' },
        { name: 'Bronco Chicken Burger', price: 'rs.599' },
        { name: 'Cronco Chicken Burger', price: 'rs.599' },
        { name: 'Chee Haww Chicken', price: 'rs.899' },
        { name: 'Mighty Rodeo Chicken', price: 'rs.899' },
        { name: 'Big Bang', price: 'rs.899' },
        { name: 'Big Ben', price: 'rs.899' },
        { name: 'Fries', price: 'rs.199' },
        { name: 'Curly Fries', price: 'rs.349' },
        { name: 'Gun Smoked Fries', price: 'rs.449' },
        { name: 'Waffle Fries', price: 'rs.349' },
        { name: 'Rancheese', price: 'rs.699' },
        { name: 'Cheeky Fries', price: 'rs.649' },
      ],
    },
    {
      name: "Waris Nihari House",
      image: nihariImg,
      description: "A legendary destination for authentic, slow-cooked Nihari",
      rating: "★★★★☆ 4.5",
      location: "Anarkali, Lahore",
      menu: [
        { name: 'Full Nihari', price: 'rs.1700' },
        { name: 'Half Nihari', price: 'rs.900' },
        { name: 'Nihari', price: 'rs.700' },
        { name: 'Full Magz Nihari', price: 'rs.2200' },
        { name: 'Half Magz Nihari', price: 'rs.900' },
        { name: 'Full Nalli Nihari', price: 'rs.2300' },
        { name: 'Half Nalli Nihari', price: 'rs.900' },
        { name: 'Magz Nihari', price: 'rs.1900' },
        { name: 'Nalli Nihari', price: 'rs.1900' },
        { name: 'Naan', price: 'rs.50' },
        { name: 'Cold Drink', price: 'rs.220' },
      ],
    },
    {
      name: "Novu",
      image: pastaImg,
      description: "A modern eatery offering exquisite Asian fusion cuisine with a creative twist.",
      rating: "★★★★★ 4.8",
      location: "Gulberg, Lahore",
      menu: [
        { name: "Sushi Rolls", price: "rs.800" },
        { name: "Dim Sum", price: "rs.650" },
        { name: "Ramen", price: "rs.950" },
        { name: "Teriyaki Chicken", price: "rs.700" },
        { name: "Beef Udon", price: "rs.850" },
        { name: "Miso Soup", price: "rs.200" },
        { name: "Edamame", price: "rs.250" },
        { name: "Green Tea", price: "rs.100" },
      ],
    },
    {
      name: "Savour Foods",
      image: savourImg,
      description: "Serving deliciously flavorful Pakistani cuisine with a variety of traditional dishes.",
      rating: "★★★★★ 4.7",
      location: "Lakshami Chowk, Lahore",
      menu: [
        { name: "Biryani", price: "rs.450" },
        { name: "Mutton Karahi", price: "rs.1200" },
        { name: "Chicken Biryani", price: "rs.550" },
        { name: "Seekh Kebabs", price: "rs.400" },
        { name: "Nihari", price: "rs.700" },
        { name: "Chapli Kebab", price: "rs.600" },
        { name: "Naan", price: "rs.50" },
        { name: "Garlic Naan", price: "rs.80" },
        { name: "Dahi Bhalla", price: "rs.150" },
        { name: "Cold Drink", price: "rs.100" },
      ],
    },
    {
      name: "Mazang Paratha",
      image: mazangprathaImg,
      description: "Famous for its crispy, buttery parathas and a variety of fillings.",
      rating: "★★★★☆ 4.2",
      location: "Jail Road, Lahore",
      menu: [
        { name: "Aloo Paratha", price: "rs.150" },
        { name: "Keema Paratha", price: "rs.250" },
        { name: "Chicken Paratha", price: "rs.300" },
        { name: "Paneer Paratha", price: "rs.180" },
        { name: "Gobi Paratha", price: "rs.160" },
        { name: "Raita", price: "rs.50" },
        { name: "Lassi", price: "rs.120" },
        { name: "Mint Chutney", price: "rs.30" },
      ],
    },
    {
      name: "cheezious",
      image: cheeziousImg,
      description: "A cheesy haven with gourmet pizzas and loaded cheesy bites.",
      rating: "★★★★★ 4.8",
      location: "shadbagh, Lahore",
      menu: [
        { name: "Cheezy Sticks", price: "rs.630" },
        { name: "Oven Baked Wings", price: "rs.600" },
        { name: "Flaming Wings", price: "rs.650" },
        { name: "Calzone Chunks (4 pcs)", price: "rs.1150" },
        { name: "Arabic Rolls (4 pcs)", price: "rs.690" },
        { name: "Bihari Rolls (4 pcs)", price: "rs.690" },
        { name: "Bazooka", price: "rs.690" },
        { name: "Fries + Regular Drink", price: "rs.930" }
      ]

    },
    {
      name: "Papa Johns",
      image: papajohnsImg,
      description: "Known for its fresh, hand-crafted pizzas and signature cheese-filled crust.",
      rating: "★★★★☆ 4.2",
      location: "Iqbal Town, Lahore",
      menu: [
        { name: "Cheese Pizza (Small)", price: "rs.799" },
        { name: "Pepperoni Pizza (Small)", price: "rs.899" },
        { name: "Ultimate Meats Pizza (Medium)", price: "rs.1299" },
        { name: "BBQ Chicken Pizza (Large)", price: "rs.1499" },
        { name: "Cheesy Breadsticks", price: "rs.499" },
        { name: "Garlic Parmesan Breadsticks", price: "rs.499" },
        { name: "Chicken Wings (6 pcs)", price: "rs.799" },
        { name: "Cinnamon Pull-Apart", price: "rs.599" }
      ]

    },
    {
      name: "Mc Donalds",
      image: mcdonaldsImg,
      description: "Offering fast, delicious burgers and fries with quick service worldwide.",
      rating: "★★★★★ 4.9",
      location: "DHA, Lahore",
      menu: [
        { name: "Big Mac", price: "rs.982.81" },
        { name: "Quarter Pounder with Cheese", price: "rs.985.23" },
        { name: "McChicken", price: "rs.509" },
        { name: "Spicy McCrispy", price: "rs.612" },
        { name: "Chicken Mac", price: "rs.638" },
        { name: "McArabia", price: "rs.358" },
        { name: "Filet-o-Fish", price: "rs.495" },
        { name: "Chicken McNuggets (6 pcs)", price: "rs.375" }
      ]

    },
    {
      name: "KFC",
      image: kfcImg,
      description: "World-renowned for its crispy fried chicken and finger-licking good meals.",
      rating: "★★★★★ 4.8",
      location: "Mall Road, Lahore",
      menu: [
        { name: "Zinger Burger", price: "rs.600" },
        { name: "Zinger Stacker", price: "rs.660" },
        { name: "Kentucky Burger", price: "rs.660" },
        { name: "Mighty Zinger", price: "rs.770" },
        { name: "Zinger Combo", price: "rs.910" },
        { name: "Value Bucket (9 pcs)", price: "rs.2050" },
        { name: "Family Festival 3", price: "rs.2590" },
        { name: "Crispy Chicken", price: "rs.550" }
      ]

    },
    {
      name: "Subway",
      image: subwayImg,
      description: "Customizable, fresh sandwiches made with a variety of fresh ingredients.",
      rating: "★★★★☆ 4.3",
      location: "Mall road, Lahore",
      menu: [
        { name: "Chicken Tikka Sub (6 inch)", price: "rs.700" },
        { name: "Chicken Fajita Sub (6 inch)", price: "rs.700" },
        { name: "Roasted Chicken Breast Sub (6 inch)", price: "rs.630" },
        { name: "Peri Peri Chicken Sub (6 inch)", price: "rs.700" },
        { name: "Italian B.M.T.® Sub (6 inch)", price: "rs.700" },
        { name: "Veggie Delite® Sub (6 inch)", price: "rs.500" },
        { name: "BBQ Chicken Sub (6 inch)", price: "rs.700" },
        { name: "Chicken Teriyaki Sub (6 inch)", price: "rs.700" }
      ]

    },
    {
      name: "Yum Chinese & Thai",
      image: yumsImg,
      description: "Bringing bold flavors with an array of Chinese and Thai specialties.",
      rating: "★★★★☆ 4.4",
      location: "Gulberg, Lahore",
      menu: [
        { name: "Honey Lemon Chilli Prawn", price: "rs.2695" },
        { name: "Sesame Honey Chilli Chicken", price: "rs.1795" },
        { name: "Prawns in Black Bean Sauce", price: "rs.2775" },
        { name: "Szechuan-style Braised Prawns", price: "rs.2775" },
        { name: "Khao Phad Gai (Chicken Fried Rice)", price: "rs.1595" },
        { name: "Khao Phad Goong (Prawn Fried Rice)", price: "rs.1795" },
        { name: "Khao Phad Phak (Vegetable Fried Rice)", price: "rs.1595" },
        { name: "Yum Special Ped (Roasted Duck)", price: "rs.5295" }
      ]

    },
    {
      name: "Haveli Restaurant",
      image: haveliImg,
      description: "A luxury dining experience offering Mughlai and traditional Pakistani cuisine.",
      rating: "★★★★☆ 4.5",
      location: "Old Lahore, Lahore",
      menu: [
        { name: "Halwa Puri", price: "rs.395" },
        { name: "Fry Egg", price: "rs.245" },
        { name: "Omelette", price: "rs.295" },
        { name: "Cheese Omelette", price: "rs.345" },
        { name: "Haveli Special Omelette", price: "rs.445" },
        { name: "Lassi", price: "rs.245" },
        { name: "Paratha", price: "rs.245" },
        { name: "Aloo Paratha", price: "rs.295" },
        { name: "Qeema Wala Paratha", price: "rs.345" },
        { name: "Kulcha", price: "rs.295" },
        { name: "Chicken Channay", price: "rs.395" },
        { name: "Anda Channay", price: "rs.345" },
        { name: "Murgh Channay", price: "rs.445" },
        { name: "Shahi Paneer", price: "rs.545" },
        { name: "Paneer Tikka", price: "rs.545" },
        { name: "Mutter Paneer", price: "rs.545" },
        { name: "Methi Malai Murg", price: "rs.645" },
        { name: "Mutton Karahi", price: "rs.1045" },
        { name: "Mutton Black Pepper Karahi", price: "rs.1145" },
        { name: "Mutton Green Chilli Karahi", price: "rs.1245" },
        { name: "Mutton Saag Karahi", price: "rs.1345" },
        { name: "Mutton Seekh Kebab", price: "rs.545" },
        { name: "Chicken Seekh Kebab", price: "rs.445" },
        { name: "Murgh Channay", price: "rs.445" },
        { name: "Mutton Biryani", price: "rs.645" },
        { name: "Chicken Biryani", price: "rs.545" },
        { name: "Jangli Pulao", price: "rs.745" },
        { name: "Mutton Pulao", price: "rs.745" }
      ]

    },

    // Add more restaurants here
  ];

  const handlePopupOpen = (restaurant) => {
    console.log("Popup Opened for:", restaurant.name);
    setCurrentRestaurant(restaurant);
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleAddToCart = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.name === item.name
      );
      if (existingItem) {
        existingItem.quantity += quantity;
        return [...prevCart];
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const handleProceedToCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart)); 
    navigate("/cart"); 
  };

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

      <main className="restaurants-page">
        <h1>Our Featured Restaurants</h1>
        <div className="restaurant-grid">
          {restaurantData.map((restaurant) => (
            <div
              key={restaurant.name}
              className="restaurant-card"
              onClick={() => handlePopupOpen(restaurant)}
            >
              <img src={restaurant.image} alt={restaurant.name} />
              <h2>{restaurant.name}</h2>
              <p>{restaurant.description}</p>
              <div className="rating">{restaurant.rating}</div>
              <p><i className="fas fa-map-marker-alt"></i> {restaurant.location}</p>
            </div>
          ))}
        </div>

        {isPopupOpen && (
          <Popup
            restaurant={currentRestaurant}
            onClose={handlePopupClose}
            onAddToCart={handleAddToCart}
          />
        )}


        <div className="checkout-table">
          <h3>Your Order</h3>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-bill">
            Total: Rs.{" "}
            {cart.reduce((total, item) => total + item.quantity * parseInt(item.price.replace("rs.", "")), 0)}
          </div>
          <button onClick={handleProceedToCart}>Proceed to Cart</button>
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
    </div>
  );
};

export default RestaurantPage;
