import React, { useState } from "react";
import { Link } from "react-router-dom";
import Images from "../../Images/Images";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <section className="max-w-[1170px] z-[100]  relative mx-auto">
        <div className="flex items-center justify-between my-4">
          <div className="flex gap-2">
            <Link to="/">
            <img className="w-[70px] sm:w-[50px]" src={Images.logo} alt="" />
            </Link>
            <div className="flex flex-col">
              <h1 className="font-bold text-[25px]">Myanma Insurance</h1>
              <h3 className="text-[15px]">
                myanma insurance is for the people
              </h3>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="hidden lg:flex items-center gap-x-2">
              <img className="w-6 h-6" src={Images.email} alt="" />
              <div className="flex flex-col pr-8 border-r-[1px] text-sm border-[#DDDDDD]">
                <a className="font-semibold text-blue-600">
                  online-support@mminsurance.gov.mm
                </a>
                <p className="text-gray-600">Drop us a mail</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-x-2">
              <img className="w-[30px] h-[30px]" src={Images.phone} alt="" />
              <div className="flex flex-col pr-8 border-r-[1px] text-[14px] border-[#DDDDDD]">
                <a className="font-semibold text-[#214C9B]">+959765428630,31</a>
                <p className="text-[#8498B8]">Make a call</p>
              </div>
            </div>

            <button
              id="navbar-toggle"
              type="button"
              className="md:inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-expanded={isNavOpen}
              onClick={toggleNav}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>

            <div className="hidden  lg:flex gap-x-1">
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
            <div
              className="hidden lg:flex text-[13px] font-semibold gap-x-2"
              id="navbar-default"
            >
              <Link className="cursor-pointer">HOME</Link>
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
              <Link to="/enquiry" className="bg-white  p-2 rounded-md">
                Print Certificates
              </Link>
              <Link className="bg-white  p-2 rounded-md">Online Biller</Link>
              <Link className="bg-white  p-2 rounded-md">Buy Online</Link>
            </div>
          </nav>
        </div>

        <div
          className={`${
            isNavOpen ? "md:block" : "hidden"
          } bg-[#214C9B] text-white mt-1 w-full  p-3 rounded-lg shadow-lg hidden `}
        >
          <ul className="w-full  font-medium md:flex-col p-4 mt-4  border-gray-100 rounded-lg bg-gray-50   md:mt-0  md:bg-[#214C9B]">
            <li className="border-b-2">
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent"
              >
                Home
              </a>
            </li>
            <li className="flex gap-2 items-baseline border-b-2">
              <a
                href="#"
                className="block py-2 px-3  text-white rounded md:bg-transparent"
              >
                ABOUT US
              </a>
              <img className="w-2 h-2" src={Images.dropdown} alt="" />
            </li>
            <li className="flex gap-2 items-baseline border-b-2">
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent"
              >
                INSURANCE PRODUCTS
              </a>
              <img className="w-2 h-2" src={Images.dropdown} alt="" />
            </li>
            <li className="flex gap-2 items-baseline border-b-2">
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent"
              >
                CUSTOMER HUB
              </a>
              <img className="w-2 h-2" src={Images.dropdown} alt="" />
            </li>
            <li className="flex gap-2 items-baseline border-b-2">
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent"
              >
                NEWS & MEDIA
              </a>
              <img className="w-2 h-2" src={Images.dropdown} alt="" />
            </li>
            <li className="bordee-b-2">
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
