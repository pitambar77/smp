import React from 'react'
 
function Meeting() {
  return (
    <div>
      <section className="text-center px-4 md:px-10 my-12 mt-0">
        {/* Heading */}
        <h2 className="text-[40px] font-bold text-[#3467d8] text-center capitalize leading-[1.4] font-[Montserrat] px-[8%] pb-[15px]">
          We Promise To Have Face To Face Meeting <br /> Once In A Year.
        </h2>
 
        {/* Subheading */}
        <p className="text-[22px] font-medium leading-inherit capitalize font-[Montserrat] text-[#787878] text-center mb-0 tracking-[0.5px] mt-4">
          The One Where We Tell You How Good We Are.
        </p>
 
        {/* Image */}
        <div className="mx-auto max-w-6xl mt-[-26px] "> {/* adjust mt-* here as needed */}
          <img
            src="https://safarimarketingpro.com/images/group-fig-lg.png"
            alt="Face-to-Face Meeting Collage"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  )
}
 
export default Meeting