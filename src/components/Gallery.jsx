

import React, { useState, useEffect } from 'react';
import { FaRegImage } from "react-icons/fa";
import FullscreenModal from './FullscreenModal';
import axios from 'axios';
import { BASE_URL } from '../api/config';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [trainingGallery, setTrainingGallery] = useState(null);
 


  useEffect(() => {
    axios.get(`${ BASE_URL }/api/training-gallery/images`)
      .then((res) => {
        setTrainingGallery(res.data);  // backend returns array of images [{ _id, image }]
      })
      .catch((err) => {
        console.error("Error fetching training Gallery:", err);
      });
  
  }, []);


  if (!trainingGallery) return <div className="text-center mt-10">Loading...</div>;


  return (
    <div className='max-w-[1140px] mx-auto pt-[30px]'>
      <div className="grid md:grid-cols-4 grid-cols-3 sm:gap-5 gap-1.5 sm:px-0 px-4">
        {trainingGallery.map((imgObj, idx) => {
          const src = `${ BASE_URL }/uploads/training/${imgObj.image}`;
          return (
            <div
              key={imgObj._id}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => setSelectedIndex(idx)}
            >
              <img
                src={src}
                alt={`img-${idx + 1}`}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <FaRegImage className="text-white text-5xl" />
              </div>
            </div>
          );
        })}

        {selectedIndex !== null && (
          <FullscreenModal
            images={trainingGallery.map(imgObj => `${ BASE_URL }/uploads/training/${imgObj.image}`)}
            currentIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
            onPrev={() =>
              setSelectedIndex((prev) => (prev === 0 ? trainingGallery.length - 1 : prev - 1))
            }
            onNext={() =>
              setSelectedIndex((prev) => (prev === trainingGallery.length - 1 ? 0 : prev + 1))
            }
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
