import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/images/donation-bg.jpg"; 

const Donate = () => {
  const [currency, setCurrency] = useState("INR");
  const [amount, setAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    residence: "",
    animal: "",
  });

  const presetAmounts = [500, 1000, 2000, 5000];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row justify-start items-start bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Left Section - Heading and Form */}
      <div className="w-full lg:w-1/2 p-6">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Adopt and Donate</h1>
        <p className="text-black font-bold max-w-lg text-lg mb-6">
          Your donations and adoptions help us protect and care for endangered wildlife.
          Choose an animal to support and contribute to their well-being today.
        </p>

        {/* Donation Form */}
        <div className="relative w-full max-w-lg p-6 shadow-lg rounded-2xl bg-white">
          <h2 className="text-xl font-bold text-green-700">Make a Donation</h2>

          {/* Currency Selection */}
          <div className="flex my-4 space-x-2">
            <button
              className={`px-4 py-2 border rounded-md ${
                currency === "INR" ? "bg-green-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setCurrency("INR")}
            >
              INR
            </button>
            <button
              className={`px-4 py-2 border rounded-md ${
                currency === "USD" ? "bg-green-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setCurrency("USD")}
            >
              USD
            </button>
          </div>

          {/* Preset Donation Amounts */}
          <div className="grid grid-cols-2 gap-3 my-4">
            {presetAmounts.map((amt) => (
              <motion.button
                key={amt}
                onClick={() => setAmount(amt)}
                whileTap={{ scale: 0.9 }}
                className={`p-3 text-lg font-semibold border rounded-lg transition-all ${
                  amount === amt
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 hover:bg-green-500 hover:text-white"
                }`}
              >
                {currency} {amt}
              </motion.button>
            ))}
          </div>

          {/* Custom Amount Input */}
          <input
            type="number"
            placeholder="Enter custom amount"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="w-full p-2 border-2 border-green-400 rounded-lg mt-4"
          />

          {/* Personal Details Form */}
          <div className="mt-4 space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="residence"
              placeholder="Place of Residence"
              value={formData.residence}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />

            {/* Dropdown for Animal Selection */}
            <select
              name="animal"
              value={formData.animal}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select an animal to adopt</option>
              <option value="Tiger">Tiger</option>
              <option value="Elephant">Elephant</option>
              <option value="Panda">Panda</option>
              <option value="Rhino">Rhino</option>
            </select>
          </div>

          {/* Submit Button */}
          <button className="w-full mt-4 bg-green-700 hover:bg-green-800 text-white text-lg p-3 rounded-lg">
            Donate {currency} {customAmount || amount}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
