import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const Common = () => {
  return (
    <div className=' w-[100%] p-20'>

        <div className=' max-w-[1140px] mx-auto'>
            <div className=' flex gap-5 justify-center items-center px-30 '>
                <div className=' flex gap-4 p-4 items-center border rounded-[10px] pr-24 hover:bg-[#011833] hover:text-white  transition-transform w-[440px]'>
                    <FaWhatsapp className=' text-[#3467d8]  text-[45px]' />
                    <div className=''>
                        <h1 className=' text-[#011833] text-[22px] font-[600] hover:text-white'>Whatsapp Directly</h1>
                        <h2 className=' p-1 text-[#ff5254] text-[18px] font-[600]'>+91-6371-223-581</h2>
                    </div>
                </div>
                <div className=' flex gap-4 p-4 items-center border rounded-[10px] hover:bg-[#011833] hover:text-white w-[440px]'>
                    <FaMailBulk className=' text-[#3467d8]  text-[45px]' />
                    <div className=''>
                        <h1 className=' text-[#011833] text-[22px] font-[600] hover:text-white'>Email Us Questions Here </h1>
                        <h2 className=' p-1 text-[#ff5254] text-[18px] font-[600]'>sales@manoramaseoservice.com</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Common
