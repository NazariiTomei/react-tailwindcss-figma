import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ label, linkname, url }) => {
  return (
    <div className="flex justify-between items-center w-full h-[28px] mb-4">
      <p className="font-rubik font-medium text-[16px] text-[#FFFFFF] leading-[28px]">
        {label}
      </p>
      <Link to={url} aria-label={linkname}>
        <p className="underline font-rubik font-semibold text-[16px] text-[#8F4DE3] leading-[28px] cursor-pointer hover:underline">
          {linkname}
        </p>
      </Link>
    </div>
  );
};

export default CustomLink;
