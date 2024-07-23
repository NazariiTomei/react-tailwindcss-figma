import React from "react";
import CustomHeader from "../Components/CutomHeader";
import CustomSubHeader from "../Components/CustomSubHeader";
import CustomTextField from "../Components/CustomTextField";
import CustomCancelButton from "../Components/CustomCancelButton";
import CustomButton from "../Components/CustomButton";
const DeleteAccount = () => {
  return (
    <div className="w-[607px] h-full z-[100] bg-[#111A26] p-[40px] rounded-[16px] space-y-[40px]">
      <CustomHeader title="Delete Account" />
      <CustomSubHeader subtitle="If you delete your account you will no longer be able to access any of your existing Grid rewards or log in to Grid. Are you sure?" />
      <div className="pt-[30px]">
        <CustomTextField
          label="Type Confirm to Delete"
          placeholder="DELETE"
          type="text"
        />
      </div>
      <div className="flex justify-between space-x-4">
        <CustomCancelButton label="Cancel" />
        <CustomButton label="Delete" />
      </div>
    </div>
  );
};

export default DeleteAccount;
