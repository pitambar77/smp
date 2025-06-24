const ImageBlock = ({ src, alt, className = '' }) => (
  <div className="flex items-center justify-center my-[50px] sm:px-0 px-4">
    <img src={src} alt={alt} className={`max-h-[800px] ${className}`} />
  </div>
);

export default ImageBlock;
