import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import ContactForm from './components/Contact';
import './App.css';
import Nav from "./components/Nav"


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/contact' element={<ContactForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
