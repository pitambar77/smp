// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AdminForm = ({ page, subpage }) => {
//   const [data, setData] = useState({ heading: "", subheading: "", content: "", image: "", subImage: "", _id: null });

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/content/${page}/${subpage}`).then(res => {
//       if (res.data) setData(res.data);
//     });
//   }, [page, subpage]);

//   const handleSubmit = async (type) => {
//     const formData = new FormData();
//     formData.append("heading", data.heading);
//     formData.append("subheading", data.subheading);
//     formData.append("content", data.content);
//     if (data.newImage) formData.append("image", data.newImage);
//     if (data.newSubImage) formData.append("subImage", data.newSubImage);

//     if (type === "save") {
//       await axios.post(`http://localhost:5000/api/content/${page}/${subpage}`, formData);
//     } else if (type === "update" && data._id) {
//       await axios.put(`http://localhost:5000/api/content/${page}/${subpage}/${data._id}`, formData);
//     } else if (type === "delete" && data._id) {
//       await axios.delete(`http://localhost:5000/api/content/${page}/${subpage}/${data._id}`);
//     }

//     window.location.reload();
//   };

//   return (
//     <div className="p-6 w-full">
//       <h1 className="text-2xl font-bold mb-4">{subpage}</h1>

//       <input type="file" onChange={e => setData({ ...data, newImage: e.target.files[0] })} />
//       <input type="file" onChange={e => setData({ ...data, newSubImage: e.target.files[0] })} />

//       <input type="text" placeholder="Banner Heading" className="border my-2 p-2 w-full"
//         value={data.heading} onChange={e => setData({ ...data, heading: e.target.value })} />
//       <input type="text" placeholder="Subbanner Heading" className="border my-2 p-2 w-full"
//         value={data.subheading} onChange={e => setData({ ...data, subheading: e.target.value })} />
//       <textarea placeholder="Content" className="border my-2 p-2 w-full h-32"
//         value={data.content} onChange={e => setData({ ...data, content: e.target.value })} />

//       <div className="flex gap-2 mt-4">
//         <button className="bg-blue-500 text-white px-4 py-2" onClick={() => handleSubmit("save")}>Save</button>
//         <button className="bg-yellow-500 text-white px-4 py-2" onClick={() => handleSubmit("update")}>Update</button>
//         <button className="bg-red-500 text-white px-4 py-2" onClick={() => handleSubmit("delete")}>Delete</button>
//       </div>
//     </div>
//   );
// };

// export default AdminForm;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { pageFields } from "../data/pageFields"
import { BASE_URL } from "../api/config";

const AdminForm = ({ page, subpage }) => {
  const [data, setData] = useState({});
  const [id, setId] = useState(null);
  const fields = pageFields[subpage] || [];

  useEffect(() => {
    axios.get(`${ BASE_URL }/api/content/${page}/${subpage}`).then(res => {
      if (res.data) {
        setData({ ...res.data.fields, ...res.data.images });
        setId(res.data._id);
      }
    });
  }, [page, subpage]);

  const handleChange = (e, field) => {
    const value = field.type === "file" ? e.target.files[0] : e.target.value;
    setData({ ...data, [field.name]: value });
  };

  const handleSubmit = async (method) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, val]) => {
      formData.append(key, val);
    });

    const url = `${ BASE_URL }/api/content/${page}/${subpage}`;
    if (method === "save") {
      await axios.post(url, formData);
    } else if (method === "update" && id) {
      await axios.put(`${url}/${id}`, formData);
    } else if (method === "delete" && id) {
      await axios.delete(`${url}/${id}`);
    }
    window.location.reload();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">{subpage}</h2>
      {fields.map((field, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-1 font-medium">{field.label}</label>
          {field.type === "textarea" ? (
            <textarea
              className="w-full p-2 border"
              value={data[field.name] || ""}
              onChange={(e) => handleChange(e, field)}
            />
          ) : field.type === "file" ? (
            <input type="file" onChange={(e) => handleChange(e, field)} />
          ) : (
            <input
              type="text"
              className="w-full p-2 border"
              value={data[field.name] || ""}
              onChange={(e) => handleChange(e, field)}
            />
          )}
        </div>
      ))}
      <div className="flex gap-3">
        <button onClick={() => handleSubmit("save")} className="bg-blue-500 text-white px-4 py-2">Save</button>
        <button onClick={() => handleSubmit("update")} className="bg-yellow-500 text-white px-4 py-2">Update</button>
        <button onClick={() => handleSubmit("delete")} className="bg-red-500 text-white px-4 py-2">Delete</button>
      </div>
    </div>
  );
};

export default AdminForm;
