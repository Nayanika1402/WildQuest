import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Proposal = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="p-8 max-w-lg text-center shadow-lg rounded-2xl bg-white border border-gray-300">
        <CheckCircle className="text-green-500 mx-auto" size={50} />
        <h1 className="text-2xl font-bold mt-4 text-gray-900">
          Thank You for Your Support!
        </h1>
        <div className="text-gray-700 mt-2">
          <p>
            Your proposal for donation and initiative to virtually adopt an endangered species is deeply appreciated. Your support helps in conservation efforts and making a difference!
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <Link to="/adopt" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center">
            Explore More Initiatives
          </Link>
          <Link to="/home" className="border border-gray-500 text-black py-2 px-4 rounded-lg text-center hover:bg-gray-200">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
