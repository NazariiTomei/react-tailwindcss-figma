import React from "react";

const CustomButton = ({ label }) => {
  return (
    <button className="w-full h-[48px] rounded-[8px] p-[12px 8px 13px 8px] bg-gradient-90">
      <p className="w-full h-[23px] font-rubik font-[600] text-[16px] text-[#000000] leading-[23.2px]">
        {label}
      </p>
    </button>
  );
};

export default CustomButton;
