
// import React, { useState } from "react";
// import { pageFields } from "../data/pageFields";

// export default function PageForm({ page }) {
//   const [formData, setFormData] = useState({});
//   const fields = pageFields[page] || [];

//   const handleChange = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   return (
//     <div className="p-6 bg-white shadow rounded w-full max-w-7xl">
//       <h2 className="text-2xl font-semibold mb-4">{page}</h2>

//       {fields.map((field) => (
//         <div className="mb-4" key={field.key}>
//           <label className="block font-medium mb-1">{field.label}</label>
//           {field.type === "file" ? (
//             <input
//               type="file"
//               onChange={(e) => handleChange(field.key, e.target.files[0])}
//               className="block"
//             />
//           ) : field.type === "textarea" ? (
//             <textarea
//               value={formData[field.key] || ""}
//               onChange={(e) => handleChange(field.key, e.target.value)}
//               className="w-full border rounded px-3 py-2"
//               rows={4}
//             />
//           ) : (
//             <input
//               type="text"
//               value={formData[field.key] || ""}
//               onChange={(e) => handleChange(field.key, e.target.value)}
//               className="w-full border rounded px-3 py-2"
//             />
//           )}
//         </div>
//       ))}

//       {fields.length > 0 && (
//         <div className="flex gap-4 mt-4">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
//           <button className="bg-yellow-500 text-white px-4 py-2 rounded">Update</button>
//           <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
//         </div>
//       )}
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const API_URL = 'http://localhost:8000/api/banner';

// const PageForm = () => {
//   const [banner, setBanner] = useState(null);
//   const [heading, setHeading] = useState('');
//   const [subheading, setSubheading] = useState('');
//   const [image, setImage] = useState(null);

//   // Fetch banner
//   useEffect(() => {
//     axios.get(API_URL).then((res) => {
//       setBanner(res.data);
//       setHeading(res.data?.heading || '');
//       setSubheading(res.data?.subheading || '');
//     });
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('heading', heading);
//     formData.append('subheading', subheading);
//     if (image) formData.append('image', image);

//     try {
//       if (banner?._id) {
//         await axios.put(`${API_URL}/${banner._id}`, formData);
//       } else {
//         await axios.post(API_URL, formData);
//       }
//       window.location.reload();
//     } catch (err) {
//       console.error(err);
//       alert('Error saving banner');
//     }
//   };

//   const handleDeleteField = async (field) => {
//     if (!banner?._id) return;
//     await axios.patch(`${API_URL}/${banner._id}/delete/${field}`);
//     window.location.reload();
//   };

//   return (
//     <div className="p-6 max-w-lg mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Banner</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1 font-medium">Heading</label>
//           <input
//             type="text"
//             value={heading}
//             onChange={(e) => setHeading(e.target.value)}
//             className="w-full border rounded px-3 py-2"
//           />
//           {banner?.heading && (
//             <button
//               type="button"
//               onClick={() => handleDeleteField('heading')}
//               className="text-red-600 mt-1 text-sm"
//             >
//               Delete Heading
//             </button>
//           )}
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Subheading</label>
//           <input
//             type="text"
//             value={subheading}
//             onChange={(e) => setSubheading(e.target.value)}
//             className="w-full border rounded px-3 py-2"
//           />
//           {banner?.subheading && (
//             <button
//               type="button"
//               onClick={() => handleDeleteField('subheading')}
//               className="text-red-600 mt-1 text-sm"
//             >
//               Delete Subheading
//             </button>
//           )}
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Background Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files[0])}
//             className="block w-full"
//           />
//           {banner?.image && (
//             <div className="mt-2">
//               <img
//                 src={`http://localhost:8000/uploads/${banner.image}`}
//                 alt="Banner"
//                 className="w-full h-48 object-cover rounded shadow"
//               />
//             </div>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Save Banner
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PageForm;




