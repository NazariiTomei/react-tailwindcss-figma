import React from "react";
import CustomHeader from "../Components/CutomHeader";
import CustomSubHeader from "../Components/CustomSubHeader";
import CustomTextField from "../Components/CustomTextField";
import CustomLink from "../Components/CustomLink";
import CustomButton from "../Components/CustomButton";
const Login = () => {
  return (
    <>
      <div className="login w-[607px] h-full z-[100] bg-[#111A26] p-[40px] rounded-[16px] space-y-[40px]">
        <div>
          <CustomHeader title="Welcome to Grid" />
          <CustomSubHeader subtitle="Let’s begin the adventure" />
        </div>
        <div>
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
    </>
  );
};

export default Login;
