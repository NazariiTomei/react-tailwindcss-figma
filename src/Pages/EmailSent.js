import React from "react";
import CustomHeader from "../Components/CutomHeader";
import CustomSubHeader from "../Components/CustomSubHeader";
import CustomButton from "../Components/CustomButton";

const EmailSent = () => {
  return (
    <div className="login w-[607px] h-full z-[100] bg-[#111A26] p-[40px] rounded-[16px] space-y-[40px]">
      <CustomHeader title="Email Sent" />
      <CustomSubHeader subtitle="Please check your inbox to see your verification link." />
      <CustomButton label="Resent Email" />
    </div>
  );
};

export default EmailSent;
