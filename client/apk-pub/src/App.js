import React from 'react';
import Nav from './components/Nav';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product listing Component</h1>} />
          <Route path="/services" element={<h1>Add Product Component</h1>} />
          <Route path="/about" element={<About/>} />
          <Route path="/submit-articles" element={<h1>logout</h1>} />
          
           </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

