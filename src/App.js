import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/css/common.css";
import "./components/css/responsive.css";
import  float from "./components/images/247.webp";
import 'animate.css';
import Header from "./components/Header";
import Index from "./components/index";
import About from "./components/About";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {


  return (
    <Router>
      <Header/>
      <div className="float">
      <a href="tel:+01823222674"><img src={float} alt="24/7 services sandhu hospital" /></a>
    </div>
      <Routes>
        <Route exact path="/" element={<Index/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/search" element={<Search/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
