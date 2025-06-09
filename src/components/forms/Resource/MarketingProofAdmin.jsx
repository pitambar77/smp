import React, { useEffect, useState } from "react";
import axios from "axios";
 
const API_URL = "http://localhost:8000/api/marketing-proof";
 
const MarketingProofAdmin = () => {
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  // For add image form
  const [newTitle, setNewTitle] = useState("");
  const [newImageFile, setNewImageFile] = useState(null);
 
  // For editing image
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editImageFile, setEditImageFile] = useState(null);
 
  // Fetch data on load
  useEffect(() => {
    fetchData();
  }, []);
 
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setHeading(res.data.heading || "");
      setSubheading(res.data.subheading || "");
      setImages(res.data.images || []);
      setLoading(false);
    } catch (err) {
      setError("Failed to load data",err);
      setLoading(false);
    }
  };
 
  // Update heading & subheading
  const handleHeadingUpdate = async () => {
    try {
      await axios.put(`${API_URL}/heading`, { heading, subheading });
      alert("Heading and Subheading updated!");
    } catch (err) {
      alert("Error updating heading/subheading",err);
    }
  };
 
  // Add new image
  const handleAddImage = async (e) => {
    e.preventDefault();
    if (!newImageFile) {
      alert("Please select an image file");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("image", newImageFile);
      formData.append("title", newTitle);
 
      const res = await axios.post(`${API_URL}/images`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setImages(res.data.images);
      setNewTitle("");
      setNewImageFile(null);
      alert("Image added!");
    } catch (err) {
      alert("Error adding image",err);
    }
  };
 
  // Prepare image edit form
  const startEdit = (image) => {
    setEditId(image._id);
    setEditTitle(image.title);
    setEditImageFile(null);
  };
 
  // Cancel edit
  const cancelEdit = () => {
    setEditId(null);
    setEditTitle("");
    setEditImageFile(null);
  };
 
  // Submit image edit
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!editId) return;
 
    try {
      const formData = new FormData();
      formData.append("title", editTitle);
      if (editImageFile) {
        formData.append("image", editImageFile);
      }
 
      const res = await axios.put(`${API_URL}/images/${editId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setImages(res.data.images);
      cancelEdit();
      alert("Image updated!");
    } catch (err) {
      alert("Error updating image",err);
    }
  };
 
  // Delete image
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;
 
    try {
      const res = await axios.delete(`${API_URL}/images/${id}`);
      setImages(res.data.images);
      alert("Image deleted!");
    } catch (err) {
      alert("Error deleting image",err);
    }
  };
 
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;
 
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Marketing Proof Admin</h2>
 
      {/* Heading & Subheading */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Edit Heading & Subheading</h3>
        <input
          type="text"
          placeholder="Heading"
          className="border p-2 w-full mb-2"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <textarea
          placeholder="Subheading"
          className="border p-2 w-full mb-2"
          rows={3}
          value={subheading}
          onChange={(e) => setSubheading(e.target.value)}
        />
        <button
          onClick={handleHeadingUpdate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Update Heading & Subheading
        </button>
      </section>
 
      {/* Add New Image */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-2">Add New Image</h3>
        <form onSubmit={handleAddImage} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Image Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border p-2"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewImageFile(e.target.files[0])}
            className="border p-2"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Add Image
          </button>
        </form>
      </section>
 
      {/* Images List */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Existing Images</h3>
        {images.length === 0 && <p>No images uploaded yet.</p>}
 
        <div className="space-y-6">
          {images.map((image) =>
            editId === image._id ? (
              // Edit mode
              <form
                key={image._id}
                onSubmit={handleEditSubmit}
                className="border p-4 rounded flex flex-col gap-2"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-32 h-20 object-cover mb-2 rounded"
                />
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="border p-2"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setEditImageFile(e.target.files[0])}
                  className="border p-2"
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-1 rounded"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="bg-gray-400 px-4 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              // View mode
              <div
                key={image._id}
                className="border p-4 rounded flex items-center justify-between"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-32 h-20 object-cover rounded"
                />
                <div className="flex-1 px-4">
                  <h4 className="font-semibold">{image.title || "No Title"}</h4>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(image)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(image._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};
 
export default MarketingProofAdmin;
 
 