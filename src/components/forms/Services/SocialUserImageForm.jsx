import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/socialImage';

export default function SocialUserImageForm() {
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch existing image on mount
  useEffect(() => {
    async function fetchImage() {
      try {
        const res = await axios.get(API_URL);
        if (res.data?.image) {
          setExistingImage(res.data.image);
        }
      } catch (error) {
        console.error('Failed to fetch image', error);
      }
    }
    fetchImage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert('Please select an image');

    const formData = new FormData();
    formData.append('image', image);

    setLoading(true);
    try {
      await axios.post(API_URL, formData);
      alert('Image uploaded!');
      window.location.reload(); // Refresh to show updated image
    } catch (error) {
      alert('Failed to upload image');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;
    setLoading(true);
    try {
      await axios.delete(API_URL);
      setExistingImage('');
      alert('Image deleted');
    } catch (error) {
      alert('Failed to delete image');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Manage Social Media Image</h2>

      {existingImage && (
        <div className="mb-4">
          <p className="mb-2">Current Image:</p>
          <img
            src={`http://localhost:8000/${existingImage}`}
            alt="Social Media"
            className="w-full rounded border"
          />
        </div>
      )}

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full mb-2"
          disabled={loading}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={loading}
        >
          {loading ? 'Uploading...' : 'Upload Image'}
        </button>
      </form>

      {existingImage && (
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded"
          disabled={loading}
        >
          Delete Image
        </button>
      )}
    </div>
  );
}
