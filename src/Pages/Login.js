import React from "react";
import CustomHeader from "../Components/CustomHeader";
import CustomSubHeader from "../Components/CustomSubHeader";
import CustomTextField from "../Components/CustomTextField";
import CustomLink from "../Components/CustomLink";
import CustomButton from "../Components/CustomButton";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#040b15] px-4 py-8 ">
      <div className="w-full max-w-lg bg-[#111A26] p-8 rounded-lg space-y-8 z-[1]">
        <div className="space-y-4">
          <CustomHeader title="Welcome to Grid" />
          <CustomSubHeader subtitle="Let’s begin the adventure" />
        </div>
        <div className="space-y-6">
          <CustomTextField
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <CustomTextField
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <CustomLink
            label="Don’t have an account?"
            linkname="Sign Up"
            url="/Signup"
          />
          <CustomButton label="Access My Account" />
        </div>
      </div>
    </div>
  );
};

export default Login;
