import React, { useState } from "react";

const Card = ({ title, imageSrc, openModal }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className={`relative h-[250px] border-2 border-my-theme rounded-lg ${
          hovered
            ? "transform scale-105 transition-transform duration-300"
            : "transition-transform duration-300"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="absolute inset-0 flex justify-center ">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        {/* Open Modal button */}
        <div className="absolute inset-0 flex justify-center items-end">
          <button
            className="border-2 text-white w-28 p-2 text-center bg-black font-semibold rounded-lg"
            onClick={openModal}
          >
            Know more
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
