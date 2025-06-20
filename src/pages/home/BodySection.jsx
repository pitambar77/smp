import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { BASE_URL } from '../../api/config';

import FormComponent from '../../components/FormComponent';




export default function BodySection() {
const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("I need more traffic to my website");
const [showForm, setShowForm] = useState(false);


const [banner, setBanner] = useState(null);




  useEffect(() => {
    axios.get(`${BASE_URL}/api/banner`)
      .then((res) => {
        setBanner(res.data);
      })
      .catch((err) => {
        console.error("Error fetching banner:", err);
      });
  }, []);
  

  if (!banner) return <div className="text-center mt-10">Loading...</div>;



  const options = [
    "I need more traffic to my website",
    "I need more customers",
    "I need more leads",
    "I need more sales",
    "I need help with brand awareness",
    "All of the above"
  ];
  return (
    <>
    <div className='bg-[rgba(61,114,194,0.95)] relative w-full overflow-hidden   pt-[270px]'>
      
      <div className=' max-w-[1140px] mx-auto  '>
        <div className=' max-w-[60%]  pr-[10px] pb-[90px]'>
            <div className=' pb-[35px]'>
        {!showForm ? (
    <>
                <h1 className=' font-[700] text-[50px] text-[#fff] leading-[1.1] pb-[20px] text-start'>{banner.heading}</h1>
                <p className=' text-[20px] text-[#fff] leading-[28px] pb-[20px] text-start'>{banner.subheading}</p>

                <div className="flex  shadow-[0_12px_18px_0_rgb(0_0_0_/_15%)] mt-1.5 ">
                  <div className="relative bg-white w-[100%] " style={{ fontFamily: "'Lato', sans-serif" }}>
        <button
          onClick={() => setOpen(!open)}
          className=" h-[70px] px-5 text-left text-[#787878] text-[20px] font-semibold leading-inherit absolute  rounded-l-[4px]"
        >
          {selected}
        </button>

        {open && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white border shadow-md rounded z-30">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
                className="px-5 py-1 hover:bg-gray-300 text-[#787878] text-[18px] font-[500] cursor-pointer"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>


      <div
        onClick={() => setOpen(!open)}
        className="w-[50px] bg-white flex items-center justify-center cursor-pointer"
      >
        <FaChevronDown className=" w-[30px] pr-[10px] text-[#787878]  text-[22px] font-[700] text-center" />

      </div>

      <button
        type="button"
        onClick={() => setShowForm(true)}
        className="bg-[#FF4F4F] border-[#ff5254] cursor-pointer border  hover:bg-[#011833] hover:border-[#011833] duration-500 ease-in-out hover:text-[#ff5254] w-[60%] h-[70px] py-[5px] px-[15px] text-white tracking-[1px] text-[17px] font-semibold rounded-r-[4px]"
      >
        GET A FREE QUOTE
      </button>
                </div>
              </>
  ) : (
   
    <FormComponent/>
  )}
               </div>

               <div className=" grid grid-cols-4 gap-[30px] mt-2">
                  <img  src={`${BASE_URL}/uploads/${banner.logo1}`} alt="logo1" />
                  <img  src={`${BASE_URL}/uploads/${banner.logo2}`} alt="logo2" />
                  <img  src={`${BASE_URL}/uploads/${banner.logo3}`} alt="logo3" />
                  <img  src={`${BASE_URL}/uploads/${banner.logo4}`} alt="logo4" />

               </div>
                            
            </div>
           
           
        </div>
        <div className="absolute -right-15.5 top-[23.5%]">
  <img
    src={`${BASE_URL}/uploads/${banner.image}`}
    alt=""
    className="object-contain max-w-none"
  />
</div>


    </div>

    
    </>
  )
}