import React from "react";

const Awards = () => {
  return (
    <div className="text-center mt-12 mb-16"> {/* ✅ Added bottom margin for spacing */}
      <p className="text-gray-700 font-bold text-2xl mb-6"> {/* ✅ Increased size and bold */}
        Proud Winner of these awards for three years straight!
      </p>
      <div className="flex justify-center gap-8 mt-6"> {/* ✅ Increased gap between awards */}
        <img
          src="/awards/Award2021.jpg"
          alt="Readers Choice 2021"
          className="w-100 h-auto" // ✅ Increased image size
        />
        <img
          src="/awards/Award2022.jpg"
          alt="Readers Choice 2022"
          className="w-100 h-auto" // ✅ Increased image size
        />
        <img
          src="/awards/Award2023.jpg"
          alt="Readers Choice 2023"
          className="w-100 h-auto" // ✅ Increased image size
        />
      </div>
    </div>
  );
};

export default Awards;
