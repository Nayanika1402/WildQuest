import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRightCircle } from "lucide-react";
import logo from "../assets/images/logo.png";
import illustration from "../assets/images/main_help.svg";
import donation from "../assets/images/main_donation.svg"; // Add the correct image path

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-white">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-[50px] h-[50px]" />
          <h1 className="text-3xl font-bold">WildQuest</h1>
        </div>
        <button
          className="px-6 py-2 bg-[#137f13] text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition-all"
          onClick={() => navigate("/login")}
        >
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center text-center mt-16 px-6">
        <div className="relative w-80 mb-6">
          <input
            type="text"
            placeholder="Request Help"
            className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-md focus:outline-none"
          />
          <button
            onClick={() => navigate("/contact")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#137f13]"
            aria-label="Request Help"
          >
            <ArrowRightCircle size={28} className="text-[#137f13]" />
          </button>
        </div>

        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Protect wildlife, support conservation, and <br />
          embark on your{" "}
          <span className="text-[#137f13]">WildQuest journey! 🐾</span>
        </h1>

        <p className="text-gray-700 mt-4 max-w-2xl text-lg">
          Join our platform today to learn, engage, and make a meaningful impact
          for endangered species and their habitats.
        </p>

        <button
          className="mt-6 px-8 py-3 bg-[#137f13] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-500 transition-all"
          onClick={() => navigate("/register")}
        >
          Join our Community →
        </button>
      </header>

      {/* Illustration Section */}
      <section className="flex flex-col md:flex-row items-center mt-12 px-6">
        <div className="md:w-1/2 flex justify-end pr-40">
          <img
            src={illustration}
            alt="Illustration"
            className="w-[100%] md:w-[80%] max-w-md"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-8">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            If you want to help <br />
            <span className="text-[#137f13]">WildQuest</span> <br />
            makes it easier🌿
          </h1>
        </div>
      </section>

      {/* New Section - E-Waste Trade */}
      <section className="flex flex-col md:flex-row items-center mt-12 px-6  py-12 rounded-lg shadow-md">
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-8">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            If you want to Adopt an animal virtually <br />
            <span className="text-[#137f13]">WildQuest</span> <br />
            makes it more simpler.
          </h1>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={donation}
            alt="E-Waste Trade Illustration"
            className="w-[80%] max-w-md"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className=" py-6 text-center mt-12">
        <div className="flex justify-center items-center space-x-3">
          <img src={logo} alt="Logo" className="w-[30px] h-[30px]" />
          <h1 className="text-xl font-bold">WildQuest</h1>
        </div>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-6 text-gray-700">
            <li>
              <Link to="/home" className="hover:text-black cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/adopt" className="hover:text-black cursor-pointer">
                Adoption
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-black cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-gray-500 text-sm mt-4">
          © Design And Developed By Lady_Bugs™
        </p>
      </footer>
    </div>
  );
};

export default Main;
