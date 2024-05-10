import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../../Images/Images'
import { ImFacebook2 } from "react-icons/im";


export const Footer = () => {
  return (
    <>
        <section className=" bottom-0 m-auto w-full">
            <div className="m-auto text-center w-[1170px]">
                <h1 className="text-[#214C9B] my-8 font-semibold text-[24px]">CONTACT PHONE NUMBER</h1>
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-8 gap-2">
                        <div className="col-span-2 border-[#214C9B] h-[100px] border-[1px] py-4 rounded-sm">
                            <p className="text-[#214C9B]">Admin Department</p>
                            <p>379088, 384865, 252372, 246902</p>
                        </div>
                        <div className="col-span-2 border-[#214C9B] h-[100px] border-[1px] py-4 rounded-sm">
                            <p className="text-[#214C9B]">Life Insurance Department</p>
                            <p>384881, 384876, 386919</p>
                        </div>
                        <div className="col-span-2 border-[#214C9B] h-[100px] border-[1px] py-4 rounded-sm">
                            <p className="text-[#214C9B]">Account Department</p>
                            <p>384870, 384868</p>
                        </div>
                        <div className="col-span-2 border-[#214C9B] h-[100px] border-[1px] py-4 rounded-sm">
                            <p className="text-[#214C9B]">Duty Room</p>
                            <p>379188</p>
                        </div>
                        <div className="col-start-2 col-span-2 border-[#214C9B] h-[100px] border-[1px] py-4 rounded-sm">
                            <p className="text-[#214C9B]">Fire, Engineering and Miscellaneous Insurance Department</p>
                            <p>251764, 384874, 384867</p>
                        </div>
                        <div className="col-span-2 border-[#214C9B] h-[100px] border-[1px] p-4 rounded-sm">
                            <p className="text-[#214C9B]">Marine, Aviation & Travelling Insurance Department</p>
                            <p>251761</p>
                        </div>
                        <div className="col-span-2 border-[#214C9B] h-[100px] border-[1px] py-4 rounded-sm">
                            <p className="text-[#214C9B]">Third-Party Liability Insurance Department</p>
                            <p>384864, 384873</p>
                        </div>

                    </div>
                </div>
            </div>
            <footer className="flex items-center bg-[#214C9B] text-[14px] text-white mt-[30px] h-[100px]">
            <div className="flex items-center justify-between mx-auto w-[1170px]">
                <div>
                    <p>© 2024 Myanma Insurance.</p>
                    <p>All Rights Reserved by Myanma Insurance</p>
                </div>
                <div className="flex gap-2">
                    <img className="w-[70px]" src={ Images.logo } alt="" />
                    <div className="flex flex-col">
                        <h1 className="font-bold text-[25px]">Myanma Insurance</h1>
                        <h3 className="text-[15px]">myanma insurance is for the people</h3>
                    </div>
                </div>
                <div>
                    <a href="" >
                    <ImFacebook2 className='text-white text-[30px]'/>

                    </a>
                </div>
            </div>
            </footer>
        </section>

    </>
  )
}