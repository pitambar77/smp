const TextImageSection = ({ title, content, image, imageFirst = false }) => (
  <div className="grid grid-cols-2 items-center px-[15px] my-[50px]">
    {imageFirst ? (
      <>
        <img src={image.src} alt={image.alt} className="max-h-[800px]" />
        <div className="text-white  pl-[129.85px]">
          <h1 className="text-[48px] font-[800] mb-[20px] pr-10 leading-[1]">{title}</h1>
          {content}
        </div>
      </>
    ) : (
      <>
        <div className="text-white  pr-[129.85px]">
          <h1 className="text-[48px] font-[800] mb-[20px] leading-[1] ">{title}</h1>
          
          {content}
        </div>
        <img src={image.src} alt={image.alt} className="max-h-[800px] px-[30px] " />
      </>
    )}
  </div>
);

export default TextImageSection;
