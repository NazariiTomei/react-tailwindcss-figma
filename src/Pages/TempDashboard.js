import React from "react";
import CustomLink from "../Components/CustomLink";

const TempDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#040b15] px-4 py-8 ">
      <div className="w-full max-w-lg bg-[#111A26] p-8 rounded-lg space-y-8 z-[1]">
        <CustomLink label="Login" linkname="Login" url="/Login" />
        <CustomLink label="SignUp" linkname="SignUp" url="/Signup" />
        <CustomLink
          label="ForgotPassword"
          linkname="ForgotPassword"
          url="/ForgotPassword"
        />
        <CustomLink
          label="DeleteAccount"
          linkname="DeleteAccount"
          url="/DeleteAccount"
        />
        <CustomLink label="EmailSent" linkname="EmailSent" url="/EmailSent" />
        <CustomLink
          label="AccountManagement"
          linkname="AccountManagement"
          url="/AccountManagement"
        />
      </div>
    </div>
  );
};

export default TempDashboard;
