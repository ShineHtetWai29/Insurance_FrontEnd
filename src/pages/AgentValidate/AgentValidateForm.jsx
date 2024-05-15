import axios from "axios";
import React, { useState } from "react";
import { GiCancel } from "react-icons/gi";
import DataInputForm from "../DataInputForm/DataInputForm";

function AgentValidateForm({
  visible,
  onClose,
  validateResponse,
  setValidateResponse,
  setInboundInfo,
  inboundInfo,
}) {
  const [agentValidate, setAgentValidate] = useState({
    agentId: "",
    agentLicense: "",
    agentPassword: "",
  });
  const [isEmptyLicense, setIsEmptyLicense] = useState(false);
  const [isEmptyPassword, setIsEmptyPassword] = useState(false);

  const validateUrl = "http://localhost:8080/agent/validate";

  const validateHandler = (e) => {
    e.preventDefault();
    setIsEmptyLicense(agentValidate.agentLicense === "");
    setIsEmptyPassword(agentValidate.agentPassword === "");

    if (
      agentValidate.agentLicense === "" ||
      agentValidate.agentPassword === ""
    ) {
      return;
    }

    axios
      .post(validateUrl, {
        licenseNo: agentValidate.agentLicense,
        password: agentValidate.agentPassword,
      })
      .then((res) => {
        console.log(res);
        setValidateResponse({
          ...validateResponse,
          agentId: res.data.data.a_id,
          agentLicense: res.data.data.licenseNo,
          agentName: res.data.data.a_name,
        });
        onClose(false);
        console.log(validateResponse);
      })
      .catch((err) => alert("Agent is not found"));
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
    >
      <form className="w-[500px] bg-white rounded">
        <div className="flex  items-center justify-between p-4 border-b-2">
          <h5 className="text-[20px] font-bold text-blue-800">
            Check Agent Information
          </h5>
          <GiCancel
            className="text-[25px] text-blue-800"
            onClick={() => onClose()}
          />
        </div>
        <div className="p-4 ">
          <div className="">
            <label className="block font-bold text-blue-800 text-[15px] mb-[10px]">
              Agent License Number
              <span className="text-red-600 ml-2">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded "
              required
              placeholder="Enter Agent License No."
              value={agentValidate.agentLicense}
              onChange={(e) => {
                setAgentValidate({
                  ...agentValidate,
                  agentLicense: e.target.value,
                });
                setInboundInfo({
                  ...inboundInfo,
                  agentLicense: e.target.value,
                });
                setIsEmptyLicense(false);
              }}
            />
            {isEmptyLicense && (
              <p className="text-red-600">License number is required</p>
            )}
          </div>
          <div className="">
            <label className="block font-bold text-blue-800 text-[15px] my-[10px]">
              Password
              <span className="text-red-600 ml-2">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded "
              required
              placeholder="00-0000"
              value={agentValidate.agentPassword}
              onChange={(e) => {
                setAgentValidate({
                  ...agentValidate,
                  agentPassword: e.target.value,
                });
                setIsEmptyPassword(false);
              }}
            />
            {isEmptyPassword && (
              <p className="text-red-600">Password is required</p>
            )}
          </div>
          <button
            className="w-1/4 text-white bg-blue-800 text-center rounded py-2 mt-4"
            onClick={validateHandler}
          >
            Check Agent
          </button>
        </div>
      </form>
    </div>
  );
}

export default AgentValidateForm;
