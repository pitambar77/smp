// import React, { useState } from 'react';
// import { FaRegImage } from "react-icons/fa";
// import FullscreenModal from './FullscreenModal';

// import img1 from '../assets/images/galddr-fig-5.jpg'
// import img2 from '../assets/images/galddr-fig-6.jpg'
// import img3 from '../assets/images/galddr-fig-7.jpg'
// import img4 from '../assets/images/galddr-fig-8.jpg'
// import img5 from '../assets/images/galddr-fig-6.jpg'
// import img6 from '../assets/images/galddr-fig-7.jpg'
// import img7 from '../assets/images/galddr-fig-8.jpg'
// import img8 from '../assets/images/galddr-fig-5.jpg'
// import img9 from '../assets/images/galddr-fig-6.jpg'
// import img10 from '../assets/images/galddr-fig-7.jpg'
// import img11 from '../assets/images/galddr-fig-8.jpg'
// import img12 from '../assets/images/galddr-fig-5.jpg'
// import { useEffect } from 'react';
// import axios from 'axios';


// // const images = Array.from({ length: 20 }, (_, i) => `/assets/img${i + 1}.jpg`);

// const images =[img1,img2,img3,img4,img6,img7,img8,img9,img5,img10,img11,img12]

// const Gallery = () => {
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   const [traingGallery, setTraingGallery] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:8000/api/training-gallery/images`)
//       .then((res) => {
//         setTraingGallery(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching traing Gallery:", err);
//       });
//   }, []);
  

//   if (!traingGallery) return <div className="text-center mt-10">Loading...</div>;

 


//   return (
//     <>
//         <div className='max-w-[1140px] mx-auto pt-[30px]'>
//             <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
//                 {images.map((src, idx) => (
//                     <div
//                     key={idx}
//                     className="relative group cursor-pointer overflow-hidden"
//                     onClick={() => setSelectedIndex(idx)}
//                     >
//                     <img
//                         src={src}
//                         alt={`img-${idx + 1}`}
//                         className="w-full h-auto object-cover"
//                     />
//                     <div className="absolute inset-0 bg-black/80  opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
//                         <FaRegImage className="text-white text-5xl" />
//                     </div>
//                     </div>
//                 ))}

//                 {selectedIndex !== null && (
//                     <FullscreenModal
//                     images={images}
//                     currentIndex={selectedIndex}
//                     onClose={() => setSelectedIndex(null)}
//                     onPrev={() =>
//                         setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
//                     }
//                     onNext={() =>
//                         setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
//                     }
//                     />
//                 )}
//                 </div>
//         </div>
//     </>
    
//   );
// };

// export default Gallery;

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
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
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
