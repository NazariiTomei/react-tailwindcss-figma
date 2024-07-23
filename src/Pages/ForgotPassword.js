import React from "react";
import CustomHeader from "../Components/CustomHeader";
import CustomTextField from "../Components/CustomTextField";
import CustomButton from "../Components/CustomButton";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#040b15] ">
      <div className="forgotpassword w-full max-w-lg p-10 bg-[#111A26] rounded-lg space-y-8 mx-4 z-[1]">
        <CustomHeader title="Forgot Password" />
        <CustomTextField
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
        <CustomButton label="Send Recovery Link" />
      </div>
    </div>
  );
};

export default ForgotPassword;
