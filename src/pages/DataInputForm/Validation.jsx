import React from "react";

export default function Validation({ inboundInfo }) {
  const errors = {};
  console.log(errors);
  if(inboundInfo.iPName === ""){
      errors.iPName = "Name is required"
  }

  if (inboundInfo.iPDob === "") {
    errors.iPDob = "Date of Birth is required";
  }

  if (inboundInfo.iPGender === "") {
    errors.iPGender = "Gender is required";
  }

  if (inboundInfo.arrivalDate === "") {
    errors.arrivalDate = "Arrival Date is required";
  }

  if (inboundInfo.journeyFrom === "") {
    errors.journeyFrom = "Journey From is required";
  }

  if (inboundInfo.coveragePlan === "") {
    errors.coveragePlan = "Coverage Plan is required";
  }

  if (inboundInfo.iPPhone === "") {
    errors.iPPhone = "Phone Number is required";
  }

  if (inboundInfo.iPEmail === "") {
    errors.iPEmail = "Email is required";
  }

  if (inboundInfo.iPresidentAddress === "") {
    errors.iPresidentAddress = "President Address is required";
  }

  if (inboundInfo.iPresidentCountry === "") {
    errors.iPresidentCountry = "President Country is required";
  }

  // PASSPORT VALIDATION
  if (inboundInfo.passportNo === "") {
    errors.passportNo = "Passport Number is required";
  }

  if (inboundInfo.passportIssuedDate === "") {
    errors.passportIssuedDate = "Passport Issued Date is required";
  }

  if (inboundInfo.passportIssuedCountry === "") {
    errors.passportIssuedCountry = "Passport Issued Country is required";
  }

  // BENEFICIARY VALIDATION
  if (inboundInfo.bPName === "") {
    errors.bPName = "Name is required";
  }

  if (inboundInfo.bPDob === "") {
    errors.bPDob = "Date of Birth is required";
  }

  if (inboundInfo.NRC === "") {
    errors.NRC = "NRC is required";
  }

  if (inboundInfo.relationship === "") {
    errors.relationship = "Relationship is required";
  }

  if (inboundInfo.bPPhone === "") {
    errors.bPPhone = "Phone Number is required";
  }

  // CHILD VALIDATION
  if (inboundInfo.childName === "") {
    errors.childName = "Name is required";
  }

  if (inboundInfo.childDob === "") {
    errors.childDob = "Date of Birth is required";
  }

  if (inboundInfo.childGender === "") {
    errors.childGender = "Gender is required";
  }

  if (inboundInfo.guardinanceName === "") {
    errors.guardinanceName = "Guardian Name is required";
  }

  if (inboundInfo.cRelationship === "") {
    errors.cRelationship = "Relationship is required";
  }
}
