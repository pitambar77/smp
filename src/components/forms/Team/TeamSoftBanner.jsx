// File name: OrganiccraftForm.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../api/config';



const API_URL = `${BASE_URL }/api/soft-team-banner`;
export default function TeamSoftBanner() {
  const [heading, setHeading] = useState('');
  const [paragraphs, setParagraphs] = useState(['']);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [existingData, setExistingData] = useState(null);

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      if (res.data) {
        setExistingData(res.data);
        setHeading(res.data.heading || '');
        setParagraphs(res.data.paragraphs || ['']);
        setPreview(`${ BASE_URL }/${res.data.image}`);
      }
    });
  }, []);

  const handleParagraphChange = (index, value) => {
    const updated = [...paragraphs];
    updated[index] = value;
    setParagraphs(updated);
  };

  const addParagraph = () => {
    setParagraphs([...paragraphs, '']);
  };

  const removeParagraph = (index) => {
    const updated = paragraphs.filter((_, i) => i !== index);
    setParagraphs(updated.length > 0 ? updated : ['']);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('heading', heading);
    paragraphs.forEach((para) => formData.append('paragraphs', para));
    if (image) formData.append('image', image);

    try {
      if (existingData?._id) {
        await axios.put(`${API_URL}/${existingData._id}`, formData);
        alert('Updated successfully!');
      } else {
        await axios.post(API_URL, formData);
        alert('Created successfully!');
      }
    } catch (err) {
      console.error(err);
      alert('Error saving data');
    }
  };

  const handleDelete = async () => {
    if (!existingData?._id) return;
    if (!window.confirm('Are you sure to delete?')) return;

    try {
      await axios.delete(`${API_URL}/${existingData._id}`);
      setHeading('');
      setParagraphs(['']);
      setImage(null);
      setPreview('');
      setExistingData(null);
    } catch (err) {
      console.error(err);
      alert('Error deleting content');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 border shadow rounded">
      <h2 className="text-xl font-bold mb-4">Organic Craft Section Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Heading</label>
        <input
          type="text"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />

        <label className="block mb-2">Paragraphs</label>
        {paragraphs.map((para, idx) => (
          <div key={idx} className="mb-2 flex gap-2 items-start">
            <textarea
              value={para}
              onChange={(e) => handleParagraphChange(idx, e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button
              type="button"
              onClick={() => removeParagraph(idx)}
              className="text-red-500 font-bold"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addParagraph}
          className="mb-4 text-blue-600 underline"
        >
          + Add Paragraph
        </button>

        <label className="block mb-2">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setImage(e.target.files[0]);
            setPreview(URL.createObjectURL(e.target.files[0]));
          }}
          className="mb-4"
        />

        {preview && (
          <img src={preview} alt="Preview" className="h-40 mb-4 object-contain" />
        )}

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mr-2">
          {existingData ? 'Update' : 'Create'}
        </button>
        {existingData && (
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        )}
      </form>
    </div>
  );
}
