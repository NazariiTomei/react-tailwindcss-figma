import React from "react";
import CustomHeader from "../Components/CutomHeader";
import CustomSubHeader from "../Components/CustomSubHeader";
import CustomTextField from "../Components/CustomTextField";
import CustomLink from "../Components/CustomLink";
import CustomCaptcha from "../Components/CustomCaptcha";
import CustomButton from "../Components/CustomButton";
import Footer from "../Components/Footer";

const SignUp = () => {
  return (
    <>
      <div className="signup w-[607px] h-full z-[100] bg-[#111A26] p-[40px] rounded-[16px] space-y-[40px]">
        <div>
          <CustomHeader title="Sign Up" />
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
    </>
  );
};

export default SignUp;
