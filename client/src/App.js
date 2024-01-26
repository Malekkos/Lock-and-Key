
import './App.css';

import React, { useEffect, useState } from "react";
import Navbar from "./Components/navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./Components/register/register"
import Login from "./Components/login/login"
import FirstSecret from "./Components/firstSecret/firstSecret"
import SecondSecret from "./Components/secondSecret/secondSecret"
import ThirdSecret from "./Components/thirdSecret/thirdSecret"
import Home from "./Components/home/home"
import axios from "axios"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar /> {/* needs defining */}
      <Routes>
        <Route exact path="/" element={<Home />} /> {/* needs defining */}
        <Route path="/register" element={<Register />} /> {/* needs defining */}
        <Route path="/login" element={<Login />} /> {/* needs defining */}
        <Route path="/firstSecret" element={<FirstSecret />} /> {/* needs defining */}
        <Route path="/secondSecret" element={<SecondSecret />} /> {/* needs defining */}
        <Route path="/thirdSecret" element={<ThirdSecret />} /> {/* needs defining */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
