import React, { useEffect, useState } from "react";

import "./App.css";
import DataInputForm from "./pages/DataInputForm/DataInputForm";
import EnquiryForm from "./pages/Enquiry/EnquiryForm";
import AgentValidateForm from "./pages/AgentValidate/AgentValidateForm";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import { Header } from "./pages/Header/Header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Footer } from "./pages/Footer/Footer";
import MyDatePicker from "./pages/MyDatePicker";
import axios from "axios";
import PaymentMethod from "./pages/PaymentMethod/PaymentMethod";
import CheckInformation from "./pages/DataInputForm/CheckInformation";

export const Context = React.createContext();

function App() {
  const [inboundInfo, setInboundInfo] = useState({
    // INSURED PERSON ATTRIBUTE
    iPName: "",
    iPDob: "",
    iPGender: "",
    arrivalDate: "",
    journeyFrom: "",
    journeyTo: "Myanmar",
    coveragePlan:null ,
    iPPhone: "",
    iPCode:"",
    iPEmail: "",
    iPAddress: "",
    iPresidentAddress: "",
    iPresidentCountry: "",

    // PASSPORT ATTRIBUTE
    passportNo: "",
    passportIssuedDate: "",
    passportIssuedCountry: "",

    // BENEFICIARY ATTRIBUTE
    bPName: "",
    bPDob: "",
    NRC: "",
    relationship: "",
    bPPhone: "",
    bPCode:"",
    bPNumber:"",
    bPEmail: "",
    bPresidentAddress: "",
    bPressidentCountry: "",

    // CHILD ATTRIBUTE
    childName: "",
    childDob: "",
    childGender: "",
    guardianceName: "",
    cRelationship: "",
    isChild: false,

    // AGENT ATTRIBUTE
    agentLicense: "",
    agentName: "",

    // PREMIUM ATTRIBUTE
    age:"",
    premiumRate: "",
    paymentMethod: "visa"
  });
  
  return  (
    <div>
      <Context.Provider value={[inboundInfo, setInboundInfo]}>
      <BrowserRouter>
        <Header />


        <Routes>
          <Route path="" element={<DataInputForm/>}/>
          <Route path="/success" element={<SuccessPage/>}/>
          <Route path="/enquiry" element={<EnquiryForm/>}/>
          <Route path="/datepicker" element={<MyDatePicker/>}/>
          <Route path="/payment" element={<PaymentMethod/>}/>
          <Route path="/checkinformation" element={<CheckInformation/>}/>
        </Routes>
        <Footer />
 
      </BrowserRouter>
      </Context.Provider>
      
    </div>
  );
}

export default App;
