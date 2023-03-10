import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Screens/Home'
import About from '../Screens/About'
import Contact from '../Screens/Contact';

function Approuter() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Approuter;
