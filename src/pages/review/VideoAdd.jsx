import React from 'react'

const VideoAdd = () => {
  return (
    <div>
      <div  className=' w-full'>
      <div className=' max-w-[1140px] mx-auto pt-20  items-center justify-center text-center'>
        <h1 className=' capitalize  md:text-[40px] text-2xl text-[#3467d8] font-[700] md:px-20 px-4 leading-[1.3] '>When your customers become your no.1 promoters</h1>
        <p  className=' px-4 py-4 text-cente text-[#787878] text-[22px] font-[400] '>Don’t just take our word for it. See what our clients are saying.</p>
      </div>
      </div>
      <div className=' w-full '>
        <div className=' max-w-[1140px] mx-auto mt-4 pb-20'>
            
        <div className=' grid sm:grid-cols-1 md:grid-cols-2 gap-7 md:px-2 px-6 items-center'>
         <div className='bg-[url(https://i.ytimg.com/vi_webp/n6JyE-KVCsE/maxresdefault.webp)] h-[304px] bg-cover bg-bg-center'>
            <iframe src="https://www.youtube.com/embed/n6JyE-KVCsE?controls=0" frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen="1" data-gtm-yt-inspected-12="true" className=' bg-cover bg-center w-full h-full'></iframe>
        </div>
         <div className='bg-[url(https://i.ytimg.com/vi_webp/n6JyE-KVCsE/maxresdefault.webp)] h-[304px] bg-cover bg-bg-center'>
           <iframe src="https://www.youtube.com/embed/kskzj2zBEIM?controls=0" frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen="1" data-gtm-yt-inspected-12="true" className=' bg-cover bg-center w-full h-full'></iframe>
        </div>
         <div className='bg-[url(https://i.ytimg.com/vi_webp/n6JyE-KVCsE/maxresdefault.webp)] h-[304px] bg-cover bg-bg-center'>
           <iframe src="https://www.youtube.com/embed/11OYDxAxnf4?controls=0" frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen="1" data-gtm-yt-inspected-12="true" className=' bg-cover bg-center w-full h-full'></iframe>
        </div>
         <div className='bg-[url(https://i.ytimg.com/vi_webp/n6JyE-KVCsE/maxresdefault.webp)] h-[304px] bg-cover bg-bg-center'>
           <iframe src="https://www.youtube.com/embed/bpHRzjP6dhs?controls=0" frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen="1" data-gtm-yt-inspected-12="true" className=' bg-cover bg-center w-full h-full'></iframe>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default VideoAdd
