import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../api/config';

export default function AboutDirectorForm() {
  const [formData, setFormData] = useState({
    heading: '',
    content1: '',
    content2: '',
    image: null,
  });

  const [entries, setEntries] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get(`${ BASE_URL }/api/about-director`)
      .then(res => setEntries(res.data));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      if (val) data.append(key, val);
    });

    if (editId) {
      await axios.put(`${ BASE_URL }/api/about-director/${editId}`, data);
    } else {
      await axios.post(`${ BASE_URL }/api/about-director`, data);
    }

    setFormData({ heading: '', content1: '', content2: '', image: null });
    setEditId(null);
    const updated = await axios.get(`${ BASE_URL }/api/about-director`);
    setEntries(updated.data);
  };

  const handleEdit = (entry) => {
    setFormData({ heading: entry.heading, content1: entry.content1, content2: entry.content2, image: null });
    setEditId(entry._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${ BASE_URL }/api/about-director/${id}`);
    const updated = await axios.get(`${ BASE_URL }/api/about-director`);
    setEntries(updated.data);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">{editId ? 'Edit' : 'Create'} Director Section</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="heading" value={formData.heading} onChange={handleChange} placeholder="Heading" className="border w-full p-2" />
        <textarea name="content1" value={formData.content1} onChange={handleChange} placeholder="Content 1" className="border w-full p-2" />
        <textarea name="content2" value={formData.content2} onChange={handleChange} placeholder="Content 2" className="border w-full p-2" />
        <input type="file" name="image" onChange={handleChange} className="w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{editId ? 'Update' : 'Save'}</button>
      </form>

      <div className="mt-8">
        <h3 className="font-bold mb-2">Entries</h3>
        {entries.map(entry => (
          <div key={entry._id} className="border p-2 mb-2">
            <h4 className="font-semibold">{entry.heading}</h4>
            <p>{entry.content1}</p>
            <p>{entry.content2}</p>
            {entry.image && <img src={`${ BASE_URL }/uploads/${entry.image}`} className="h-24" />}
            <div className="flex gap-2 mt-2">
              <button onClick={() => handleEdit(entry)} className="text-blue-600">Edit</button>
              <button onClick={() => handleDelete(entry._id)} className="text-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
