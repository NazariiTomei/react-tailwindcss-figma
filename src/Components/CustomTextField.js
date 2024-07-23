import React from "react";

const CustomTextField = ({ label, type, placeholder }) => {
  const id =
    label && typeof label === "string"
      ? label.replace(/\s+/g, "-").toLowerCase()
      : undefined;

  return (
    <div className="flex flex-col space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="font-rubik font-medium text-base text-[#FFFFFF] leading-6 text-left"
        >
          {label}
        </label>
      )}
      {type && (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="w-full h-12 px-4 py-2 rounded-md bg-[#1E2C3C] text-[#FFFFFF8F] font-normal text-base border border-transparent focus:outline-none focus:ring-2 focus:ring-[#8F4AE3]"
        />
      )}
    </div>
  );
};

export default CustomTextField;
