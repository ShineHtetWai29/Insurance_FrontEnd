import React, { useContext, useEffect, useState } from "react";
import DataInputForm from "./DataInputForm";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { Context } from "../../App";

function CheckInformation() {
  const Navigate = useNavigate()
  // const location = useLocation();
  // console.log(props, "props");
  // console.log(location, "useLocation Hook");
  // const inboundInfo = location.state?.inboundInfo;
  // // console.log(data.premiumRate)
  const [iPCountry, setIPCountry] = useState("");
  const [bPCountry, setBPCountry] = useState("");
  const [inboundInfo, setInboundInfo] = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/country/${inboundInfo.iPresidentCountry}`)
      .then((response) => {
        console.log(response.data);
        setIPCountry(response.data.country_name);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/country/${inboundInfo.bPressidentCountry}`)
      .then((response) => {
        console.log(response.data);
        setBPCountry(response.data.country_name);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
console.log(inboundInfo);
    const sentDataUrl = "http://localhost:8080/inbounds";
    axios
      .post(sentDataUrl, {
        j_from: inboundInfo.journeyFrom,
        j_to: inboundInfo.journeyTo,
        e_ar_date: inboundInfo.arrivalDate,
        co_plan: inboundInfo.coveragePlan,
        i_name: inboundInfo.iPName,
        i_dob: inboundInfo.iPDob,
        i_gender: inboundInfo.iPGender,
        i_phone: inboundInfo.iPPhone,
        i_email: inboundInfo.iPEmail,
        i_person_address: inboundInfo.iPAddress,
        r_person_address: inboundInfo.iPresidentAddress,
        r_country_i: inboundInfo.iPresidentCountry,
        passportNumber: inboundInfo.passportNo,
        i_passport_issue_date: inboundInfo.passportIssuedDate,
        isChild: inboundInfo.isChild,
        licenseNo:inboundInfo.agentLicense,
        ch_name: inboundInfo.childName,
        ch_dob: inboundInfo.childDob,
        ch_gender: inboundInfo.childGender,
        ch_gu_Name: inboundInfo.guardianceName,
        ch_rs: inboundInfo.cRelationship,
        b_name: inboundInfo.bPName,
        b_date: inboundInfo.bPDob,
        b_nrc: inboundInfo.NRC,
        b_rs: inboundInfo.relationship,
        b_ph: inboundInfo.bPPhone,
        b_email: inboundInfo.bPEmail,
        b_address: inboundInfo.bPresidentAddress,
        r_country_b: inboundInfo.bPressidentCountry,
        passportCountry: inboundInfo.passportIssuedCountry,
        pre_rate: inboundInfo.premiumRate,
        age: inboundInfo.age
      })
      .then((response) => {
        console.log(response)
        Navigate("/success")})
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bg-[#f0f4f9] py-6 mt-[-30px]">
        <div className="bg-white w-[1170px] shadow-xl my-6  mx-auto px-6 py-2 rounded-lg shadow-gray-400">
          <form className="text-left p-10">
            <h1 className="font-semibold text-xl text-blue-800">
              PLEASE CHECK PAYMENT AND INSURED PERSON INFORMATION
            </h1>
            <h3 className="pt-7 pb-3 font-medium underline underline-offset-1 text-blue-800">
              PAYMENT INFORMATION
            </h3>
            <div className="grid grid-cols-2 bg-yellow-400 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Payment Channel</p>
              <p className="uppercase">{inboundInfo.paymentMethod}</p>
            </div>
            <div className="grid grid-cols-2 bg-yellow-400 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Premium Amount</p>
              <p>{inboundInfo.premiumRate}.00 USD</p>
            </div>
            <div className="grid grid-cols-2 bg-yellow-400 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Service Charge ( Visa )</p>
              <p>{(inboundInfo.premiumRate * 0.0364).toFixed(2)} USD</p>
            </div>
            <div className="grid grid-cols-2 bg-yellow-400 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">
                Total Amount (Including Service Charges)
              </p>
              <p>
                {inboundInfo.premiumRate + inboundInfo.premiumRate * 0.0364} USD
              </p>
            </div>
            <div className="grid grid-cols-2 bg-yellow-400 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">
                Net Amount (Including Service Charges)
              </p>
              <p>
                {inboundInfo.premiumRate + inboundInfo.premiumRate * 0.0364} USD
              </p>{" "}
            </div>
            <h3 className="pt-7 pb-3 font-medium underline underline-offset-1 text-blue-800">
              INSURED PERSON'S PASSPORT INFORMATION
            </h3>
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Passport Number</p>
              <p>{inboundInfo ? inboundInfo.passportNo : ""}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Passport Issued Date</p>
              <p>{inboundInfo.passportIssuedDate}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Passport Issued Country</p>
              <p>{inboundInfo ? inboundInfo.passportIssuedCountry : ""}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <h3 className="pt-7 pb-3 font-medium underline underline-offset-1 text-blue-800">
              INSURED PERSON INFORMATION
            </h3>
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Insured For</p>
              <p>
                {inboundInfo.isChild
                  ? "Insured For Child"
                  : "Insuerd For This Passport Holder"}
              </p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Name (as per passport)</p>
              <p>{inboundInfo ? inboundInfo.iPName : ""}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">
                Date of Birth (as per passport)
              </p>
              <p>{inboundInfo.iPDob}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Gender (as per passport)</p>
              <p>{inboundInfo.iPGender}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Estimated Arrival Date</p>
              <p>{inboundInfo.arrivalDate}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Journey From</p>
              <p>{inboundInfo ? inboundInfo.journeyFrom : ""}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Journey To</p>
              <p>Myanmar</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Coverage Plan</p>
              <p>{inboundInfo.coveragePlan} DAYS</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Contact Phone Number</p>
              <p>{inboundInfo ? inboundInfo.iPPhone : ""}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Email Adress</p>
              <p>{inboundInfo ? inboundInfo.iPEmail : ""}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Resident Address</p>
              <p>{inboundInfo ? inboundInfo.iPresidentAddress : ""}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Resident Country</p>
              <p>{iPCountry}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Address in Myanmar</p>
              <p>{inboundInfo ? inboundInfo.iPAddress : ""}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <h3 className="pt-7 pb-3 font-medium underline underline-offset-1 text-blue-800">
              BENEFIACIARY INFORMATION
            </h3>
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Name</p>
              <p>{inboundInfo ? inboundInfo.bPName : ""}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Date of Birth</p>
              <p>{inboundInfo.bPDob}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">
                National Identification Number
              </p>
              <p>{inboundInfo ? inboundInfo.NRC : ""}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Relationship</p>
              <p>{inboundInfo ? inboundInfo.relationship : ""}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Contact Number</p>
              <p>{inboundInfo ? inboundInfo.bPPhone : ""}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Email</p>
              <p>{inboundInfo ? inboundInfo.bPEmail : ""}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Resident Address</p>
              <p>{inboundInfo ? inboundInfo.bPresidentAddress : ""}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="grid grid-cols-2 h-10 items-center mb-0.5">
              <p className="font-medium pl-3 w-40%">Resident Country</p>
              <p>{bPCountry}</p>
            </div>
            <hr className="bg-gray-300 h-[1.5px]" />
            <div className="mt-5">
              <button
                type="submit"
                className=" bg-blue-800 h-8 w-32 text-white rounded-sm"
                onClick={submitHandler}
              >
                COMFIRM
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CheckInformation;
