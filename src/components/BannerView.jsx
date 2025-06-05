import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BannerView = () => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/banner')
      .then((res) => {
        setBanner(res.data);
      })
      .catch((err) => {
        console.error("Error fetching banner:", err);
      });
  }, []);
  console.log(banner)

  if (!banner) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div
      className="min-h-[400px] flex flex-col justify-center items-center px-6 text-center"
      style={{
  backgroundImage: banner.image
    ? `url(http://localhost:8000/uploads/${banner.image})`
    : 'none',
    backgroundSize: 'cover',
        backgroundPosition: 'center',
}}
    >
      {banner.heading && (
        <h1 className="text-4xl font-bold mb-3 drop-shadow-md">{banner.heading}</h1>
      )}
      {banner.subheading && (
        <p className="text-xl drop-shadow-sm">{banner.subheading}</p>
      )}
    </div>
  );
};

export default BannerView;
