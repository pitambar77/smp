import React, { useState, useEffect } from "react";
import axios from "axios";
 
export default function ImageForm() {
  const [images, setImages] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [altText, setAltText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
 
  // For editing images
  const [editImageId, setEditImageId] = useState(null);
  const [editAltText, setEditAltText] = useState("");
  const [editFile, setEditFile] = useState(null);
 
  // Fetch images on mount
  useEffect(() => {
    fetchImages();
  }, []);
 
  const fetchImages = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/images");
      setImages(res.data);
    } catch (err) {
      console.error(err);
    }
  };
 
  // Upload new image
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      setError("Please select an image");
      return;
    }
    setError("");
    setLoading(true);
 
    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("alt", altText);
 
      const res = await axios.post("http://localhost:8000/api/images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
 
      setImages((prev) => [...prev, res.data]);
      setImageFile(null);
      setAltText("");
    } catch (err) {
      setError("Upload failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
 
  // Delete image
  const deleteImage = async (id) => {
    if (!window.confirm("Delete this image?")) return;
    try {
      await axios.delete(`http://localhost:8000/api/images/${id}`);
      setImages((prev) => prev.filter((img) => img._id !== id));
      if (editImageId === id) cancelEdit();
    } catch (err) {
      console.error(err);
    }
  };
 
  // Start editing image
  const startEdit = (img) => {
    setEditImageId(img._id);
    setEditAltText(img.alt || "");
    setEditFile(null);
  };
 
  // Cancel edit
  const cancelEdit = () => {
    setEditImageId(null);
    setEditAltText("");
    setEditFile(null);
  };
 
  // Submit edit
  const submitEdit = async () => {
    if (!editImageId) return;
 
    const formData = new FormData();
    formData.append("alt", editAltText);
    if (editFile) formData.append("image", editFile);
 
    try {
      const res = await axios.put(`http://localhost:8000/api/images/${editImageId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
 
      setImages((prev) =>
        prev.map((img) => (img._id === editImageId ? res.data : img))
      );
      cancelEdit();
    } catch (err) {
      console.error(err);
    }
  };
 
  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleUpload} className="mb-6 flex flex-col gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="Alt text (optional)"
          value={altText}
          onChange={(e) => setAltText(e.target.value)}
          className="border px-2 py-1 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>
        {error && <p className="text-red-600">{error}</p>}
      </form>
 
      <h2 className="text-xl font-semibold mb-4">Uploaded Images</h2>
      <div className="grid grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img._id} className="border p-2 rounded relative">
            <img
              src={`http://localhost:8000${img.src}`}
              alt={img.alt || "image"}
              className="w-full h-32 object-contain rounded"
            />
 
            {editImageId === img._id ? (
              <div className="mt-2 flex flex-col gap-2">
                <input
                  type="text"
                  value={editAltText}
                  onChange={(e) => setEditAltText(e.target.value)}
                  placeholder="Alt text"
                  className="border px-2 py-1 rounded"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setEditFile(e.target.files[0])}
                />
                <div className="flex gap-2">
                  <button
                    onClick={submitEdit}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="bg-gray-400 text-black px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between mt-2">
                <button
                  onClick={() => startEdit(img)}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteImage(img._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
 
 