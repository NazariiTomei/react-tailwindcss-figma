import React from "react";

const CustomCancelButton = ({ label }) => {
  return (
    <>
      <button className="w-full h-[48px] rounded-[8px] p-[12px 8px 13px 8px] border-[#8F4AE3] border-[1px]">
        <p className="w-full h-[23px] font-rubik font-[600] text-[16px] text-[#8F4AE3] leading-[23.2px]">
          {label}
        </p>
      </button>
    </>
  );
};

export default CustomCancelButton;
