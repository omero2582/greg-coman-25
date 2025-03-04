import React from "react";

const Awards = () => {
  return (
    <div className="text-center mt-12">
      <p className="text-gray-700 font-semibold">
        Proud Winner of these awards for three years straight!
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <img
          src="/path-to-award1.png"
          alt="Readers Choice 2021"
          className="w-24"
        />
        <img
          src="/path-to-award2.png"
          alt="Readers Choice 2022"
          className="w-24"
        />
        <img
          src="/path-to-award3.png"
          alt="Readers Choice 2023"
          className="w-24"
        />
      </div>
    </div>
  );
};

export default Awards;
