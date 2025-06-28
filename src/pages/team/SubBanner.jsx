import React from "react";

import chinSign from "../../assets/images/chin-sign.png";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../../api/config";
import ReadMore from "../../components/ReadMore";



const API = `${ BASE_URL }/api/soft-team-banner`;


const SubBanner = () => {

const [data, setData] = useState(null);
  
 
  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.error('Failed to fetch craft content', err));

     

  }, []);
 
  if (!data) return null;


  // const [softbanner, setSoftbanner] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}/api/team-soft-banner`)
  //     .then((res) => {
  //       setSoftbanner(res.data);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching overview:", err);
  //     });
  // }, []);

  // if (!softbanner) return <div className="text-center mt-10">Loading...</div>;

//   return (
//     <div className="  bg-[#F0F0F0] md:pt-[50px] pt-[40px]">
//       <div className="max-w-[1140px]  mx-auto  ">
//         <div className=" flex lg:flex-row flex-col items-center   ">
//           <div className=" basis-[41.667%]  md:px-[15px] px-[20px] mt-[30px] ">
//             <img
//                src={`${ BASE_URL }/${data.image}`}
//               alt="team"
//               className="sticky "
//             />
//           </div>
//           <div className=" basis-[58.333%]">
//             <div className="md:px-[15px] px-8 mt-[40px] ">
//               <h1 className=" font-[600] md:text-4xl  text-[24px] text-center md:text-left text-[#3467d8] leading-[1.3] capitalize ">
//                  {data.heading}
//               </h1>
//               {/* <p className='py-4 text-[#787878] font-[400] text-[18px] leading-snug '>{softbanner.content}</p> */}
             
//               <ReadMore paragraphs={data.paragraphs} />
 
//               {/* <button className='bg-[#FF5254] text-white py-[10px] px-5 rounded-md '>READ MORE</button> */}
//               <img src={chinSign} alt="sign" className=" py-[15px] ml-[-22px] w-[180px] " />
//               <h2 className="text-[#3467d8] font-[600] md:text-2xl leading-[1.3]  ">
//                <span className="text-[20px] md:text-2xl">Mr Chinu Pal |{" "}</span> 
//                 <span className=" italic font-[500] text-[13px] md:text-2xl  ">
//                   Founder of the Safari Marketing Pro
//                 </span>{" "}
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
return (
  <div className="bg-[#F0F0F0] md:pt-[50px] pt-[40px]">
    <div className="max-w-[1140px] mx-auto">
      {/* 👉 added md:flex-row so tablets behave like desktop */}
      <div className="flex md:flex-row lg:flex-row flex-col items-center">
        <div className="basis-[41.667%] md:px-[15px] px-[20px] mt-[30px]">
          <img
            src={`${BASE_URL}/${data.image}`}
            alt="team"
            className="sticky"
          />
        </div>

        <div className="basis-[58.333%]">
          <div className="md:px-[15px] px-8 mt-[40px]">
            <h1 className="font-[600] md:text-4xl text-[24px] text-center md:text-left text-[#3467d8] leading-[1.3] capitalize">
              {data.heading}
            </h1>

            <ReadMore paragraphs={data.paragraphs} />

            <img src={chinSign} alt="sign" className="py-[15px] ml-[-22px] w-[180px]" />

            <h2 className="text-[#3467d8] font-[600] md:text-2xl leading-[1.3] flex sm:flex-row flex-col">
              <span className="text-[20px] md:text-2xl">
                Mr Chinu Pal&nbsp;|&nbsp;
              </span>
              <span className="italic font-[500] text-[16px] md:text-2xl">
                Founder of the Safari Marketing Pro
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
export default SubBanner;
