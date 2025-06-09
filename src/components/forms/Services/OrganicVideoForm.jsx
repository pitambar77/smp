// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const API_URL = 'http://localhost:8000/api/webvideo';

// export default function WebVideoForm() {
//   const [video, setVideo] = useState(null);
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Fetch latest video on mount
//   useEffect(() => {
//     fetchVideo();
//   }, []);

//   const fetchVideo = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setVideo(res.data);
//     } catch (error) {
//       console.error('Error fetching video:', error);
//     }
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!file) return alert('Please select a video to upload.');

//     const formData = new FormData();
//     formData.append('video', file);

//     try {
//       setLoading(true);
//       const res = await axios.post(API_URL, formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       setVideo(res.data);
//       setFile(null);
//       alert('Video uploaded successfully!');
//     } catch (error) {
//       console.error('Upload error:', error);
//       alert('Failed to upload video.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!video) return;
//     if (!window.confirm('Are you sure you want to delete this video?')) return;

//     try {
//       await axios.delete(`${API_URL}/${video._id}`);
//       setVideo(null);
//       alert('Video deleted successfully!');
//     } catch (error) {
//       console.error('Delete error:', error);
//       alert('Failed to delete video.');
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto border rounded shadow">
//       <h2 className="text-xl font-semibold mb-4">Manage Web Video</h2>

//       <form onSubmit={handleUpload} className="mb-4">
//         <input
//           type="file"
//           accept="video/*"
//           onChange={handleFileChange}
//           disabled={loading}
//         />
//         <button
//           type="submit"
//           className="ml-2 px-4 py-1 bg-blue-600 text-white rounded"
//           disabled={loading}
//         >
//           {loading ? 'Uploading...' : 'Upload Video'}
//         </button>
//       </form>

//       {video && (
//         <div>
//           <video
//             src={`http://localhost:8000/${video.videoPath}`}
//             controls
//             className="w-full max-w-full rounded"
//           />
//           <button
//             onClick={handleDelete}
//             className="mt-3 px-4 py-1 bg-red-600 text-white rounded"
//             disabled={loading}
//           >
//             Delete Video
//           </button>
//         </div>
//       )}

//       {!video && <p>No video uploaded yet.</p>}
//     </div>
//   );
// }
// File: OrganicVideoForm.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../api/config';

const API_URL = `${ BASE_URL }/api/organicVideo`;

export default function OrganicVideoForm() {
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch existing video URL on mount
  useEffect(() => {
    async function fetchVideo() {
      try {
        const res = await axios.get(API_URL);
        if (res.data?.videoUrl) setVideoUrl(res.data.videoUrl);
      } catch (error) {
        console.error('Failed to fetch video URL', error);
      }
    }
    fetchVideo();
  }, []);

  // Save or update video URL
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!videoUrl) return alert('Please enter a video URL');

    setLoading(true);
    try {
      await axios.post(API_URL, { videoUrl });
      alert('Video URL saved!');
    } catch (error) {
      alert('Failed to save video URL');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Delete video URL
  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete the video URL?')) return;
    setLoading(true);
    try {
      await axios.delete(API_URL);
      setVideoUrl('');
      alert('Video URL deleted');
    } catch (error) {
      alert('Failed to delete video URL');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Manage YouTube Video URL</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="url"
          placeholder="Enter YouTube video URL"
          className="w-full p-2 border rounded"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          disabled={loading}
          required
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Video URL'}
        </button>
      </form>
      {videoUrl && (
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded"
          disabled={loading}
        >
          Delete Video URL
        </button>
      )}
    </div>
  );
}
