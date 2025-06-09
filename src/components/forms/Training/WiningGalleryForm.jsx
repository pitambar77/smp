import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../api/config";



export default function WiningGalleryForm() {
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading] = useState("");
  const [images, setImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);

  const fetchData = async () => {
    const headRes = await axios.get(`${ BASE_URL }/api/training-gallery/heading`);
    const imgRes = await axios.get(`${ BASE_URL }/api/training-gallery/images`);
    if (headRes.data) {
      setHeading(headRes.data.heading);
      setSubheading(headRes.data.subheading);
    }
    setImages(imgRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateHeading = async (e) => {
    e.preventDefault();
    await axios.post(`${ BASE_URL }/api/training-gallery/heading`, {
      heading,
      subheading
    });
    fetchData();
  };

  const uploadImages = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Array.from(imageFiles).forEach((file) => {
      data.append("images", file);
    });
    await axios.post(`${ BASE_URL }/api/training-gallery/images`, data);
    setImageFiles([]);
    fetchData();
  };

  const deleteImage = async (id) => {
    await axios.delete(`${ BASE_URL }/api/training-gallery/images/${id}`);
    fetchData();
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold">wining Gallery Section</h2>

      {/* Heading/Subheading Form */}
      <form onSubmit={updateHeading} className="space-y-2">
        <input
          type="text"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          placeholder="Heading"
          className="w-full border p-2"
        />
        <input
          type="text"
          value={subheading}
          onChange={(e) => setSubheading(e.target.value)}
          placeholder="Subheading"
          className="w-full border p-2"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          Save Heading
        </button>
      </form>

      {/* Upload Multiple Images */}
      <form onSubmit={uploadImages} className="space-y-2">
        <input
          type="file"
          multiple
          onChange={(e) => setImageFiles(e.target.files)}
          className="w-full"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">
          Upload Images
        </button>
      </form>

      {/* Image Preview */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img._id} className="relative border rounded overflow-hidden shadow">
            <img
              src={`${ BASE_URL }/uploads/training/${img.image}`}
              className="w-full h-40 object-cover"
              alt=""
            />
            <button
              onClick={() => deleteImage(img._id)}
              className="absolute top-1 right-1 text-white bg-red-500 p-1 rounded"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
