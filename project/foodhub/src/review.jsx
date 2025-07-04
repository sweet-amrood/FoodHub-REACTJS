import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import biryaniImg from './assets/biryani.png';
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



const reviewsData = {
  biryani: [
    { name: 'Ahmed R.', rating: '★★★★★', text: "Best biryani!", date: '2 days ago' },
    { name: 'Fatima K.', rating: '★★★★☆', text: "Tasty but slow delivery.", date: '1 week ago' },
    { name: 'Usman S.', rating: '★★★★★', text: "Always great!", date: '3 weeks ago' },
    { name: 'Ali N.', rating: '★★★☆☆', text: "Good but could be better.", date: '4 days ago' },
    { name: 'Sarah P.', rating: '★★★★☆', text: "Flavors were great, would order again.", date: '1 day ago' },
    { name: 'Tariq B.', rating: '★★★★☆', text: "Loved it, just a bit too spicy for me.", date: '5 days ago' },
  ],
  karahi: [
    { name: 'Sana M.', rating: '★★★★★', text: "Juicy and spicy!", date: '1 day ago' },
    { name: 'Bilal A.', rating: '★★★★☆', text: "Loved the taste.", date: '4 days ago' },
    { name: 'Muneeb H.', rating: '★★★★☆', text: "Tender meat and rich gravy.", date: '2 days ago' },
    { name: 'Nashit R.', rating: '★★★☆☆', text: "Good but lacked some seasoning.", date: '3 days ago' },
    { name: 'Hira F.', rating: '★★★★☆', text: "The perfect karahi, would highly recommend!", date: '1 week ago' },
  ],
  bbq: [
    { name: 'Zainab K.', rating: '★★★★★', text: "Perfect BBQ!", date: '3 days ago' },
    { name: 'Hassan A.', rating: '★★★★☆', text: "Great flavor, tender meat.", date: '2 days ago' },
    { name: 'Kiran B.', rating: '★★★★☆', text: "Juicy and perfectly cooked!", date: '5 days ago' },
    { name: 'Raza K.', rating: '★★★☆☆', text: "Good, but expected more smoky flavor.", date: '1 week ago' },
    { name: 'Ishfaq D.', rating: '★★★★☆', text: "Great BBQ with a smoky aftertaste.", date: '1 day ago' },
  ],
  burger: [
    { name: 'Ali H.', rating: '★★★★☆', text: "Big and juicy burgers.", date: '2 days ago' },
    { name: 'Sara A.', rating: '★★★☆☆', text: "The burger was okay, but too greasy for my taste.", date: '5 days ago' },
    { name: 'Muhammad A.', rating: '★★★★☆', text: "Delicious, but needed more toppings.", date: '1 week ago' },
    { name: 'Maya L.', rating: '★★★★★', text: "Best burger I've had in a while!", date: '3 days ago' },
    { name: 'Bilal J.', rating: '★★★★☆', text: "Great taste but needed a little more seasoning.", date: '1 day ago' },
  ],
  nihari: [
    { name: 'Hassan T.', rating: '★★★★★', text: "Authentic flavor.", date: '5 days ago' },
    { name: 'Raza S.', rating: '★★★★☆', text: "Tastes great but a little too oily for my liking.", date: '3 days ago' },
    { name: 'Asim M.', rating: '★★★★☆', text: "Good nihari, could use a bit more spice.", date: '2 days ago' },
    { name: 'Fariha Z.', rating: '★★★☆☆', text: "Good, but didn’t have the traditional nihari kick.", date: '1 week ago' },
    { name: 'Ayesha W.', rating: '★★★★★', text: "The best nihari I've had in a while!", date: '1 day ago' },
    { name: 'Nida A.', rating: '★★★★☆', text: "Very close to authentic taste, almost perfect.", date: '4 days ago' },
  ],
  novu: [
    { name: 'Ahmed R.', rating: '★★★★★', text: "Best Chinese food!", date: '2 days ago' },
    { name: 'Fatima K.', rating: '★★★★☆', text: "Delicious, but could be more flavorful.", date: '1 week ago' },
    { name: 'Usman S.', rating: '★★★★★', text: "Authentic taste, loved it!", date: '3 weeks ago' },
    { name: 'Ali N.', rating: '★★★☆☆', text: "Good but could be better.", date: '4 days ago' },
    { name: 'Sarah P.', rating: '★★★★☆', text: "Great flavors, would order again.", date: '1 day ago' },
    { name: 'Tariq B.', rating: '★★★★☆', text: "Loved it, just a bit too spicy for me.", date: '5 days ago' },
  ],
  savour: [
    { name: 'Ali R.', rating: '★★★★★', text: "The food was amazing! Every bite was packed with flavor.", date: '2 days ago' },
    { name: 'Ayesha K.', rating: '★★★★☆', text: "Great food, though the wait time was a bit long.", date: '1 week ago' },
    { name: 'Omar S.', rating: '★★★★★', text: "Savour Foods never disappoints! Always a great experience.", date: '3 weeks ago' },
    { name: 'Hassan F.', rating: '★★★★☆', text: "Delicious, especially the tandoori dishes. A little on the spicy side!", date: '1 day ago' },
    { name: 'Kiran N.', rating: '★★★★☆', text: "Amazing flavors, but the portion size was a bit smaller than expected.", date: '5 days ago' },
    { name: 'Zainab J.', rating: '★★★☆☆', text: "The taste was good but the prices are a little high for the portion.", date: '2 weeks ago' },
    { name: 'Bilal S.', rating: '★★★★★', text: "One of the best meals I've had! The biryani was to die for.", date: '1 day ago' },
    { name: 'Mariam T.', rating: '★★★★☆', text: "Solid meal, nice atmosphere. Will be coming back for sure.", date: '3 days ago' },
    { name: 'Farhan K.', rating: '★★★★★', text: "Highly recommend the kebabs! Cooked to perfection.", date: '6 days ago' },
  ],
  mazangpratha: [
    { name: 'Ahmed S.', rating: '★★★★★', text: "Best paratha I've ever had! Crispy on the outside and soft on the inside.", date: '2 days ago' },
    { name: 'Nida B.', rating: '★★★★☆', text: "Great taste but a bit too greasy for my liking.", date: '1 week ago' },
    { name: 'Usman Q.', rating: '★★★★★', text: "Mazang Paratha never disappoints. The best breakfast in town.", date: '3 weeks ago' },
    { name: 'Sara W.', rating: '★★★☆☆', text: "Good, but could use a little more stuffing. The chutney was amazing though!", date: '4 days ago' },
    { name: 'Zainab A.', rating: '★★★★☆', text: "Loved the paratha, but they could work on the portion size.", date: '1 day ago' },
    { name: 'Bilal T.', rating: '★★★★★', text: "The paratha was perfectly crispy, and the filling was delicious. Highly recommend!", date: '5 days ago' },
    { name: 'Hassan F.', rating: '★★★☆☆', text: "Nice taste, but the paratha was a bit too oily for my preference.", date: '2 weeks ago' },
    { name: 'Mariam S.', rating: '★★★★☆', text: "Really good! Loved the mix of flavors, but the paratha could have been a little thicker.", date: '1 day ago' },
    { name: 'Raza M.', rating: '★★★★★', text: "Mazang Paratha is a must-try! Best paratha I've had in a long time.", date: '3 days ago' },
    { name: 'Farhan K.', rating: '★★★★☆', text: "Delicious, but would love to see a bit more variety in the fillings.", date: '6 days ago' },
  ],
  cheezious: [
    { name: 'Ahmed S.', rating: '★★★★★', text: "Best pizza I've had! Crispy on the outside and soft on the inside.", date: '2 days ago' },
    { name: 'Nida B.', rating: '★★★★☆', text: "Great taste but a bit too greasy for my liking.", date: '1 week ago' },
    { name: 'Usman Q.', rating: '★★★★★', text: "Mazang Paratha never disappoints. The best breakfast in town.", date: '3 weeks ago' },
    { name: 'Sara W.', rating: '★★★☆☆', text: "Good, but could use a little more stuffing. The chutney was amazing though!", date: '4 days ago' },
    { name: 'Zainab A.', rating: '★★★★☆', text: "Loved the paratha, but they could work on the portion size.", date: '1 day ago' },
  ],
  papajohn: [
    { name: 'Sarah P.', rating: '★★★★★', text: "Delicious pizza with fresh ingredients. The crust is just perfect!", date: '1 day ago' },
    { name: 'Ali R.', rating: '★★★★☆', text: "Great pizza, but I prefer a bit more sauce. Otherwise, fantastic!", date: '2 days ago' },
    { name: 'John D.', rating: '★★★★★', text: "Best pizza chain in town. Love their garlic butter dip!", date: '1 week ago' },
    { name: 'Amna S.', rating: '★★★☆☆', text: "Tasty pizza, but delivery took longer than expected.", date: '3 days ago' },
    { name: 'Tariq M.', rating: '★★★★☆', text: "The pizza was great, but the sides could use more variety.", date: '5 days ago' },
  ],

  mcdonalds: [
    { name: 'Ahmed T.', rating: '★★★★☆', text: "The McChicken is my go-to, but I wish the fries were crispier.", date: '1 day ago' },
    { name: 'Fatima J.', rating: '★★★★★', text: "Always fresh and quick! The Big Mac is unbeatable.", date: '2 days ago' },
    { name: 'Amina F.', rating: '★★★★★', text: "I love their iced coffee. McDonald's never disappoints!", date: '1 week ago' },
    { name: 'Bilal Z.', rating: '★★★☆☆', text: "Food was good, but the service could be faster.", date: '4 days ago' },
    { name: 'Raza H.', rating: '★★★★☆', text: "Delicious burgers, just wish they had more veggie options.", date: '5 days ago' },
  ],
  kfc: [
    { name: 'Shazia M.', rating: '★★★★★', text: "KFC's fried chicken is always crispy and juicy. My favorite!", date: '1 day ago' },
    { name: 'Omar L.', rating: '★★★★☆', text: "Great meal, but the sides could use more options.", date: '2 days ago' },
    { name: 'Sana P.', rating: '★★★★★', text: "Their zinger burger is to die for! Always fresh.", date: '1 week ago' },
    { name: 'Waseem A.', rating: '★★★☆☆', text: "Good taste, but the portions feel a bit small for the price.", date: '3 days ago' },
    { name: 'Farah Q.', rating: '★★★★☆', text: "Love the chicken, but I prefer a spicier flavor.", date: '5 days ago' },
  ],
  subway: [
    { name: 'Maria N.', rating: '★★★★☆', text: "Fresh and healthy sandwiches. Perfect for a quick meal.", date: '1 day ago' },
    { name: 'Usman F.', rating: '★★★★★', text: "Best sandwich chain out there. I always go for the chicken tikka.", date: '2 days ago' },
    { name: 'Kiran S.', rating: '★★★★☆', text: "I love the customizability, but the bread options could be better.", date: '1 week ago' },
    { name: 'Hassan T.', rating: '★★★☆☆', text: "Good, but the veggie options could be more exciting.", date: '4 days ago' },
    { name: 'Saira J.', rating: '★★★★★', text: "The salads are fantastic! Always fresh and filling.", date: '5 days ago' },
  ],
  yums: [
    { name: 'Farhan M.', rating: '★★★★★', text: "The Szechuan-style prawns are a must-try! Deliciously spicy.", date: '1 day ago' },
    { name: 'Zara L.', rating: '★★★★☆', text: "The fried rice was great, but the portions could be a bit bigger.", date: '2 days ago' },
    { name: 'Imran B.', rating: '★★★★★', text: "Amazing flavors, the Thai red curry is my favorite!", date: '1 week ago' },
    { name: 'Hina A.', rating: '★★★☆☆', text: "The food was good, but the service was slow.", date: '3 days ago' },
    { name: 'Tariq N.', rating: '★★★★☆', text: "Good value for money, but I wish they had more vegetarian options.", date: '5 days ago' },
  ],
  haveli: [
    { name: 'Ahmed S.', rating: '★★★★★', text: "Best pizza I've had! Crispy on the outside and soft on the inside.", date: '2 days ago' },
    { name: 'Nida B.', rating: '★★★★☆', text: "Great taste but a bit too greasy for my liking.", date: '1 week ago' },
    { name: 'Usman Q.', rating: '★★★★★', text: "Mazang Paratha never disappoints. The best breakfast in town.", date: '3 weeks ago' },
    { name: 'Sara W.', rating: '★★★☆☆', text: "Good, but could use a little more stuffing. The chutney was amazing though!", date: '4 days ago' },
    { name: 'Zainab A.', rating: '★★★★☆', text: "Loved the paratha, but they could work on the portion size.", date: '1 day ago' },
],




};






const restaurants = [
  { id: 'biryani', name: 'Biryani', img: biryaniImg },
  { id: 'karahi', name: 'Karahi', img: karahiImg },
  { id: 'bbq', name: 'BBQ', img: bbqImg },
  { id: 'burger', name: 'Burger', img: burgerImg },
  { id: 'nihari', name: 'Nihari', img: nihariImg },
  { id: 'novu', name: 'novu', img: pastaImg },
  { id: 'savour', name: 'Savour', img: savourImg },
  { id: 'mazangpratha', name: 'Mazang Pratha', img: mazangprathaImg },
  { id: 'cheezious', name: 'Cheezious', img: cheeziousImg },
  { id: 'papajohn', name: 'Papa John\'s', img: papajohnsImg },
  { id: 'mcdonalds', name: 'McDonald\'s', img: mcdonaldsImg },
  { id: 'kfc', name: 'KFC', img: kfcImg },
  { id: 'subway', name: 'Subway', img: subwayImg },
  { id: 'yums', name: 'Yums', img: yumsImg },
  { id: 'haveli', name: 'Haveli', img: haveliImg },
];

const ReviewsPage = () => {
  const [activeRestaurant, setActiveRestaurant] = useState('biryani');

  return (
    <div>
      <head>
        <link rel="icon" href="/images.png" />
        <title>Reviews - FoodHub</title>
    </head>
      <header
        className="flex justify-between items-center px-6 h-20 bg-white shadow-md"

      >
        <div className="homeNavbar">
          <div className="logo-container" style={{ display: 'flex', alignItems: 'right' }}>
            <Link to="/home" className="logo font-bold text-xl text-red-500 flex items-center gap-2">
              <i className="fas fa-utensils"></i> FoodHub
            </Link>
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

      <main className="reviews-page">
        <h1 className="text-2xl font-bold text-center my-4">Customer Reviews</h1>
        <div className='restaurant-selector' style={{ marginBottom: '10px' }}>
          <h2>Select a Restaurant</h2>
          <div className="restaurant-options">

            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className={`restaurant-option ${activeRestaurant === restaurant.id ? 'active' : ''}`}
                onClick={() => setActiveRestaurant(restaurant.id)}
              >
                <img src={restaurant.img} alt={restaurant.name} />
                <p>{restaurant.name}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Review Section */}
        <div className="reviews-container">
          <h2 className="text-xl font-semibold mb-4">
            {restaurants.find(r => r.id === activeRestaurant)?.name} Reviews
          </h2>
          {reviewsData[activeRestaurant]?.map((review, index) => (
            <div className="review" key={index}>
              <div className="review-header">
                <h3>{review.name}</h3>
                <div className="rating">{review.rating}</div>
              </div>
              <p>{review.text}</p>
              <div className="review-date">{review.date}</div>
            </div>
          ))}
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

export default ReviewsPage;
