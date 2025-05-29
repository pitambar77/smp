import React from 'react';
import smplogo from '../assets/images/smp-logo.png'
import phonelogo from '../assets/images/phone-receiver.png'
import { Link } from 'react-router-dom';

 
export default function Navbar() {
  return (
    <>
      <div className="bg-[rgba(61,114,194,0.95)] w-full">
        <div className="top-0 shadow-l z-50 px-4 sm:px-6 md:px-8 mx-auto max-w-full">
          <nav className="ml-2 sm:ml-6 md:ml-10 mr-2 sm:mr-6 md:mr-10 ">
            <div className="max-w-7xl mx-auto w-full ml-30 ">
              <div className="flex flex-wrap justify-between items-center py-3 w-full pt-4.4">
 
                {/* Logo */}
                <Link to='/'>
                <div className="flex items-cente cursor-pointer">
                  <img
                    src={smplogo}
                    alt="Logo"
                    className="h-auto  max-h-[50px] w-39.5 filter invert brightness-0"
                  />
                </div>
                </Link>
                
 
                {/* Contact */}
               
             <h6 className="font-lato text-white text-[19px] text-left flex items-center mr-37">
  <img
    src={phonelogo}
    alt="Phone"
    className="h-5 sm:h-6 w-auto mr-2 filter invert brightness-0 font-lato"
  />
  <p className='font-lato'>+91 63712 23581</p>
</h6>
 
 
 
<div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#6ea1e6] to-[#6ea1e6] t opacity-60 mt-2 mr-37" />
 
              </div>
 
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}