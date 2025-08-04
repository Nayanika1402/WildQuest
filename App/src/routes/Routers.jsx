import React, { useState } from "react";
import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Main from "../pages/Main";
import Home from "../pages/Home";
import About from "../components/About/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Professionals from "../pages/Professionals/Professionals";
import ProfessionalDetails from "../pages/Professionals/ProfessionalDetails";
import Donate from "../components/Donate/Donate";
import Profile from "../pages/Profile";
import Adopt from "../components/Adopt/Adopt";
import Quiz from "../components/Quiz/Quiz";
import Game from "../components/Game/Crossword";
import Proposal from "../components/Proposal/Proposal";


function Routers() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Routes>
        {/* Redirect "/" to Main Page */}
        <Route path="/" element={<Navigate to="/main" />} />
        
        {/* App Pages */}
        <Route path="/main" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/professionals/:id" element={<ProfessionalDetails />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/game" element={<Game />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
      
      <ToastContainer />
    </>
  );
}

export default Routers;
