import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function SuccessPage() {
  return (
    <div className="bg-[#f0f4f9] py-6 mt-[-30px]">
      <div className="bg-white max-w-[1170px] mx-auto  my-8 text-center p-8 rounded-lg shadow-gray-400">
        <IoIosCheckmarkCircleOutline className="text-green-600 mx-auto mb-4 text-[80px]" />
        <span className="text-[20px] font-bold text-blue-800">
          Your Payment is Success!
        </span>
      </div>
    </div>
  );
}

export default SuccessPage;
