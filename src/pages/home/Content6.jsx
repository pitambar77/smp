import React from 'react';
 
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
  return (
    <div className="bg-[#011833] py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <h2
          className="text-white font-bold text-center capitalize leading-[1.3] mb-10 mt-14"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '48px',
            padding: '0 5% 20px 5%',
          }}
        >
          Digital Growth For Your African Safari Business
        </h2>
 
        <div className="flex flex-col lg:flex-row justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-white rounded-md p-6 w-full lg:w-[28%] shadow-md"
            >
              <div className="mb-6 flex items-start gap-4">
                <img src={service.image} alt={service.title} className="w-12 h-12" />
                <h3
                  className="text-left text-white"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: '22px',
                    lineHeight: 'inherit',
                    margin: 0,
                    padding: '0 25% 15px 0',
                  }}
                >
                  {service.title}
                </h3>
              </div>
 
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  textAlign: 'left',
                  color: '#fff',
                  lineHeight: '1.6',
                  textTransform: 'inherit',
                  margin: 0,
                  padding: 0,
                }}
              >
                {service.description}
              </p>
 
              <button
                className="text-white font-semibold bg-[#ff5254] border border-[#ff5254] px-6 py-3 mt-6 rounded-md text-sm uppercase tracking-widest shadow-md hover:bg-red-600 transition"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default Content6;