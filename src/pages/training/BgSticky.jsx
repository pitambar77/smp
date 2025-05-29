import React from 'react'

const BgSticky = () => {
  return (
    <div
      className="relative h-[420px] bg-fixed bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://safarimarketingpro.com/images/gfsedmv-bg.jpg')" }}
    >
      {/* Dark Overlay with opacity */}
<div
  className="absolute inset-0"
  style={{
    backgroundImage: 'linear-gradient(rgba(1, 24, 51, 0.75), rgba(1, 24, 51, 0.75))'
  }}
></div>

      {/* Text Content */}
      <div className="relative z-30 text-center px-7">
       <h2 className="font-montserrat font-bold text-[48px] text-center capitalize text-white leading-[1.3] px-[10%] pb-[20px] ml-48 mr-48">
  Let's Make Sure Your Safari Business Is Online 24/7.
</h2>

        <p className="text-lg sm:text-xl text-white mb-8">
         All good things start with a chat…
        </p>
       <button className="font-semibold uppercase text-[16px] tracking-[1.5px] shadow-[0_12px_18px_0_rgba(0,0,0,0.15)] py-[15px] px-[40px] bg-[#ff5254] text-white hover:text-[#ff5254] rounded-[5px] border border-[#ff5254] hover:border-[#011833] transition duration-300 ease-in hover:bg-[#011833]">
  Get my free 30-minute strategy session
</button>

      </div>
    </div>
  )
}

export default BgSticky
