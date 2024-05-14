import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../../Images/Images'
import { ImFacebook2 } from "react-icons/im";


export const Footer = () => {
  return (
    <>
        <section className=" bottom-0 m-auto w-full">
            <div className="m-auto text-center max-w-[1170px]">
                <h1 className="text-[#214C9B] my-8 font-semibold text-[24px]">CONTACT PHONE NUMBER</h1>
                <div className="flex items-center justify-center">
                    <div className="grid lg:grid-cols-8 tablet:grid-cols-4 grid-cols-1 gap-2">
                        <div className="mobile:col-span-2 col-span-1 border-[#214C9B] min-h-[100px] border-[1px] py-4 rounded-sm">
                            <p className="text-[#214C9B]">Admin Department</p>
                            <p>379088, 384865, 252372, 246902</p>
                        </div>
                        <div className="mobile:col-span-2 col-span-1 border-[#214C9B] min-h-[100px] border-[1px] py-4 rounded-sm">
                            <p className="text-[#214C9B]">Life Insurance Department</p>
                            <p>384881, 384876, 386919</p>
                        </div>
                        <div className="mobile:col-span-2 col-span-1 border-[#214C9B] min-h-[100px] border-[1px] py-4 rounded-sm">
                            <p className="text-[#214C9B]">Account Department</p>
                            <p>384870, 384868</p>
                        </div>
                        <div className="mobile:col-span-2 col-span-1 border-[#214C9B] min-h-[100px] border-[1px] py-4 rounded-sm">
                            <p className="text-[#214C9B]">Duty Room</p>
                            <p>379188</p>
                        </div>
                        <div className="mobile:col-start-2 mobile:col-span-2 col-span-1 border-[#214C9B] min-h-[100px] border-[1px] py-4 rounded-sm">
                            <p className="text-[#214C9B]">Fire, Engineering and Miscellaneous Insurance Department</p>
                            <p>251764, 384874, 384867</p>
                        </div>
                        <div className="mobile:col-span-2 col-span-1 border-[#214C9B] min-h-[100px] border-[1px] p-4 rounded-sm">
                            <p className="text-[#214C9B]">Marine, Aviation & Travelling Insurance Department</p>
                            <p>251761</p>
                        </div>
                        <div className="mobile:col-span-2 col-span-1 border-[#214C9B] min-h-[100px] border-[1px] py-4 rounded-sm">
                            <p className="text-[#214C9B]">Third-Party Liability Insurance Department</p>
                            <p>384864, 384873</p>
                        </div>

                    </div>
                </div>
            </div>
            <footer className="flex items-center bg-[#214C9B] text-[14px] text-white mt-[30px] min-h-[100px]">
            <div className="mobile:flex mobile:items-center sm:flex-col sm:items-center sm:text-center mobile:justify-between mx-auto w-[1170px] sm:py-4 ">
                <div className='sm:py-2'>
                    <p>© 2024 Myanma Insurance.</p>
                    <p>All Rights Reserved by Myanma Insurance</p>
                </div>
                <div className="flex gap-2 sm:pb-2 sm:justify-center">
                    <img className="w-[70px] sm:w-[50px]" src={ Images.logo } alt="" />
                    <div className="flex flex-col">
                        <h1 className="font-bold text-[25px]">Myanma Insurance</h1>
                        <h3 className="text-[15px]">myanma insurance is for the people</h3>
                    </div>
                </div>
                <div className='sm:flex sm:justify-center'>
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