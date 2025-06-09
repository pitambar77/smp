import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BASE_URL } from '../../api/config';
 
const Softbanner = () => {

   const [director, setdirector] = useState(null);

  useEffect(() => {
    axios.get(`${ BASE_URL }/api/about-director`)
      .then(res => {
        if (res.data.length > 0) {
          setdirector(res.data[0]); // assuming single entry
        }
      })
      .catch(err => console.error(err));
  }, []);
  

  if (!director) return <div className="text-center mt-10">Loading...</div>;
console.log(director)
  return (
    <div className="bg-[#f0f0f0]">
      <div className="flex pt-13 flex-col md:flex-row md:items-end justify-center max-w-6xl mx-auto ">
        {/* Left - Image */}
        <div className="w-full md:w-5/12 h-full">
          <img
            src={`${ BASE_URL }/uploads/${director.image}`} alt="Director"
            
            className="w-full h-[800px] rounded-lg object-cover transform scale-x-[-1]"
          />
        </div>
 
        {/* Right - Content */}
        <div className="w-full md:w-7/12 md:pl-12 pb-16">
          <h3
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '36px',
              textAlign: 'left',
              textTransform: 'capitalize',
              color: '#3467d8',
              lineHeight: 1.3,
              margin: 0,
            }}
          >
           
           {director.heading}
           
          </h3>
 
          <p
  style={{
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    fontSize: '20px',
    textAlign: 'left',
    color: '#787878',
    lineHeight: '32px',
    marginTop: '20px',
    padding: '15px 0 17px 0',
  }}
>
  {director.content1}
</p>
 
 
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              textAlign: 'left',
              color: '#787878',
              lineHeight: 1.5,
              margin: 0,
              padding: '15px 0 17px 0',
            }}
          >
           {director.content2}
          </p>
 
          <div
            style={{
              width: '180px',
              marginLeft: '-22px',
              float: 'left',
              position: 'relative',
              padding: '15px 0',
            }}
          >
            <img
              src="https://safarimarketingpro.com/images/md-sign.svg.png"
              alt="Signature"
              style={{
                width: '180px',
              }}
            />
          </div>
 
          <h5
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: '24px',
              textAlign: 'left',
              color: '#3467d8',
              lineHeight: 'inherit',
              margin: 0,
              padding: 0,
              fontStyle: 'italic',
              width: '100%',
              float: 'left',
            }}
          >
            <span>Manorama Pallai -</span> Managing Director
          </h5>
        </div>
      </div>
    </div>
  );
};
 
export default Softbanner;