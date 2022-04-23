import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Nav from "./components/Nav"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/contact' element={<ContactForm/>} />
      </Routes>
      <Footer />
    </Router>
  );

}
                        
export default App;
