import React from "react";
import CustomAvatar from "../Components/CustomAvatar";
import CustomSubHeader from "../Components/CustomSubHeader";
import CustomButton from "../Components/CustomButton";
import CustomCancelButton from "../Components/CustomCancelButton";
import avatar from "../Images/firefox.jpg";
const AccountManagement = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#040b15] px-4 py-8 ">
      <div className="w-full max-w-lg bg-[#111A26] p-8 rounded-lg space-y-8 z-[1]">
        <div className="flex justify-end text-white text-3xl cursor-pointer">
          &times;
        </div>
        <div className="space-y-4">
          <CustomAvatar src={avatar} alt="avatar" size="w-[80px] h-[80px]" />
          <CustomSubHeader
            subtitle="grassadmin@gmail.com"
            position="text-center"
          />
        </div>
        <div className="space-y-4">
          <p className="w-full h-[52px] font-rubik font-medium text-base text-[#FFFFFF] leading-6">
            For product support please <u>join our discord</u> and create a
            ticket in our #support-ticket chatroom.
          </p>
        </div>
        <div className="space-y-4">
          <CustomButton label="Logout" />
        </div>
        <div className="space-y-4">
          <CustomCancelButton label="Delete Account" />
        </div>
        <p className="w-full text-[#8F4AE3] font-rubik font-semibold text-lg leading-6 text-center cursor-pointer underline">
          Pause Sharing
        </p>
      </div>
    </div>
  );
};

export default AccountManagement;
