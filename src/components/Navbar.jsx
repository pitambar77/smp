import React from 'react';
import smplogo from '../assets/images/smp-logo.png'
import phonelogo from '../assets/images/phone-receiver.png'
import { Link } from 'react-router-dom';

 
export default function Navbar() {
  return (
    <>
      <div className=" bg-transparent  w-full relative z-50  ">
         <div className="">
          <nav className="">
            <div className="max-w-[1170px] mx-auto py-[10px]   ">
              <div className="flex flex-wrap justify-between items-center ">
                <Link to='/'>
                <div className="flex items-cente px-[15px] cursor-pointer">
                  <img
                    src={smplogo}
                    alt="Logo"
                    className="h-auto  max-h-[50px] w-39.5 filter invert brightness-0"
                  />
                </div>
                </Link> 
             <div className=" text-white text-left flex items-center pr-[15px] cursor-pointer hover:text-[#ff5254]">
              <img
                src={phonelogo}
                alt="Phone"
                className="h-5 sm:h-6 w-auto mr-2 filter invert brightness-0 "
              />
               <p style={{ fontFamily: 'Lato, sans-serif' }} className=' text-[18px]  font-[600] leading-inherit'>+91 6371 223 581</p>
                </div>
              
 
              </div>
              <div className="max-w-[1155px] h-[1.5px] bg-gradient-to-r from-white/0 to-white opacity-25 mt-2 " />
            </div>
          </nav> 
        </div> 
















        {/* <div className=' max-w-[1170px] mx-auto flex justify-between items-center '>
          <div className=' px-[15px]'>
            <Link to='/'>
                <div className="flex items-cente cursor-pointer py-[10px] ">
                  <img
                    src={smplogo}
                    alt="Logo"
                    className="  w-39.5 filter invert brightness-0"
                  />
                </div>
                </Link>
          </div>
          <div className=' flex items-center'>
            <img
          src={phonelogo}
        alt="Phone"
        className="h-5 sm:h-6 w-auto mr-2 filter invert brightness-0 "/>
            <p className=' text-[18px] font-[600] text-white hover:text-[#ff5254] '>+91 63712 23581</p>
          </div>
          
        </div>
        <div className=" max-w-[1170px] mx-auto h-[1.5px] bg-gradient-to-r from-white/0 to-white opacity-25  mr-37" /> */}
        
        
        
      </div>
    </>
  );
}