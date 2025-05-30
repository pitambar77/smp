const Button = ({ label,link}) =>{ 
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };
  return(
  <button
  onClick ={handleClick}
   className="uppercase text-[16px] rounded-[5px] bg-[#011833] border-[#011833] hover:text-[#23527c] cursor-pointer border-2 py-[12px] px-[30px] font-[600] duration-300">
    {label}
  </button>
)};

export default Button;
