import React, { useEffect, useState } from "react";
import axios from "axios";
 
export default function EducatorForm() {
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
 
  // Fetch existing data
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/educator")
      .then((res) => {
        if (res.data) {
          setHeading(res.data.heading || "");
          setSubheading(res.data.subheading || "");
          setPreviewUrl(res.data.backgroundImage || "");
        }
      })
      .catch((err) => {
        console.error("Error fetching educator data:", err);
      });
  }, []);
 
  const handleImageChange = (e) => {
    setBackgroundImage(e.target.files[0]);
    setPreviewUrl(URL.createObjectURL(e.target.files[0]));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("subheading", subheading);
    if (backgroundImage) {
      formData.append("backgroundImage", backgroundImage);
    }
 
    try {
      await axios.post("http://localhost:8000/api/educator", formData);
      alert("Educator section updated successfully!");
    } catch (err) {
      console.error("Error updating educator section:", err);
      alert("Failed to update. Check console.");
    }
  };
 
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete the Educator content?")) {
      try {
        await axios.delete("http://localhost:8000/api/educator");
        setHeading("");
        setSubheading("");
        setBackgroundImage(null);
        setPreviewUrl("");
        alert("Educator section deleted.");
      } catch (err) {
        console.error("Error deleting educator content:", err);
      }
    }
  };
 
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6">Edit Educator Section</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Heading */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Heading</label>
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
 
        {/* Subheading */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Subheading</label>
          <textarea
            value={subheading}
            onChange={(e) => setSubheading(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded resize-none"
            rows={3}
          />
        </div>
 
        {/* Background Image Upload */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Background Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              className="mt-4 rounded shadow w-full max-h-64 object-cover"
            />
          )}
        </div>
 
        {/* Submit and Delete Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
 
 