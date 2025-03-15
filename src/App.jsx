import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import "../public/css/HomePage.css";
import banner from "../public/banner.png";
import Footer from "./components/Footer.jsx";
// import NewsPage from './pages/NewsPage'; // Example import for other pages
// import GalleryPage from './pages/GalleryPage'; // Example import for other pages
// import ContactPage from './pages/ContactPage'; // Example import for other pages

function App() {
  return (
    <Router>  
      <div>
        <nav className="navbar">
          <div className="banner">
            <img src={banner} alt="Logo" className="logo" />
          </div>
          <ul>
            <li><NavLink to="/" className="nav-link" end>HOME</NavLink></li>
            <li><NavLink to="/about" className="nav-link">ABOUT</NavLink> </li>
            <li><NavLink to="/gallery" className="nav-link">GALLERY</NavLink></li>
            <li><NavLink to="/contact" className="nav-link">CONTACT</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/about/submenu1" element={<Submenu1Page />} />
          <Route path="/about/submenu2" element={<Submenu2Page />} />
          <Route path="/about/submenu3" element={<Submenu3Page />} /> */}
        </Routes>

        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
