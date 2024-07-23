import React from "react";
import CustomLink from "../Components/CustomLink";

const TempDashboard = () => {
  return <>
    <CustomLink label="Login" linkname="Login" url="/Login" />
    <CustomLink label="SignUp" linkname="SignUp" url="/Signup" />
    <CustomLink label="ForgotPassword" linkname="ForgotPassword" url="/ForgotPassword" />
    <CustomLink label="DeleteAccount" linkname="DeleteAccount" url="/DeleteAccount" />
    <CustomLink label="EmailSent" linkname="EmailSent" url="/EmailSent" />
    <CustomLink label="AccountManagement" linkname="AccountManagement" url="/AccountManagement" />
  </>;
};

export default TempDashboard;
