
import './App.css';

import React, { useEffect, useState } from "react";
import Navbar from "./Components/navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./Components/register/register"
import FirstSecret from "./Components/firstSecret/firstSecret"
import SecondSecret from "./Components/secondSecret/secondSecret"
import ThirdSecret from "./Components/thirdSecret/thirdSecret"
import Home from "./Components/home/home"
import axios from "axios"

function App() {
  
  //DESC: The directory, sorta, for my various links
  //THOUGHTS: I need to eventually go through and change the path names to be test or something,
  // cont. because that is what they are going to be, not the actual secrets. It's currently
  // cont. misleading.
  return (
     <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/firstSecret" element={<FirstSecret />} />
        <Route path="/secondSecret" element={<SecondSecret />} />
        <Route path="/thirdSecret" element={<ThirdSecret />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
