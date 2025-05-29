import React from 'react';
 
const Softbanner = () => {
  return (
    <div className="bg-[#f0f0f0]">
      <div className="flex p-13 flex-col md:flex-row md:items-end justify-center max-w-6xl mx-auto ">
        {/* Left - Image */}
        <div className="w-full md:w-5/12 h-full">
          <img
            src="https://safarimarketingpro.com/images/md-fig.png"
            alt="Safari Adventure"
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
            We thrive to get the right essence of your Safari brand
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
  Our goal is to create a strong and consistent brand identity for each and every safari operator in Africa that accurately reflects the core values and bootstrapping of their brand, and appeals to their revenue model. This can help to establish small or medium safari operators to boost their brand recognition and loyalty and increase their revenue by up to 300%.
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
            Whether you are launching a new safari company or looking to revitalize an existing one, we can help you to develop a compelling brand strategy that will drive growth and success for your safari business
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