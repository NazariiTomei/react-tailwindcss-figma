import React from "react";

const CustomHeader = ({ title }) => {
  return (
    <p className="w-full h-[62px] text-[#FFFFFF] font-rubik font-[600] text-[48px] leading-[62.4px] pb-[50px] text-left">
      {title}
    </p>
  );
};

export default CustomHeader;
