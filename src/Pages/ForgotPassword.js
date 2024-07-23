import React from "react";
import CustomHeader from "../Components/CutomHeader";
import CustomTextField from "../Components/CustomTextField";
import CustomButton from "../Components/CustomButton";
const ForgotPassword = () => {
  return (
    <div className="login w-[607px] h-full z-[100] bg-[#111A26] p-[40px] rounded-[16px] space-y-[40px]">
      <CustomHeader title="Forgot Password" />
      <CustomTextField
        label="Email"
        type="email"
        placeholder="Enter your email"
      />
      <CustomButton label="Send Recovery Link" />
    </div>
  );
};

export default ForgotPassword;
