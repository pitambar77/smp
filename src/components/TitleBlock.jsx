const TitleBlock = ({ title, description,content, center = false }) => (
  <div className={`text-white ${center ? 'text-center' : ''}`}>
    <h1 className="text-[48px] font-[800] mb-[20px]">{title}</h1>
    <p className="text-[17px]  font-[300] leading-[1.5]">{description}</p>
    {content}

  </div>
);

export default TitleBlock;
