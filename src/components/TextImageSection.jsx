const TextImageSection = ({ title, content, image, imageFirst = false }) => (
  <div className="grid sm:grid-cols-2 grid-cols-1 items-center px-[15px] my-[50px]">
    {imageFirst ? (
      <>
        <img src={image.src} alt={image.alt} className="sm:max-h-[800px]" />
        <div className="text-white  sm:pl-[129.85px] sm:pt-0 pt-5">
          <h1 className="sm:text-[48px] text-[24px] font-[800] mb-[20px]  sm:pr-10 leading-[1]">{title}</h1>
          
 {content}
          
         
        </div>
      </>
    ) : (
      <>
        <div className="text-white  sm:pr-[129.85px]">
          <h1 className="sm:text-[48px] text-[24px] font-[800] sm:mb-[20px] mb-[10px] leading-[1] ">{title}</h1>
          
          {content}
        </div>
        <img src={image.src} alt={image.alt} className="sm:max-h-[800px] sm:px-[30px] " />
      </>
    )}
  </div>
);

export default TextImageSection;
