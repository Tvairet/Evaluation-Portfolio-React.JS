import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Nav from './component/Nav';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Mentions from './pages/Mentions';
import Footer from './component/footer'


export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/mentions' element={<Mentions />} />
      </Routes>
      <Footer />
    </div>
  );
}
