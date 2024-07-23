import React from "react";

const CustomCheckbox = ({ label }) => {
  return (
    <div className="flex items-center space-x-2 mb-[20px]">
      <input
        type="checkbox"
        id="custom-checkbox"
        className="form-checkbox h-[24px] w-[24px] appearance-none bg-[#111A26] rounded-[8px] checked:bg-blue-600 checked:border-transparent focus:outline-none"
      />
      <label
        htmlFor="custom-checkbox"
        className="font-rubik font-[400] text-[16px] text-[#FFFFFF] leading-[28px]"
      >
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
