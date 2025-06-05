import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/config';

const API_URL = `${BASE_URL}/api/home-overview`;

const HomeOverview = () => {
  const [overview, setOverview] = useState(null);
  const [heading, setHeading] = useState('');
  const [subheading, setSubheading] = useState('');
  const [content1, setContent1] = useState('');
  const [content2, setContent2] = useState('');
  const [content3, setContent3] = useState('');
  const [content4, setContent4] = useState('');
  const [image, setImage] = useState(null);

  // Fetch overview
  useEffect(() => {
    axios.get(API_URL).then((res) => {
      const data = res.data;
      setOverview(data);
      setHeading(data?.heading || '');
      setSubheading(data?.subheading || '');
      setContent1(data?.content1 || '');
      setContent2(data?.content2 || '');
      setContent3(data?.content3 || '');
      setContent4(data?.content4 || '');
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('subheading', subheading);
    formData.append('content1', content1);
    formData.append('content2', content2);
    formData.append('content3', content3);
    formData.append('content4', content4);
    if (image) formData.append('image', image);

    try {
      if (overview?._id) {
        await axios.put(`${API_URL}/${overview._id}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert('Error saving overview');
    }
  };

  const handleDeleteField = async (field) => {
    if (!overview?._id) return;
    await axios.patch(`${API_URL}/${overview._id}/delete/${field}`);
    window.location.reload();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Home Overview</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block mb-1 font-medium">Heading</label>
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          {overview?.heading && (
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
          <label className="block mb-1 font-medium">Subheading</label>
          <input
            type="text"
            value={subheading}
            onChange={(e) => setSubheading(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          {overview?.subheading && (
            <button
              type="button"
              onClick={() => handleDeleteField('subheading')}
              className="text-red-600 mt-1 text-sm"
            >
              Delete Subheading
            </button>
          )}
        </div>

        {['content1', 'content2', 'content3', 'content4'].map((key, index) => (
          <div key={key}>
            <label className="block mb-1 font-medium">Content {index + 1}</label>
            <textarea
              value={eval(key)}
              onChange={(e) => eval(`setContent${index + 1}`)(e.target.value)}
              className="w-full border rounded px-3 py-2"
              rows={3}
            />
            {overview?.[key] && (
              <button
                type="button"
                onClick={() => handleDeleteField(key)}
                className="text-red-600 mt-1 text-sm"
              >
                Delete Content {index + 1}
              </button>
            )}
          </div>
        ))}

        <div>
          <label className="block mb-1 font-medium">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="block w-full"
          />
          {overview?.image && (
            <div className="mt-2">
              <img
                src={`${BASE_URL}/uploads/${overview.image}`}
                alt="Overview"
                className="w-full h-48 object-cover rounded shadow"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Overview
        </button>
      </form>
    </div>
  );
};

export default HomeOverview;
