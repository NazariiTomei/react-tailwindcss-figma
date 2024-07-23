import React from "react";

const CustomSubHeader = ({ subtitle }) => {
  return (
    <p className="w-full h-[26px] text-[#FFFFFF8F] font-rubik font-[400] text-[20px] leading-[26px] text-left">
      {subtitle}
    </p>
  );
};

export default CustomSubHeader;
