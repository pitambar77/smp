import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../api/config';

const API_URL = `${ BASE_URL }/api/craft`;

export default function CraftForm() {
  const [heading, setHeading] = useState('');
  const [para1, setPara1] = useState('');
  const [para2, setPara2] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [existingData, setExistingData] = useState(null);

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      if (res.data) {
        setExistingData(res.data);
        setHeading(res.data.heading || '');
        setPara1(res.data.para1 || '');
        setPara2(res.data.para2 || '');
        setPreview(`${ BASE_URL }/${res.data.image}`);
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('para1', para1);
    formData.append('para2', para2);
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
      setPara1('');
      setPara2('');
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
      <h2 className="text-xl font-bold mb-4">Craft Section Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Heading</label>
        <input
          type="text"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />

        <label className="block mb-2">Paragraph 1</label>
        <textarea
          value={para1}
          onChange={(e) => setPara1(e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />

        <label className="block mb-2">Paragraph 2</label>
        <textarea
          value={para2}
          onChange={(e) => setPara2(e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />

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
