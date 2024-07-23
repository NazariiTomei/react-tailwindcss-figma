import React from "react";

const CustomTextField = ({ label, type, placeholder }) => {
  return (
    <>
      {label && (
        <p className="w-full h-[28px] font-rubik font-[400] text-[16px] text-[#FFFFFF] leading-[28px] mb-[10px] text-left">
          {label}
        </p>
      )}
      {type && (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full h-[48px] px-4 py-2 rounded-md bg-[#1E2C3C] text-[#FFFFFF8F] font-normal text-base mb-[20px]"
        />
      )}
    </>
  );
};

export default CustomTextField;
