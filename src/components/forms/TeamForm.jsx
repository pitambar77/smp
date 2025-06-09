import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/config';

const API_URL = `${BASE_URL}/api/team-soft-banner`;

const BannerForm = () => {
  const [banner, setBanner] = useState(null);
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  


  // Fetch banner
  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setBanner(res.data);
      setHeading(res.data?.heading || '');
      setContent(res.data?.content || '');
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('content', content);
    if (image) formData.append('image', image);
    

    try {
      if (banner?._id) {
        await axios.put(`${API_URL}/${banner._id}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert('Error saving banner');
    }
  };

  const handleDeleteField = async (field) => {
    if (!banner?._id) return;
    await axios.patch(`${API_URL}/${banner._id}/delete/${field}`);
    window.location.reload();
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Team Soft Banner</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Heading</label>
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          {banner?.heading && (
            <button
              type="button"
              onClick={() => handleDeleteField('heading')}
              className="text-red-600 mt-1 text-sm"
            >
              Delete Heading
            </button>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Content</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          {banner?.subheading && (
            <button
              type="button"
              onClick={() => handleDeleteField('subheading')}
              className="text-red-600 mt-1 text-sm"
            >
              Delete Content
            </button>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium"> Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="block w-full"
          />
          {banner?.image && (
            <div className="mt-2">
              <img
                src={`${BASE_URL}/uploads/${banner.image}`}
                alt="Banner"
                className="w-full h-48 object-cover rounded shadow"
              />
            </div>
          )}
        </div>


        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Banner
        </button>
      </form>
    </div>
  );
};

export default BannerForm;
