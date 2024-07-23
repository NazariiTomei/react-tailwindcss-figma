import React from "react";
import CustomHeader from "../Components/CustomHeader";
import CustomSubHeader from "../Components/CustomSubHeader";
import CustomTextField from "../Components/CustomTextField";
import CustomCancelButton from "../Components/CustomCancelButton";
import CustomButton from "../Components/CustomButton";

const DeleteAccount = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#040b15] px-4 py-8">
      <div className="w-full max-w-lg bg-[#111A26] p-8 rounded-lg space-y-8 z-[1]">
        <CustomHeader title="Delete Account" />
        <CustomSubHeader subtitle="If you delete your account you will no longer be able to access any of your existing Grid rewards or log in to Grid. Are you sure?" />
        <div className="pt-4">
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
    </div>
  );
};

export default DeleteAccount;
