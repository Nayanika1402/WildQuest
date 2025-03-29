import React from "react";
import ProfessionalList from "../Professional/ProfessionalList";

const Adopt = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 w-full">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Some Endangered Wild Species 🦌</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          According to the IUCN Red List, these species are declining rapidly due to habitat loss, 
          poaching, climate change, and human activities.
        </p>
      </div>

      {/* Flexbox for Cards */}
      <div className="flex flex-wrap justify-between items-center w-full max-w-screen-xl mt-8 px-4">
        <ProfessionalList />
      </div>
    </div>
  );
};

export default Adopt;
