
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
  return (
     <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/firstSecret" element={<FirstSecret />} />
        <Route path="/secondSecret" element={<SecondSecret />} />
        <Route path="/thirdSecret" element={<ThirdSecret />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
