import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from "./pages/Home";
import About from "./pages/About";
import './App.css'


function App() {
  return (
    <Router>
      <Header />
      <div style ={{marginTop: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
