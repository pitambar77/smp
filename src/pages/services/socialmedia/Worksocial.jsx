import React from 'react';
 
const steps = [
    {
        number: '1',
        text: (
            <>
 
Understanding Client Goals           </>
        ),
        color: '#ff4c4c',
    },
     {
        number: '2',
        text: (
            <>
Account Optimization  </>
        ),
        color: '#ff4c4c',
    },
    {
        number: '3',
        text: (
            <>
Developing A Content Calendar  </>
        ),
        color: '#ff4c4c',
    },
    {
        number: '4',
        text: (
            <>
 
Creating And Posting Content
    </>
        ),
        color: '#ff4c4c',
    },
    {
        number: '5',
        text: (
            <>
Engaging With The Audience
          </>
        ),
        color: '#ff4c4c',
    },
    {
        number: '6',
        text: (
            <>
Analyzing The Results   </>
        ),
        color: '#ff4c4c',
    },
   
];
 
const Worksocial = () => {
     const handleScrollToStep = (number) => {
    const el = document.getElementById(`step-${number}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
    return (
        <section className="bg-[#f0f0f0] text-center px-4 py-16 font-[Montserrat]">
            {/* Heading */}
            <div className='max-w-[1140px] mx-auto mt-6 mb-6'>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#3467d8] mb-2 leading-[1.5]">
Our Social Media Management Process
           </h2>
 
            {/* Subheadings */}
            <p className="text-xl mt-5 mb-5 text-[#5e5e5e]">A Holistic Approach to Maintaining Your Online Profiles
 
            </p>
      
            <p className=' text-[#5e5e5e] text-[17px]  text-center leading-relaxed mb-12'>
Establishing a robust brand presence on social media and effectively marketing your safari and tour business involves meticulous planning and execution. Carefully connecting your brand with the target market is key to optimizing returns on your investments in social media marketing.
 
            </p>
 
            {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start text-left gap-4 cursor-pointer"
              onClick={() => handleScrollToStep(step.number)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleScrollToStep(step.number);
              }}
            >
                        {/* Number */}
                        <span
                            className="text-[80px]  hover:text-red-500 font-semibold leading-[1em] relative -left-1"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                // color: 'black',
                                display: 'block',
                                textAlign: 'left',
                                position: 'relative',
                                marginTop: '-2%',
                            }}
                        >
                            {step.number}
                        </span>
 
 
 

                        <div
  className={`text-xl text-red-500 font-semibold leading-snug text-[22px] text-left items-center text-[${step.color}] hover:text-blue-500`}
>
  {step.text}
</div>
 
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
};
 
export default Worksocial;
 
 