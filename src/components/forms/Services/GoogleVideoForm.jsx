import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/googleVideo';

export default function GoogleVideoForm() {
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
