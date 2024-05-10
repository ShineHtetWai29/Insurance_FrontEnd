
import React from "react";
import { Link } from "react-router-dom";
import Images from "../../Images/Images";

export const Header = () => {
  return (
    <>
      <section className="w-[1170px] relative mx-auto">
        <div className="flex items-center justify-between my-4">
          <div className="flex gap-2">
            <img className="w-[70px]" src={Images.logo} alt="" />
            <div className="flex flex-col">
              <h1 className="font-bold text-[25px]">Myanma Insurance</h1>
              <h3 className="text-[15px]">
                myanma insurance is for the people
              </h3>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex items-center gap-x-2">
              <img className="w-[30px] h-[30px]" src={Images.email} alt="" />
              <div className="flex flex-col pr-8 border-r-[1px] text-[14px] border-[#DDDDDD]">
                <a className="font-semibold text-[#214C9B]">
                  online-support@mminsurance.gov.mm
                </a>
                <p className="text-[#8498B8]">Drop us a mail</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <img className="w-[30px] h-[30px]" src={Images.phone} alt="" />
              <div className="flex flex-col pr-8 border-r-[1px] text-[14px] border-[#DDDDDD]">
                <a className="font-semibold text-[#214C9B]">+959765428630,31</a>
                <p className="text-[#8498B8]">Make a call</p>
              </div>
            </div>
            <div className="flex gap-x-1">
              <button className="bg-[#214C9B] border-t-[3px] w-[40px] border-[#F1F4F8] text-white p-2">
                MM
              </button>
              <button className="bg-[#214C9B] border-t-[3px] w-[40px] border-[#FCF050] text-white p-2">
                EN
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#214C9B]  text-white p-3 rounded-lg shadow-lg">
          <nav className="flex items-center justify-between">
            <div className="flex text-[13px] font-semibold gap-x-2">
              <Link className="cursor-pointer">
                HOME
              </Link>
              <div className="flex gap-2 items-baseline">
                <Link>ABOUT US</Link>
                <img className="w-2 h-2" src={Images.dropdown} alt="" />
              </div>
              <div className="flex gap-2 items-baseline">
                <Link>INSURANCE PRODUCTS</Link>
                <img className="w-2 h-2" src={Images.dropdown} alt="" />
              </div>
              <div className="flex gap-2 items-baseline">
                <Link>CUSTOMER HUB</Link>
                <img className="w-2 h-2" src={Images.dropdown} alt="" />
              </div>
              <Link>NEWS</Link>
              <Link>CONTACT US</Link>
            </div>

            <div className="flex gap-x-2 text-[13px] font-semibold text-[#214C9B]">
              <Link className="bg-white  p-2 rounded-md">
                Premium Calculator
              </Link>
              <Link className="bg-white  p-2 rounded-md">
                Print Certificates
              </Link>
              <Link className="bg-white  p-2 rounded-md">Online Biller</Link>
              <Link className="bg-white  p-2 rounded-md">Buy Online</Link>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};
