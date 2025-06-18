import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../../api/config";

function Meeting() {
  const [galleryData, setgalleryData] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/company-gallery`)
      .then((res) => {
        setgalleryData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching Galley data:", err);
      });
  }, []);

  if (!galleryData) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div>
      <div className=" w-full pt-[70px] pb-[40px] ">
        <div className=" max-w-[1140px] mx-auto text-center ">
          <h1 className=" capitalize px-[8%]   text-[40px] text-[#3467d8] font-[700] pb-[15px] ">
            {galleryData.heading}
          </h1>
          <p className=" py-[15px] tracking-[0.5px] text-[#787878] text-[22px] font-[500] capitalize ">
            {galleryData.subheading}
          </p>
        </div>
        <div className=" max-w-[1140px] mx-auto -mt-10">
          <div className="  ">
            <img
              src={`${BASE_URL}/uploads/${galleryData.image}`}
              alt="gallery image"
              className=" bg-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meeting;
