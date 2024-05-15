import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import AgentValidateForm from "../AgentValidate/AgentValidateForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import { Context } from "../../App";
import { format } from "date-fns";
const DataInputForm = () => {
  const [countryInfo, setCountryInfo] = useState([]);
  // const errors = [{}];
  const [validateResponse, setValidateResponse] = useState({
    agentId: "",
    agentLicense: "",
    agentName: "",
  });

  // const [inboundInfo, setInboundInfo] = useState({ iPEmail: '', childDob: null });
  const [emailError, setEmailError] = useState();
  const [emailbPError, setbPEmailError] = useState();

  const today = new Date();
  const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());


  const handleInsuredEmailChange = (e) => {
    const email = e.target.value;
    setInboundInfo({
      ...inboundInfo,
      iPEmail: email,
    });

    // Simple email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const handleBeneficiaryEmailChange = (e) => {
    const email = e.target.value;
    setInboundInfo({
      ...inboundInfo,
      bPEmail: email,
    });

    // Simple email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setbPEmailError(true);
    } else {
      setbPEmailError(false);
    }
  };

  const [isIPName, setIsIPName] = useState(false);
  const [isIPDob, setIsIPDob] = useState(false);
  const [isIPGender, setIsIPGender] = useState(false);
  const [isArrivalDate, setIsArrivalDate] = useState(false);
  const [isJourneyFrom, setIsJourneyFrom] = useState(false);
  const [isCoveragePlan, setIsCoveragePlan] = useState(false);
  const [isIPPhone, setIsIPPhone] = useState(false);
  const [isIPresidentAddress, setIsIPresidentAddress] = useState(false);
  const [isPresidentCountry, setIsPresidentCountry] = useState(false);

  const [isPassportNO, setIsPassportNo] = useState(false);
  const [isPassportIssuedDate, setIsPassportIssuedDate] = useState(false);
  const [isPassportIssuedCountryId, setIsPassportIssuedCountry] =
    useState(false);
  const [isBPName, setIsBPName] = useState(false);
  const [isBPDob, setIsBPDob] = useState(false);
  const [isRelationship, setIsRelationship] = useState(false);
  const [isBPPhone, setIsBPPhone] = useState(false);
  const [isBResidentAddress, setIsbResidentAddress] = useState(false);
  const [isBResidentCountry, setIsbResidentCountry] = useState(false);
  const [isChildName, setIsChildName] = useState(false);
  const [isChildDob, setIsChilDob] = useState(false);
  const [isChildGender, setIsChilsGender] = useState(false);
  const [isGuardianceName, setIsGuardianceName] = useState(false);
  const [isCRelationship, setIsCRelationship] = useState(false);

  const [visibleModal, setVisibleModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAgent, setShowAgent] = useState("showselfservice");
  const [inboundInfo, setInboundInfo] = useContext(Context);

  const handleChange = (Date) => {
    setInboundInfo({
      ...inboundInfo,
      passportIssuedDate: format(Date, "yyyy-MM-dd"),
    });
  };
  const handleDobChange = (Date) => {
    setInboundInfo({ ...inboundInfo, iPDob: format(Date, "yyyy-MM-dd") });
  };
  const handleArrivalChange = (Date) => {
    setInboundInfo({ ...inboundInfo, arrivalDate: format(Date, "yyyy-MM-dd") });
  };
  const handleBeneficiaryDobChange = (Date) => {
    setInboundInfo({ ...inboundInfo, bPDob: format(Date, "yyyy-MM-dd") });
  };
  const handlechildDobChange = (Date) => {
    setInboundInfo({ ...inboundInfo, childDob: format(Date, "yyyy-MM-dd") });
  };

  useEffect(() => {
    const countryUrl = "http://localhost:8080/country";
    axios
      .get(countryUrl)

      .then((response) => {
        response.data.data.sort((a, b) =>
          a.country_name.localeCompare(b.country_name)
        );
        setCountryInfo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsIPName(inboundInfo.iPName === "");
    setIsIPDob(inboundInfo.iPDob === "");
    setIsIPGender(inboundInfo.iPGender === "");
    setIsArrivalDate(inboundInfo.arrivalDate === "");
    setIsJourneyFrom(inboundInfo.journeyFrom === "");
    setIsCoveragePlan(inboundInfo.coveragePlan === null);
    setIsIPPhone(inboundInfo.iPPhone === "");
    setIsIPresidentAddress(inboundInfo.iPresidentAddress === "");
    setIsPresidentCountry(inboundInfo.iPresidentCountry === "");
    setIsPassportNo(inboundInfo.passportNo === "");
    setIsPassportIssuedCountry(inboundInfo.passportIssuedCountry === "");
    setIsPassportIssuedDate(inboundInfo.passportIssuedDate === "");
    setIsBPName(inboundInfo.bPName === "");
    setIsBPDob(inboundInfo.bPDob === "");
    setIsRelationship(inboundInfo.relationship === "");
    setIsBPPhone(inboundInfo.bPPhone === "");
    setIsbResidentAddress(inboundInfo.bPresidentAddress === "");
    setIsbResidentCountry(inboundInfo.bPressidentCountry === "");
    setIsChildName(inboundInfo.childName === "");
    setIsChilDob(inboundInfo.childDob === "");
    setIsChilsGender(inboundInfo.childGender === "");
    setIsGuardianceName(inboundInfo.guardianceName === "");
    setIsCRelationship(inboundInfo.cRelationship === "");

    const premiumUrl = "http://localhost:8080/premium";
    console.log(inboundInfo);

    if (
      inboundInfo.iPName === "" ||
      inboundInfo.iPDob === "" ||
      inboundInfo.iPGender === "" ||
      inboundInfo.arrivalDate === "" ||
      inboundInfo.journeyFrom === "" ||
      inboundInfo.coveragePlan === "" ||
      inboundInfo.iPPhone === "" ||
      inboundInfo.iPresidentAddress === "" ||
      inboundInfo.iPresidentCountry === "" ||
      inboundInfo.passportNo === "" ||
      inboundInfo.passportIssuedDate === "" ||
      inboundInfo.passportIssuedCountry === "" ||
      inboundInfo.bPName === "" ||
      inboundInfo.bPDob === "" ||
      inboundInfo.relationship === "" ||
      inboundInfo.bPPhone === "" ||
      inboundInfo.bPresidentAddress === "" ||
      inboundInfo.bPressidentCountry === ""
    ) {
      return;
    } else if (inboundInfo.isChild === false) {
      axios
        .post(premiumUrl, {
          isChild: inboundInfo.isChild,
          co_plan: inboundInfo.coveragePlan,
          ch_dob: inboundInfo.childDob,
          i_dob: inboundInfo.iPDob,
        })
        .then((response) => {
          console.log(response.data);
          // setInboundInfo({...inboundInfo, })
          setInboundInfo({
            ...inboundInfo,
            premiumRate: response.data.premium,
            age: response.data.age,
          });
          setVisibleModal(true);
        });
    } else if (inboundInfo.isChild === true) {
      if (
        inboundInfo.childName === "" ||
        inboundInfo.childDob === "" ||
        inboundInfo.childGender === "" ||
        inboundInfo.guardianceName === "" ||
        inboundInfo.cRelationship === ""
      ) {
        return;
      }
      axios
        .post(premiumUrl, {
          isChild: inboundInfo.isChild,
          co_plan: inboundInfo.coveragePlan,
          ch_dob: inboundInfo.childDob,
          i_dob: inboundInfo.iPDob,
        })
        .then((response) => {
          console.log(response.data);
          // setInboundInfo({...inboundInfo, })
          setInboundInfo({
            ...inboundInfo,
            premiumRate: response.data.premium,
            age: response.data.age,
          });
          setVisibleModal(true);
        });
    }
  };

  return (
    <>
      <div className="bg-[#f0f4f9] py-6 mt-[-30px]">
        <h2 className="text-blue-800 text-[24px] sm:text-[18px] font-semibold text-center my-6 ">
          INBOUND TRAVEL ACCIDENT INSURANCE
        </h2>
        <div className="bg-white max-w-[1170px]  shadow-xl  mx-auto mobile:px-12 px-2 py-4 rounded-lg shadow-gray-400">
          <form className="">
            {/* PASSPORT INFORMATION */}
            <div className="py-[20px] border-b-[1px] border-gray-500 ">
              <h2 className="underline text-[18px]  font-bold text-blue-800">
                PASSPORT INFORMATION
              </h2>
              <div className="lg:flex gap-[32px] mt-4">
                <div className="w-1/3 md:w-full ">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Passport Number<span className="text-red-600 ml-2">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 text-gray border-[1px] border-gray-400 rounded "
                    placeholder="ENTER YOUR PASSPORT NO."
                    value={inboundInfo.passportNo}
                    onChange={(e) =>
                      setInboundInfo({
                        ...inboundInfo,
                        passportNo: e.target.value,
                      })
                    }
                  />
                  {isPassportNO && (
                    <p className="text-red-600">Passport Number is required</p>
                  )}
                </div>
                <div className="w-1/3 md:w-full">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Passport Issued Date
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <DatePicker
                    selected={inboundInfo.passportIssuedDate}
                    onChange={handleChange}
                    dateFormat="yyyy-MM-dd"
                    className="w-full p-2 text-gray border-[1px] border-gray-400 rounded "
                    maxDate={new Date()}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    placeholderText="YYYY/MM/DD"
                    yearDropdownItemNumber={30}
                  />
                  {isPassportIssuedDate && (
                    <p className="text-red-600">
                      Passport Issued Date is requied
                    </p>
                  )}
                </div>
                <div className="w-1/3 md:w-full ">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Passport Issued Country
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <select
                    type="text"
                    value={inboundInfo.passportIssuedCountry}
                    className="text-gray p-2 w-full border-[1px] border-gray-400 rounded "
                    onChange={(e) =>
                      setInboundInfo({
                        ...inboundInfo,
                        passportIssuedCountry: e.target.value,
                      })
                    }
                  >
                    <option className="text-gray">SELECT ONE</option>
                    {countryInfo.map((result) => (
                      <option
                        key={result.country_id}
                        value={result.country_name}
                      >
                        {result.country_name}
                      </option>
                    ))}
                  </select>
                  {isPassportIssuedCountryId && (
                    <p className="text-red-600">
                      Passport Issued Country is required
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* INSURED INFORMATION */}
            <div className="py-[20px] border-b-[1px]  border-gray-500  ">
              <h2 className="underline text-[18px] font-bold text-blue-800">
                INSURED INFORMATION
              </h2>
              <div className="grid mobile:grid-cols-2 tablet:text-[12px] gap-[32px] mt-5 ">
                <div className="flex">
                  <input
                    id="insured-radio-1"
                    type="radio"
                    // value={false}
                    checked={inboundInfo.isChild === false}
                    onChange={(e) =>
                      setInboundInfo({
                        ...inboundInfo,
                        isChild: false,
                      })
                    }
                    className="w-5 h-5 text-blue-800 bg-blue-800 border-blue-800 focus:ring-blue-800  "
                  />
                  <label
                    htmlFor="insured-radio-1"
                    className="ml-3 font-bold text-blue-800 mobile:text-[16px]"
                  >
                    BUY FOR YOURSELF(THIS PASSPORT HOLDER)
                  </label>
                </div>
                <div className="flex ">
                  <input
                    id="insured-radio-2"
                    type="radio"
                    // value={true}
                    checked={inboundInfo.isChild === true}
                    onChange={(e) =>
                      setInboundInfo({
                        ...inboundInfo,
                        isChild: true,
                      })
                    }
                    className="w-5 h-5 text-blue-800 bg-blue-800 border-blue-800 focus:ring-blue-800  "
                  />
                  <label
                    htmlFor="insured-radio-2"
                    className="ml-3 font-bold text-blue-800 mobile:text-[16px]"
                  >
                    BUY FOR THE CHILD TRAVEL TOGETHER WITH THIS PASSPORT HOLDER
                    <br />
                    (CHILD IS NOT HOLDING A VALID PASSPORT)
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-1 gap-y-3  gap-x-[32px] mt-4">
                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Name (as per passport)
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <input
                    type="text"
                    value={inboundInfo.iPName}
                    className="w-full p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded "
                    placeholder="ENTER INSURED NAME"
                    onChange={(e) =>
                      setInboundInfo({ ...inboundInfo, iPName: e.target.value })
                    }
                  />
                  {isIPName && <p className="text-red-600">Name is required</p>}
                </div>
                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Date of Birth(as per passport)
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <DatePicker
                    selected={inboundInfo.iPDob}
                    onChange={handleDobChange}
                    dateFormat="yyyy-MM-dd"
                    className="w-full p-2 text-gray border-[1px] border-gray-400 rounded "
                    maxDate={new Date()}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    placeholderText="yyyy-MM-dd"
                  />
                  {isIPDob && (
                    <p className="text-red-600">Date of Birth is required</p>
                  )}
                </div>
                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Gender (as per passport)
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <select
                    type="text"
                    value={inboundInfo.iPGender}
                    className="text-gray p-2 w-full border-[1px] border-gray-400 rounded "
                    onChange={(e) =>
                      setInboundInfo({
                        ...inboundInfo,
                        iPGender: e.target.value,
                      })
                    }
                  >
                    <option value="" className="text-gray">
                      SELECT ONE
                    </option>
                    <option value="male" className="text-gray">
                      Male
                    </option>
                    <option value="female" className="text-gray">
                      Female
                    </option>
                  </select>
                  {isIPGender && (
                    <p className="text-red-600">Gender is required</p>
                  )}
                </div>
                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Estimated Arrival Date
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <DatePicker
                    selected={inboundInfo.arrivalDate}
                    onChange={handleArrivalChange}
                    dateFormat="yyyy-MM-dd"
                    className="w-full p-2 text-gray border-[1px] border-gray-400 rounded "
                    minDate={new Date()}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    placeholderText="yyyy-MM-dd"
                  />
                  {isArrivalDate && (
                    <p className="text-red-600">Arrival Date is required</p>
                  )}
                </div>
                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Journey From
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <select
                    type="text"
                    value={inboundInfo.journeyFrom}
                    className="text-gray p-2 w-full border-[1px] border-gray-400 rounded "
                    onChange={(e) =>
                      setInboundInfo({
                        ...inboundInfo,
                        journeyFrom: e.target.value,
                      })
                    }
                  >
                    <option className="text-gray">SELECT ONE</option>
                    {countryInfo.map((result) => (
                      <option
                        key={result.country_id}
                        value={result.country_name}
                      >
                        {result.country_name}
                      </option>
                    ))}
                  </select>
                  {isJourneyFrom && (
                    <p className="text-red-600">Journey From is required</p>
                  )}
                </div>
                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Journey To
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <input
                    type="text"
                    value={inboundInfo.journeyTo}
                    className=" bg-gray-100 border-[1px] border-gray-400  text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
                    disabled
                    placeholder="MYANMAR"
                  ></input>
                </div>
                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Coverage Plan
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <select
                    type="text"
                    value={inboundInfo.coveragePlan}
                    className="text-gray p-2 w-full border-[1px] border-gray-400 rounded "
                    onChange={(e) =>
                      setInboundInfo({
                        ...inboundInfo,
                        coveragePlan: parseInt(e.target.value),
                      })
                    }
                  >
                    <option className="text-gray" value="">
                      SELECT ONE
                    </option>
                    <option className="text-gray" value={15}>
                      15 DAYS
                    </option>
                    <option className="text-gray" value={30}>
                      30 DAYS
                    </option>
                    <option className="text-gray" value={60}>
                      60 DAYS
                    </option>
                    <option className="text-gray" value={90}>
                      90 DAYS
                    </option>
                    <option className="text-gray" value={120}>
                      120 DAYS
                    </option>
                    <option className="text-gray" value={150}>
                      150 DAYS
                    </option>
                    <option className="text-gray" value={180}>
                      180 DAYS
                    </option>
                    <option className="text-gray" value={210}>
                      210 DAYS
                    </option>
                    <option className="text-gray" value={240}>
                      240 DAYS
                    </option>
                    <option className="text-gray" value={270}>
                      270 DAYS
                    </option>
                    <option className="text-gray" value={300}>
                      300 DAYS
                    </option>
                    <option className="text-gray" value={330}>
                      330 DAYS
                    </option>
                    <option className="text-gray" value={360}>
                      360 DAYS
                    </option>
                  </select>
                  {isCoveragePlan && (
                    <p className="text-red-600">Coverage Plan is required</p>
                  )}
                </div>
                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Contact Phone Number
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <div className="flex w-full test-[15px] border-[1px] border-gray-400 rounded ">
                    <select
                      type="text"
                      className="w-[100px] text-gray p-2 bg-none "
                      onChange={(e) =>
                        setInboundInfo({
                          ...inboundInfo,
                          iPCode: e.target.value,
                        })
                      }
                    >
                      {countryInfo.map((result) => (
                        <option
                          key={result.country_id}
                          value={result.country_code}
                        >
                          {result.country_code}
                          {result.country_name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="number"
                      className="w-full px-2 "
                      placeholder="ENTER PHONE NUMBER"
                      onChange={(e) =>
                        setInboundInfo({
                          ...inboundInfo,
                          iPPhone: `${inboundInfo.iPCode} ${e.target.value}`,
                        })
                      }
                    />
                  </div>
                  {isIPPhone && (
                    <p className="text-red-600">Contact Number is required</p>
                  )}
                </div>
                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px] ">
                    Insured's Email
                  </label>
                  <input
                    type="email"
                    value={inboundInfo.iPEmail}
                    className={`w-full p-2 text-gray border-[1px]  focus:ring-blue-500 focus:border-blue-500  rounded ${
                      emailError ? "border-red-500" : "border-gray-400"
                    }`}
                    onChange={handleInsuredEmailChange}
                    placeholder="Insured's Email Address"
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mt-2">Enter a valid Email Address</p>
                  )}
                </div>
                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px] mb-[8px]">
                    Address in Myanmar (Max: 250 Char)
                  </label>
                  <textarea
                    type="text"
                    value={inboundInfo.iPAddress}
                    className="w-full h-[110px] p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded "
                    onChange={(e) =>
                      setInboundInfo({
                        ...inboundInfo,
                        iPAddress: e.target.value,
                      })
                    }
                    placeholder="..."
                  />
                </div>
                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Resident Address (Max: 250 Char)
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <textarea
                    type="text"
                    value={inboundInfo.iPresidentAddress}
                    className="w-full h-[110px] p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded "
                    onChange={(e) =>
                      setInboundInfo({
                        ...inboundInfo,
                        iPresidentAddress: e.target.value,
                      })
                    }
                    placeholder="..."
                  />
                  {isIPresidentAddress && (
                    <p className="text-red-600">Resident Address is required</p>
                  )}
                </div>
                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Resident Country
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <select
                    type="text"
                    value={inboundInfo.iPresidentCountry}
                    className="text-gray p-2 w-full border-[1px] border-gray-400 rounded "
                    onChange={(e) =>
                      setInboundInfo({
                        ...inboundInfo,
                        iPresidentCountry: e.target.value,
                      })
                    }
                  >
                    <option className="text-gray" value="">
                      SELECT ONE
                    </option>
                    {countryInfo.map((result) => (
                      <option key={result.country_id} value={result.country_id}>
                        {result.country_name}
                      </option>
                    ))}
                  </select>
                  {isPresidentCountry && (
                    <p className="text-red-600">Resident Country is required</p>
                  )}
                </div>
              </div>
            </div>

            {/* CHILD INFORMATION */}
            {inboundInfo.isChild && (
              <div className="bg-[#eee] py-6 px-4 mb-4">
                <h2 className="underline text-[18px] font-bold text-blue-800">
                  CHILD INFORMATION(CHILD IS NOT HOLDING A VALID PASSPORT)
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-1 gap-y-3 gap-x-[32px] mt-8 ">
                  <div className="">
                    <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                      Child Name
                      <span className="text-red-600 ml-2">*</span>
                    </label>
                    <input
                      type="text"
                      value={inboundInfo.childName}
                      className="w-full p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded "
                      onChange={(e) =>
                        setInboundInfo({
                          ...inboundInfo,
                          childName: e.target.value,
                        })
                      }
                      placeholder="Enter Child Name"
                    />
                    {isChildName && (
                      <p className="text-red-600">Child Name is required</p>
                    )}
                  </div>
                  <div className="">
                    <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                      Date of Birth
                      <span className="text-red-600 ml-2">*</span>
                    </label>
                    <DatePicker
                      selected={inboundInfo.childDob}
                      onChange={handlechildDobChange}
                      dateFormat="yyyy-MM-dd"
                      className="w-full p-2 text-gray border-[1px] border-gray-400 rounded"
                      minDate={maxDate}
                      maxDate={new Date()}
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      placeholderText="yyyy-MM-dd"
                    />
                    {isChildDob && (
                      <p className="text-red-600">Date of Birth is required</p>
                    )}
                  </div>
                  <div className="">
                    <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                      Gender
                      <span className="text-red-600 ml-2">*</span>
                    </label>
                    <select
                      type="text"
                      value={inboundInfo.childGender}
                      className="text-gray p-2 w-full border-[1px] border-gray-400 rounded "
                      onChange={(e) =>
                        setInboundInfo({
                          ...inboundInfo,
                          childGender: e.target.value,
                        })
                      }
                    >
                      <option className="text-gray" value="">
                        SELECT ONE
                      </option>
                      <option className="text-gray" value="Male">
                        Male
                      </option>
                      <option className="text-gray" value="Female">
                        Female
                      </option>
                    </select>
                    {isChildGender && (
                      <p className="text-red-600">Gender is required</p>
                    )}
                  </div>
                  <div className="">
                    <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                      Guardiance Name
                      <span className="text-red-600 ml-2">*</span>
                    </label>
                    <input
                      type="text"
                      value={inboundInfo.guardianceName}
                      className="w-full p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded "
                      onChange={(e) =>
                        setInboundInfo({
                          ...inboundInfo,
                          guardianceName: e.target.value,
                        })
                      }
                      placeholder="ENTER GUARDIANCE NAME"
                    />
                    {isGuardianceName && (
                      <p className="text-red-600">
                        Guardiance Name is required
                      </p>
                    )}
                  </div>
                  <div className="">
                    <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                      Relationship
                      <span className="text-red-600 ml-2">*</span>
                    </label>
                    <input
                      type="text"
                      value={inboundInfo.cRelationship}
                      className="w-full p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded "
                      onChange={(e) =>
                        setInboundInfo({
                          ...inboundInfo,
                          cRelationship: e.target.value,
                        })
                      }
                      placeholder="ENTER RELATIONSHIP"
                    />
                    {isCRelationship && (
                      <p className="text-red-600">Relationship is required</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* BENEFICIARY INFORMATION */}
            <div className="py-[20px] ">
              <h2 className="underline text-[18px] font-bold text-blue-800">
                BENEFICIARY INFORMATION(In English)
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-1 gap-y-3   gap-x-[32px] mt-4">
                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Name
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <input
                    type="text"
                    value={inboundInfo.bPName}
                    className="w-full p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded "
                    onChange={(e) =>
                      setInboundInfo({ ...inboundInfo, bPName: e.target.value })
                    }
                    placeholder="ENTER NAME"
                  />
                  {isBPName && (
                    <p className="text-red-600">Beneficiary Name is required</p>
                  )}
                </div>
                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Date of Birth
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <DatePicker
                    selected={inboundInfo.bPDob}
                    onChange={handleBeneficiaryDobChange}
                    dateFormat="yyyy-MM-dd"
                    className="w-full p-2 text-gray border-[1px] border-gray-400 rounded "
                    maxDate={new Date()}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    placeholderText="yyyy-MM-dd"
                  />
                  {isBPDob && (
                    <p className="text-red-600">Date of Birth is required</p>
                  )}
                </div>

                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    National Identification Number
                  </label>
                  <input
                    type="text"
                    value={inboundInfo.NRC}
                    className="w-full p-2 text-gray border-[1px] border-gray-400 rounded "
                    placeholder="ENTER NATIONAL IDENTIFICATION NUMBER"
                    onChange={(e) =>
                      setInboundInfo({ ...inboundInfo, NRC: e.target.value })
                    }
                  />
                </div>
                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Relationship
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <input
                    type="text"
                    value={inboundInfo.relationship}
                    className="w-full p-2 text-gray border-[1px] border-gray-400 rounded "
                    placeholder="ENTER RELATIONSHIP"
                    onChange={(e) =>
                      setInboundInfo({
                        ...inboundInfo,
                        relationship: e.target.value,
                      })
                    }
                  />
                  {isRelationship && (
                    <p className="text-red-600">Relationship is required</p>
                  )}
                </div>

                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Contact Phone Number
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <div className="flex w-full test-[15px] border-[1px] border-gray-400 rounded ">
                    <select
                      type="text"
                      className="w-[100px] text-gray p-2 bg-none "
                      onChange={(e) =>
                        setInboundInfo({
                          ...inboundInfo,
                          bPCode: e.target.value,
                        })
                      }
                    >
                      <option className="text-gray">(+93) A</option>
                      {countryInfo.map((result) => (
                        <option
                          key={result.country_id}
                          value={result.country_code}
                        >
                          {result.country_code}
                          {result.country_name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="number"
                      className="w-full p-2 "
                      placeholder="ENTER PHONE NUMBER"
                      onChange={(e) =>
                        setInboundInfo({
                          ...inboundInfo,
                          bPPhone: `${inboundInfo.bPCode} ${e.target.value}`,
                        })
                      }
                    />
                  </div>
                  {isBPPhone && (
                    <p className="text-red-600">
                      Contact Phone Number is required
                    </p>
                  )}
                </div>
                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px] ">
                    Email
                  </label>
                  <input
                    type="email"
                    value={inboundInfo.bPEmail}
                    className={`w-full p-2 text-gray border-[1px]  focus:ring-blue-500 focus:border-blue-500  rounded ${
                      emailError ? "border-red-500" : "border-gray-400"
                    }`}
                    onChange={handleBeneficiaryEmailChange}
                    placeholder="Beneficiary's Email Address"
                  />
                  {emailbPError && (
                    <p className="text-red-500 text-sm mt-2">Enter a valid Email Address</p>
                  )}
                </div>

                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Resident Address (Max: 250 Char)
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <textarea
                    type="text"
                    value={inboundInfo.bPresidentAddress}
                    className="w-full h-[110px] p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded "
                    placeholder="..."
                    onChange={(e) =>
                      setInboundInfo({
                        ...inboundInfo,
                        bPresidentAddress: e.target.value,
                      })
                    }
                  />
                  {isBResidentAddress && (
                    <p className="text-red-700">Resident Address is required</p>
                  )}
                </div>
                <div className="">
                  <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                    Resident Country
                    <span className="text-red-600 ml-2">*</span>
                  </label>
                  <select
                    type="text"
                    value={inboundInfo.bPressidentCountry}
                    className="text-gray p-2 w-full border-[1px] border-gray-400 rounded "
                    onChange={(e) =>
                      setInboundInfo({
                        ...inboundInfo,
                        bPressidentCountry: e.target.value,
                      })
                    }
                  >
                    <option className="text-gray">SELECT ONE</option>
                    {countryInfo.map((result) => (
                      <option
                        className="text-gray"
                        key={result.country_id}
                        value={result.country_id}
                      >
                        {result.country_name}
                      </option>
                    ))}
                  </select>
                  {isBResidentCountry && (
                    <p className="text-red-700">Resident Country is required</p>
                  )}
                </div>
              </div>
            </div>

            {/* SERVIICE AGENT SECTION */}
            <div className="bg-[#eee] py-6 px-4 mb-4">
              <h5 className="underline text-[18px] font-bold text-blue-800">
                This section is only used for servicing agent of Myanmar
                Insurance
              </h5>
              <div className="mobile:flex gap-4">
                <div className="flex  gap-2 items-center py-6">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value="showselfservice"
                    name="bordered-radio"
                    checked={showAgent === "showselfservice"}
                    onChange={(e) => setShowAgent(e.target.value)}
                    className="w-5 h-5 text-blue-800 bg-blue-800 border-blue-800 focus:ring-blue-800  "
                  />

                  <label
                    htmlFor="bordered-radio-1"
                    className="flex bg-white items-center gap-2 mobile:text-[16px]md:text-[10px] py-2 px-4"
                  >
                    <AiOutlineSetting className="text-blue-800 size-[30px]" />

                    <span className="text-blue-800 font-bold">
                      SELF-SERVICE
                    </span>
                  </label>
                </div>
                <div className="flex gap-2  items-center py-6">
                  <input
                    id="bordered-radio-2"
                    type="radio"
                    value="showagent"
                    checked={showAgent === "showagent"}
                    name="bordered-radio"
                    onClick={() => setShowModal(true)}
                    onChange={(e) => setShowAgent(e.target.value)}
                    className="w-5 h-5 text-blue-800 bg-blue-800 border-blue-800 focus:ring-blue-800   "
                  />
                  <label
                    htmlFor="bordered-radio-2"
                    className="flex bg-white items-center gap-2 mobile:text-[16px]md:text-[10px] py-2 px-4"
                  >
                    <AiOutlineSetting className="text-blue-800 size-[30px]" />

                    <span className="text-blue-800 font-bold">
                      ASSOCIATION AGENT VERIFICATION
                    </span>
                  </label>
                </div>
              </div>
              {showAgent === "showagent" && (
                <div className="grid lg:grid-cols-6 grid-cols-2 md:grid-cols-2 gap-[32px]">
                  <div className="col-span-2">
                    <label className=" block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                      Agent License Number
                      <span className="text-red-600 ml-2">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded "
                      placeholder="AGENT LICENSE NUMBER"
                      value={validateResponse.agentLicense}
                      onChange={(e) =>
                        setInboundInfo({
                          ...inboundInfo,
                          agentLicense: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block font-bold text-blue-800 mobile:text-[16px]mb-[8px]">
                      NAME
                      <span className="text-red-600 ml-2">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded "
                      value={validateResponse.agentName}
                      onChange={(e) =>
                        setInboundInfo({
                          ...inboundInfo,
                          agentName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center h-[50px] mt-[22px]">
                    <span
                      onClick={() => setShowModal(true)}
                      className="col-span-1 col-start-5 text-start  underline text-blue-800 font-bold"
                    >
                      EDIT
                    </span>
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="text-[15px] hover:bg-white hover:text-blue-700 hover:border-blue-700 hover:border-2 text-white text-center px-[24px] py-[8px] bg-blue-800 rounded bold"
              onClick={submitHandler}
            >
              SUBMIT AND CONTINUE
            </button>
          </form>
        </div>
      </div>

      <AgentValidateForm
        onClose={() => setShowModal(false)}
        visible={showModal}
        setValidateResponse={setValidateResponse}
        validateResponse={validateResponse}
        setInboundInfo={setInboundInfo}
        inboundInfo={inboundInfo}
      />

      <PaymentMethod
        inboundData={inboundInfo}
        setInboundData={setInboundInfo}
        onClose={() => setVisibleModal(false)}
        show={visibleModal}
      />
    </>
  );
};

export default DataInputForm;
