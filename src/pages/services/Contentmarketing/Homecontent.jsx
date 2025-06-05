import React from 'react'

function Homecontent() {
  return (





    <section className="relative">
      {/* Background Image with Overlay and Content */}
      <div className="w-full h-[540px] bg-[url('https://safarimarketingpro.com/images/content-marketing-banner.jpg')] bg-cover bg-center">
        <div className="w-full h-full bg-[linear-gradient(to_right,#0057ffd6_40%,#4679c587_80%,rgba(70,121,197,0.33)_100%)] flex items-center justify-center px-4">
          <div className="max-w-[1140px] mt-14 mx-auto text-center text-white">
            <h2 className="font-[Montserrat] tetx-center font-semibold text-[48px] capitalize leading-[1.4] mb-2 pb-[10px]">
Customized content crafted to convert more customers.
                            </h2>
            <p className="font-[Montserrat] font-medium text-[18px] leading-[1.5] my-0 px-[10%] text-center">
more customers.
A well-written piece of content can boost your safari & tour website’s Google ranking, generating more conversions. Let us help you curate content that stands out from the rest.                               </p>
            
          </div>
        </div>
      </div>

      {/* YouTube iframe showing native UI with Watch on YouTube */}
        <div className="flex justify-center items-center -mt-10 z-10 relative">
  <div className="w-full max-w-[920px] h-[460px] rounded-lg shadow-2xl overflow-hidden bg-black relative">
    <iframe
      className="w-full h-full scale-100 origin-center"
      src="https://www.youtube.com/embed/uc_YlYHY9nk?controls=1&modestbranding=0&rel=0"
      title="Safari Marketing Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>



      {/* Optional spacing below */}
      <div className="h-20 bg-white" />
    </section>






  )
}

export default Homecontent
