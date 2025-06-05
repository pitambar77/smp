import React from 'react';
import { useNavigate } from 'react-router-dom';
 
const services = [
  {
    title: 'Website Development',
    description:
      'Your Safari business is unique and you need a website that can convince, who are planning to book their trips to Africa and also help separate you from the competition.',
    image: 'https://safarimarketingpro.com/images/dgyhacb-icn-1.png',
  },
  {
    title: 'Organic Marketing',
    description:
      'We know how important it is for you to maintain a high ranking for your safari website. We can help you with outstanding organic marketing strategy to attract your desired audience.',
    image: 'https://safarimarketingpro.com/images/dgyhacb-icn-2.png',
  },
  {
    title: 'Google Advertising',
    description:
      'The right advertising campaign can be the secret sauce to a safari company’s success. We help you with curating the best Ad strategies for your safari business to get the results.',
    image: 'https://safarimarketingpro.com/images/dgyhacb-icn-3.png',
  },
];
 
function Content6() {
  const navigate = useNavigate()
  return (
    <div className="bg-[#011833] py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1140px] mx-auto mb-7 mt-10">
        <h2
          className="text-white text-center mb-16"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '1.3',
          }}
        >
          Digital Growth For Your African Safari Business
        </h2>
 
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-transparent text-white p-6 rounded-lg w-full lg:w-[32%] transition-all duration-300 hover:bg-[#ffffff0d] hover:shadow-lg hover:scale-[1.02] cursor-pointer"
            >
              {/* Icon + Title + Description */}
              <div className="flex mb-4">
                {/* Icon */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-12 h-12 mr-3 self-start"
                />
 
                {/* Right side: Title and Description */}
                <div className="flex flex-col justify-end">
                  {/* Title aligned bottom */}
                  <h3 className="text-[22px] w-[100px] font-[600]">{service.title}</h3>
 
                  {/* Description below title */}
                  <p className="font-[400] w-[266px] text-[16px] leading-[1.6] mt-4 max-w-xs">
                    {service.description}
                  </p>
                </div>
              </div>
 
              {/* Button */}
              <button
               onClick={() => {navigate('/web-designing');window.scrollTo(0, 0); }}
                className="mt-6 ml-20 text-white font-semibold bg-[#ff5254] border border-[#ff5254] hove:text-[#ff5254] hover:bg-[#011833] px-6 py-3 rounded-md text-sm uppercase tracking-widest shadow-md  transition"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default Content6;
 
 