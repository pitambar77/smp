import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../api/config";

function Socialmediauser() {
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    async function fetchImage() {
      try {
        const res = await axios.get(`${BASE_URL}/api/socialImage`);
        if (res.data?.image) {
          setImagePath(res.data.image); // example: 'uploads/filename.jpg'
        }
      } catch (error) {
        console.error("Failed to fetch image", error);
      }
    }
    fetchImage();
  }, []);

  return (
    <div className="w-full h-[820px] flex items-center justify-center bg-white p-15 -mb-15">
      <img
        src={
          imagePath
            ? `${BASE_URL}/${imagePath}`
            : "https://via.placeholder.com/1150x1140?text=Loading..."
        }
        alt="Lifecycle Banner"
        className="w-[1150px] h-[1140px] object-contain"
      />
    </div>
  );
}

export default Socialmediauser;
