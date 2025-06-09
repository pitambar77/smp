import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../api/config";

const VideoUploadForm = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [videos, setVideos] = useState([]);
  const [editId, setEditId] = useState(null); // track which video is being edited

  // const API_BASE = "http://localhost:8000";

  const fetchVideos = async () => {
    const res = await axios.get(`${ BASE_URL }/api/videos`);
    setVideos(res.data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title is required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    if (thumbnail) formData.append("thumbnail", thumbnail);
    if (videoFile) formData.append("videoFile", videoFile);

    try {
      if (editId) {
        await axios.put(`${ BASE_URL }/api/videos/${editId}`, formData);
      } else {
        await axios.post(`${ BASE_URL }/api/videos`, formData);
      }

      setTitle("");
      setThumbnail(null);
      setVideoFile(null);
      setEditId(null);
      fetchVideos();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      try {
        await axios.delete(`${ BASE_URL }/api/videos/${id}`);
        fetchVideos();
      } catch (err) {
        console.error(err);
        alert("Delete failed");
      }
    }
  };

  const handleEdit = (video) => {
    setEditId(video._id);
    setTitle(video.title);
    setThumbnail(null);
    setVideoFile(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 border p-6 rounded-xl shadow bg-white"
      >
        <h2 className="text-xl font-bold">{editId ? "Edit Video" : "Upload Video"}</h2>

        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium">Thumbnail {editId && "(optional)"}</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
        </div>

        <div>
          <label className="block font-medium">Video File {editId && "(optional)"}</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editId ? "Update" : "Upload"}
        </button>

        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setTitle("");
              setThumbnail(null);
              setVideoFile(null);
            }}
            className="ml-4 px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
        )}
      </form>

      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <div key={video._id} className="border rounded-lg p-4 bg-white shadow">
            <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
            <img
              src={`${ BASE_URL }/${video.thumbnail}`}
              alt="thumbnail"
              className="w-full h-40 object-cover rounded mb-2"
            />
            <video
              controls
              className="w-full h-52 rounded"
              src={`${ BASE_URL }/${video.videoFile}`}
            />
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => handleEdit(video)}
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(video._id)}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoUploadForm;
