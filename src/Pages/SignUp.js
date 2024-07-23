import React from "react";
import CustomHeader from "../Components/CustomHeader";
import CustomSubHeader from "../Components/CustomSubHeader";
import CustomTextField from "../Components/CustomTextField";
import CustomLink from "../Components/CustomLink";
import CustomCaptcha from "../Components/CustomCaptcha";
import CustomButton from "../Components/CustomButton";
import Footer from "../Components/Footer";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#040b15] px-4 py-8 ">
      <div className="w-full max-w-lg bg-[#111A26] p-8 rounded-lg space-y-8 z-[1]">
        <div>
          <CustomHeader title="Sign Up" />
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
          <CustomTextField
            label="Confirm Password"
            type="password"
            placeholder="Enter confirm password"
          />
          <CustomTextField
            label="Referral Code"
            type="text"
            placeholder="Enter referral code"
          />
          <CustomLink
            label="Already have an account?"
            linkname="Login"
            url="/Login"
          />
          <CustomCaptcha label="I agree to the terms & conditions" />
          <CustomButton label="Register Now" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
