import React from "react";
import CustomSubHeader from "../Components/CustomSubHeader";
import CustomButton from "../Components/CustomButton";
import CustomCancelButton from "../Components/CustomCancelButton";
import CustomTextField from "../Components/CustomTextField";
const AccountManagement = () => {
  return (
    <div className="w-[607px] h-full z-[100] bg-[#111A26] p-[40px] rounded-[16px] space-y-[40px]">
        <div>
            &times;
        </div>
      <div>
        <></>
        <CustomSubHeader subtitle="grassadmin@gmail.com" />
      </div>
      <div>
        <CustomTextField label="For product support please <u>join our discord</u> and create a ticket in our #support-ticket chatroom." />
      </div>
      <div>
        <CustomButton label="Logout" />
      </div>
      <CustomCancelButton label="Delete Account" />
      <p className="w-full h-[23px] text-[#8F4AE3] font-rubik font-[600] text-[16px] leading-[23.2px]">
        <u>Pause Sharing</u>
      </p>
    </div>
  );
};

export default AccountManagement;
