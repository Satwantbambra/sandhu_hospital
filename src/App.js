import React, { useEffect } from "react";
import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './components/images/logo.png';
import "./App.css";
import "./components/css/common.css";
import "./components/css/responsive.css";
import float from "./components/images/247.webp";
import 'animate.css';
import "animate.css/animate.compat.css"
import Header from "./components/Header";
import Index from "./components/index";
import About from "./components/About";
import Footer from "./components/Footer";
import Service from "./components/service";
import Search from "./components/Search";
import Team from "./components/Team";
import Doctor from "./components/doctor";
import Gallery from "./components/gallery";
import Skin from "./components/skin";
import Contact from "./components/contact";
import Privacy from "./components/privacy";
import Terms from "./components/terms";
import NotFound from './components/NotFound';

function ScrollToTop() {

  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top when the path changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensure ScrollToTop is inside Router */}
      <Header logo={logo} />
      <div className="float">
        <a href="tel:+01823222674">
          <img src={float} alt="24/7 services sandhu hospital" />
        </a>
      </div>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service/:id" element={<Service />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/skin/:id" element={<Skin />} />
        <Route exact path="/doctor/:id" element={<Doctor />} />
        <Route exact path="/contact_us" element={<Contact />} />
        <Route exact path="/privacy-policy" element={<Privacy />} />
        <Route exact path="/terms&condition" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
