import React, { useState } from "react";
import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Main from "../pages/Main";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Professionals from "../pages/Professionals/Professionals";
import ProfessionalDetails from "../pages/Professionals/ProfessionalDetails";
import Donate from "../components/Donate/Donate";

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
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/professionals/:id" element={<ProfessionalDetails />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      
      <ToastContainer />
    </>
  );
}

export default Routers;
