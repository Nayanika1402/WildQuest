import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../components/firebase";
import { setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
 // import signup from "../assets/images/signup.svg";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors
    setSuccessMessage(""); // Clear previous success messages
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: "",
        });
      }
      setSuccessMessage("User Registered Successfully!!");
setTimeout(() => {
  window.location.href = "/login"; // Redirect to the login page after 2 seconds
}, 2000);

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("This email is already registered. Please log in.");
      } else {
        setErrorMessage("Error: " + error.message);
      }
    }
  };  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white to-blue-100 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl items-center justify-between p-6 md:p-12 bg-white shadow-lg rounded-lg">
        <div className="hidden md:flex w-1/2 pr-10">
          <img src={signup} alt="Signup Illustration" className="w-full" />
        </div>

        {errorMessage && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-red-100 text-red-700 p-3 text-center rounded-lg">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-green-100 text-green-700 p-3 text-center rounded-lg">
            {successMessage}
          </div>
        )}

        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Create an <span className="text-[#137f13]">Account</span>
          </h2>
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-gray-700 text-sm font-medium">First Name</label>
              <input
                type="text"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium">Last Name</label>
              <input
                type="text"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
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
            <button
              type="submit"
              className="w-full bg-[#137f13] text-white p-3 rounded-full hover:bg-green-600 transition-all duration-300"
            >
              Sign Up
            </button>
            <p className="text-center text-sm">
              Already have an account? <Link to="/login" className="text-[#137f13] hover:underline">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;