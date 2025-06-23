

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BASE_URL } from "../../api/config";

// const Video = () => {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   // const API_BASE = "http://localhost:8000"; // Replace with your live backend

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const res = await axios.get(`${ BASE_URL }/api/videos`);
//         setVideos(res.data);
//       } catch (err) {
//         console.error("Failed to fetch videos", err);
//       }
//     };

//     fetchVideos();
//   }, []);

//   const openModal = (video) => {
//     setSelectedVideo(video);
//     document.body.style.overflow = "hidden"; // Prevent background scroll
//   };

//   const closeModal = () => {
//     setSelectedVideo(null);
//     document.body.style.overflow = "auto";
//   };

//   return (
//     <div className='w-full py-[80px]'>
//     <div className=' max-w-[1140px] mx-auto'>
//       <h1 className='text-[50px] text-[#3467d8] font-[700] px[5%] pb-[15px] text-center uppercase'>Most Recent Videos</h1>

//       <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
//         {videos.map((video) => (
//           <div
//             key={video._id}
//             className=" overflow-hidden shadow hover:shadow-md transition-all"
//           >
//             <div
//               onClick={() => openModal(video)}
//               className="relative w-full h-[244px] overflow-hidden cursor-pointer"
//             >
//               <img
//                 src={`${ BASE_URL }/${video.thumbnail}`}
//                 alt={video.title}
//                 className="w-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/30  opacity-80 flex items-center justify-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-16 w-16 text-red-500"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="1.5"
//                     d="M14.752 11.168l-4.596-2.65A1 1 0 009 9.383v5.234a1 1 0 001.156.984l4.596-2.65a1 1 0 000-1.783z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="1.5"
//                     d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </div>
//             </div>
//             {/* <div className="p-4 space-y-2">
//               <h3 className="text-lg font-semibold">{video.title}</h3>
//             </div> */}
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//      {selectedVideo && (
//   <div
//     className="fixed inset-0 z-50 bg-black/80 bg-opacity-80 flex items-center justify-center"
//     onClick={closeModal}
//   >
//     <div
//       className="relative w-full max-w-4xl mx-auto p-4  "
//       onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
//     >
//       <button
//         onClick={closeModal}
//         className="absolute top-2 right-4 text-white text-3xl font-bold z-10"
//       >
//         &times;
//       </button>
//       <video
//         controls
//         autoPlay
//         src={`${ BASE_URL }/${selectedVideo.videoFile}`}
//         className="w-full rounded-lg shadow-lg"
//       />
      
//     </div>
//   </div>
// )}
// </div>
//     </div>
//   );
// };
// export default Video;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/config";

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // const API_BASE = "http://localhost:8000"; // Replace with your live backend

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`${ BASE_URL }/api/videos`);
        setVideos(res.data);
      } catch (err) {
        console.error("Failed to fetch videos", err);
      }
    };

    fetchVideos();
  }, []);

  const openModal = (video) => {
    setSelectedVideo(video);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className='w-full md:py-[80px] py-8'>
    <div className=' max-w-[1140px] mx-auto'>
      <h1 className=' text-[24px] md:text-[50px] text-[#3467d8] font-[700] px[5%] pb-[15px] text-center uppercase'>Most Recent Videos</h1>

      <div className="grid md:grid-cols-3 grid-cols-2 px-4  md:gap-5 gap-3">
        {videos.map((video) => (
          <div
            key={video._id}
            className=" overflow-hidden shadow hover:shadow-md transition-all"
          >
            <div
              onClick={() => openModal(video)}
              className="relative w-full h-[100px] md:h-[154px] lg:h-[244px] overflow-hidden cursor-pointer"
            >
              <img
                src={`${ BASE_URL }/${video.thumbnail}`}
                alt={video.title}
                className="w-full object-cover  "
              />
              <div className="absolute inset-0    flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14.752 11.168l-4.596-2.65A1 1 0 009 9.383v5.234a1 1 0 001.156.984l4.596-2.65a1 1 0 000-1.783z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            {/* <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{video.title}</h3>
            </div> */}
          </div>
        ))}
      </div>

      {/* Modal */}
     {selectedVideo && (
  <div
    className="fixed inset-0 z-50 bg-black/80 bg-opacity-80 flex items-center justify-center"
    onClick={closeModal}
  >
    <div
      className="relative w-full max-w-4xl mx-auto p-4  "
      onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
    >
      <button
        onClick={closeModal}
        className="absolute top-2 right-4 text-white text-3xl font-bold z-10"
      >
        &times;
      </button>
      <video
        controls
        autoPlay
        src={`${ BASE_URL }/${selectedVideo.videoFile}`}
        className="w-full rounded-lg shadow-lg"
      />
      
    </div>
  </div>
)}
</div>
    </div>
  );
};
export default Video;