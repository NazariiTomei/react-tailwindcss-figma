import React from "react";
import CustomHeader from "../Components/CustomHeader";
import CustomSubHeader from "../Components/CustomSubHeader";
import CustomButton from "../Components/CustomButton";

const EmailSent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#040b15] px-4 py-8 ">
      <div className="w-full max-w-lg bg-[#111A26] p-8 rounded-lg space-y-8 z-[1]">
        <CustomHeader title="Email Sent" />
        <CustomSubHeader subtitle="Please check your inbox to see your verification link." />
        <div className="pt-4">
          <CustomButton label="Resend Email" />
        </div>
      </div>
    </div>
  );
};

export default EmailSent;
