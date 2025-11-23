import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landingPage/home/HomePage';
import Signup from './landingPage/signup/Signup';
import Footer from './landingPage/Footer';
import Navbar from './landingPage/Navbar';
import AboutPage from './landingPage/about/AboutPage';
import ProductPage from './landingPage/products/ProductPage';
import PricingPage from './landingPage/pricing/PricingPage';
import SupportPage from './landingPage/support/SupportPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>

    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
    <Route path="/product" element={<ProductPage/>}></Route>
    <Route path="/pricing" element={<PricingPage/>}></Route>
    <Route path="/support" element={<SupportPage/>}></Route>
    
  </Routes>
  <Footer/>
  </BrowserRouter>
  
);