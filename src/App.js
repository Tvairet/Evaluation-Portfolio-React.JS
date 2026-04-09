import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Nav from './component/Nav';
import Home from './pages/Home';
import Services from './pages/Services';


export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </div>
  );
}
