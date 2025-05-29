import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Services from './pages/Services';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
