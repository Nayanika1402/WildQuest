import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";
import { Link } from "react-router-dom";
import login from "../assets/images/login.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/home"; // Redirect after successful login
    } catch (error) {
      console.error("Login Error:", error); // Log full error for debugging

      switch (error.code) {
        case "auth/user-not-found":
          setErrorMessage("No account found with this email.");
          break;
        case "auth/wrong-password":
          setErrorMessage("Incorrect password. Please try again.");
          break;
        case "auth/invalid-credential":
          // Firebase often returns this for invalid email/password combinations.
          setErrorMessage("Invalid email or password. Double-check your credentials.");
          break;
        default:
          setErrorMessage("An unexpected error occurred: " + error.message);
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white to-blue-100 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl items-center justify-between p-6 md:p-12 bg-white shadow-lg rounded-lg">
        {/* Left Illustration */}
        <div className="hidden md:flex w-1/2 pr-10">
          <img src={login} alt="Login Illustration" className="w-full" />
        </div>

        {/* Login Form */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg">
          {errorMessage && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-red-100 text-red-700 p-3 text-center rounded-lg">
              {errorMessage}
            </div>
          )}
          <h2 className="text-3xl font-semibold text-center mb-6">
            Welcome <span className="text-[#137f13]">Back!</span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 text-sm font-medium">Email Address</label>
              <input
                type="email"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium">Enter Password</label>
              <input
                type="password"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between text-sm">
              <Link to="/forgot-password" className="text-[#137f13] hover:underline">Forgot Password?</Link>
            </div>
            <button
              type="submit"
              className="w-full bg-[#137f13] text-white p-3 rounded-full hover:bg-green-600 transition-all duration-300"
            >
              Log In
            </button>
            <p className="text-center text-sm">
              Don't have an account? <Link to="/register" className="text-[#137f13] hover:underline">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;