import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./components/index";
import Footer from "./components/Footer";
import "./App.css";
import "./components/css/common.css";
import "./components/css/responsive.css";

function App() {


  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Index/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
