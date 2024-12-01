import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Hero from './components/Hero';
import Sales from './components/Sales';
import FlexContent from './components/FlexContent';
import Stories from './components/Stories';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Cart />
        <Routes>
          <Route path="/" element={
            <main className='flex flex-col gap-16 relative'>
              <Hero heroapi={heroapi} />
              <Sales endpoint={popularsales} ifExists />
              <FlexContent endpoint={highlight} ifExists />
              <Sales endpoint={toprateslaes} />
              <FlexContent endpoint={sneaker} />
              <Stories story={story} />
            </main>
          } />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer footerAPI={footerAPI} />
      </>
    </Router>
  );
}

export default App;