import React from "react";

const CustomCancelButton = ({ label }) => {
  return (
    <>
      {label && (
        <button className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[48px] rounded-lg border-2 border-[#8F4AE3] flex items-center justify-center p-2 bg-[#111A26]">
          <p className="text-base sm:text-lg md:text-xl font-rubik font-semibold text-[#8F4AE3] leading-tight">
            {label}
          </p>
        </button>
      )}
    </>
  );
};

export default CustomCancelButton;
