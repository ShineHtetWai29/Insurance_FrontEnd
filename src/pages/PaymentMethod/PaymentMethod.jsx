import React, { useState } from "react";
import { GiCancel } from "react-icons/gi";
import Images from "../../Images/Images";
import { Link } from "react-router-dom";

function PaymentMethod({inboundData,setInboundData,onClose, show}) {
  // console.log(inboundData);
  // const [childSelection, setChildSelection] = useState("")
  // setChildSelection(inboundData.isChild)
  if (!show) return null;
  return (
    <div
      id="container"
      className="fixed  inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
    >
      <form className="max-w-[800px] bg-white rounded p-4">
        <div className="flex justify-between " onClick={()=> { 
          onClose(false)
          } }>
          <h2 className="text-blue-800 text-[24px] font-bold underline">
            PREMIUM INFORMATION AND CHOOSE PAYMENT METHOD
          </h2>
          <GiCancel className="text-[25px] text-blue-800" />
        </div>

        <table className="w-full my-4">
          <tbody>
            <tr className="grid grid-cols-2 bg-[#0000004d] mb-1">
              <td className="px-4 py-1 text-[#333]">Insured For</td>
              <td className="px-4 py-1 text-[#333] font-bold">
              {inboundData.isChild ? "Buy For Child" : "Buy For This Passport Holder"}
              </td>
            </tr>
            <tr className="grid grid-cols-2 bg-[#0000004d] mb-1">
              <td className="px-4 py-1 text-[#333]">Premium Amount</td>
              <td className="px-4 py-1 text-[#333] font-bold">{inboundData.premiumRate} USD</td>
            </tr>
            <tr className="grid grid-cols-2 bg-[#0000004d] mb-1">
              <td className="px-4 py-1 text-[#333]">Net Premium</td>
              <td className="px-4 py-1 text-[#333] font-bold">{inboundData.premiumRate} USD</td>
            </tr>
            <tr className="grid grid-cols-2 bg-[#0000004d] mb-1">
              <td className="px-4 py-1 text-[#333]">Age (Year)</td>
              <td className="px-4 py-1 text-[#333] font-bold">{inboundData.age}</td>
            </tr>
            <tr className="grid grid-cols-2 bg-[#0000004d] mb-1">
              <td className="px-4 py-1 text-[#333]">Coverage Plan</td>
              <td className="px-4 py-1 text-[#333] font-bold">{inboundData.coveragePlan} Days</td>
            </tr>
            <tr className="grid grid-cols-2 bg-[#0000004d] mb-1">
              <td className="px-4 py-1 text-[#333]">Passport Number</td>
              <td className="px-4 py-1 text-[#333] font-bold">{inboundData.passportNo}</td>
            </tr>
            <tr className="grid grid-cols-2 bg-[#0000004d] mb-1">
              <td className="px-4 py-1 text-[#333]">
                Name
                <br />
                (as per passport)
              </td>
              <td className="px-4 py-1 text-[#333] font-bold">{inboundData.iPName}</td>
            </tr>
            <tr className="grid grid-cols-2 bg-[#0000004d] mb-1">
              <td className="px-4 py-1 text-[#333]">Estimated Arrival Date</td>
              <td className="px-4 py-1 text-[#333] font-bold">{inboundData.arrivalDate}</td>

            </tr>
          </tbody>
        </table>

        <h4 className="text-blue-800 text-[20px] font-bold">
          Choose Payment Method
        </h4>

        <div className="w-full grid mobile:grid-cols-4 p-8 gap-4 border-[1px] border-gray-400 my-4">
          <div>
            <input
              type="radio"
              value="visa"
              checked={inboundData.paymentMethod === "visa"}
              id="visa"
              hidden
              onChange={(e) => {
                setInboundData({...inboundData, paymentMethod: e.target.value})
              }}
            />
            <label htmlFor="visa" className="relative">
              <img
                src={Images.visacard}
                className={`mobile:col-span-1 w-full h-[110px] ${
                  inboundData.paymentMethod === "visa" ? "bg-gray-400" : ""
                } p-4 border-[1px] border-gray-400`}
                alt="Visa Card"
              />
              {inboundData.paymentMethod === "visa" && (
                <i className="fa-solid fa-circle-check absolute top-[-10px] right-[-10px] mt-0 mr-0 text-[30px] text-blue-800"></i>
              )}
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="master"
              value="master"
              hidden
              checked={inboundData.paymentMethod === "master"}
              onChange={(e) => {
                setInboundData({...inboundData, paymentMethod: e.target.value})
              }}
            />
            <label htmlFor="master" className="relative">
              <img
                src={Images.mastercard}
                className={`mobile:col-span-1 w-full p-4 max-h-[110px] ${
                  inboundData.paymentMethod === "master" ? "bg-gray-400" : ""
                } border-[1px] border-gray-400`}
                alt="Mastercard"
              />
              {inboundData.paymentMethod === "master" && (
                <i className="fa-solid fa-circle-check absolute top-[-10px] right-[-10px] mt-0 mr-0 text-[30px] text-blue-800"></i>
              )}
            </label>
          </div>
        </div>
        <Link to={"/checkinformation"}  className="text-white hover:bg-white hover:text-blue-700 hover:border-blue-700 hover:border-2 text-[20px] font-bold bg-blue-800 text-center py-1 px-6 rounded "
        >
          NEXT
        </Link>
      </form>
    </div>
  );
}

export default PaymentMethod;
