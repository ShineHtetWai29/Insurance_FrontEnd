import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../App";
import { da } from "date-fns/locale";
import PDFFile from "../../PDFFile/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

function EnquiryForm() {
  const [countryInfo, setCountryInfo] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [enquiry, setEnquiry] = useState({
    passportNumber: "",
    passportIssuedCountry: "",
  });
  //  const [inboundInfo, setInboundInfo] = useContext(Context)

  useEffect(() => {
    const countryUrl = "http://localhost:8080/country";
    axios
      .get(countryUrl)
      .then((response) => {
        console.log(response.data);
        setCountryInfo(response.data.data);
        console.log(countryInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    const enquiryUrl = "http://localhost:8080/inbounds/validate";
    if (!enquiry.passportNumber || !enquiry.passportIssuedCountry) {
      if (!enquiry.passportNumber) {
        alert("Please enter Passport Number");
      } else if (!enquiry.passportIssuedCountry) {
        alert("Please select Passport Issued Country");
      }
    }
    console.log(enquiry);
    axios
      .post(enquiryUrl, {
        passportNumber: enquiry.passportNumber,
        passportCountry: enquiry.passportIssuedCountry,
      })
      .then((response) => {
        console.log(response.data);
        setTableData(response.data);
        console.log(tableData.in_proposal_id);
        setShowTable(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-[#f0f4f9] py-6 mt-[-30px]">
      <div className="bg-white w-[1170px] mx-auto p-8 rounded-lg shadow-gray-400">
        <div className="grid grid-cols-2 gap-[32px]">
          <div className="">
            <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
              Passport Number
              <span className="text-red-600 ml-2">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded "
              required
              placeholder="..."
              value={enquiry.passportNumber}
              onChange={(e) =>
                setEnquiry({ ...enquiry, passportNumber: e.target.value })
              }
            />
          </div>
          <div className="">
            <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
              Passport Issued Country
              <span className="text-red-600 ml-2">*</span>
            </label>
            <select
              type="text"
              className="text-gray p-2 w-full border-[1px] border-gray-400 rounded required"
              required
              value={enquiry.passportIssuedCountry}
              onChange={(e) =>
                setEnquiry({
                  ...enquiry,
                  passportIssuedCountry: e.target.value,
                })
              }
            >
              <option className="text-gray">SELECT ONE</option>
              {countryInfo.map((result) => (
                <option
                  key={result.country_id}
                  value={result.country_name}
                  className="text-gray"
                >
                  {result.country_name}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={searchHandler}
            className="w-1/4 text-white bg-blue-800 text-center rounded py-2"
          >
            Search
          </button>
        </div>

        {showTable && (
          <div>
            <h4 className="text-blue-800 text-[20px] font-bold my-6">
              Inbound Travel Accident Insurance Purchase History
            </h4>
            <div className="overflow-x-auto ">
              <table className="text-sm text-center rtl:text-right w-[1400px]">
                <thead className="text-[18px]  text-white  bg-blue-800 ">
                  <tr>
                    <th scope="col" className="px-6 py-3 ">
                      No.
                    </th>
                    <th scope="col" className="px-6 py-3  ">
                      Order ID
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Insured Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Age
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Contact No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Coverage Plan
                      <br />
                      (Days)
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Premier Amount
                      <br />
                      (USD)
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Payment Date
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                {tableData.map((data) => (
                  <tbody key={data.in_proposal_id}>
                    <tr className="bg-white border-b ">
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">1234567</td>
                      <td className="px-6 py-4">{data.insuredPerson.i_name}</td>
                      <td className="px-6 py-4">{data.age}</td>
                      <td className="px-6 py-4">
                        {data.insuredPerson.i_phone}
                      </td>
                      <td className="px-6 py-4">{data.co_plan}</td>
                      <td className="px-6 py-4">{data.pre_rate}</td>
                      <td className="px-6 py-4">30 Apr 2024</td>
                      <td className="px-6 py-4">
                        <PDFDownloadLink
                          document={<PDFFile  />}
                          fileName="Certificate"
                          fileDat
                        >
                          {({ loading }) =>
                            loading ? (
                              <button>loadingDocumet...</button>
                            ) : (
                              <button className="bg-blue-600 p-2 text-center">Download</button>
                            )
                          }
                        </PDFDownloadLink>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EnquiryForm;
