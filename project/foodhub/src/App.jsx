import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' 
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Signup from './signup'
import Login from './login'
import Home from './home'
import ConceptPage from './concept'
import Contact from './contact'
import Reviewspage from './review'
import CartPage from './cart'
import RestaurantPage from './restaurant'
import ConfirmationPage from './OrderConfirmation'




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/concept" element={<ConceptPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review" element={<Reviewspage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/OrderConfirmation" element={<ConfirmationPage />} />
        
        
      </Routes>

    </BrowserRouter>
  )
}

export default App
