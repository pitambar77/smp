import React from 'react'


const Banner = () => {
  return (
    <div className=' w-[100%] h-[540px] bg-[url(https://safarimarketingpro.com/images/reviews-banner-fig-1.jpg)] bg-cover bg-center '>
    <div className='w-[100%] h-[540px] bg-[linear-gradient(to_right,#0057ffd6_40%,#4679c587_80%,rgba(70,121,197,0.33)_100%)] flex items-center justify-center text-center text-white px-4 '>
        <div className=' w-[1140px] h-[270] mx-auto mt-10 px-10   '>
            <h1 className=' capitalize  text-5xl font-montserrat font-[600] text-white text-center leading-snug'>Don’t just take our word for it. See what our clients are saying.</h1>
            <p className=' mt-4 font-[500]  text-white text-center px-[60px] text-[18px]  leading-snug'>Our mission is to help safari operators to succeed with online marketing regardless of their size and budgets. And when they gets results with your effort, they become your promoter.</p>
        </div>
    </div>
      
    </div>
  )
}

export default Banner
