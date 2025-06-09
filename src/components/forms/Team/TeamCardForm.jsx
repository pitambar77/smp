import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../api/config";

const API_URL = `${ BASE_URL }/api/team-card`;

export default function TeamCardForm() {
  const [members, setMembers] = useState([]);
  const [form, setForm] = useState({ name: "", role: "", image: null });
  const [editingId, setEditingId] = useState(null);

  // Fetch all team members on load
  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    const res = await axios.get(API_URL);
    setMembers(res.data);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("role", form.role);
    if (form.image) formData.append("image", form.image);

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      setForm({ name: "", role: "", image: null });
      setEditingId(null);
      fetchMembers();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (member) => {
    setForm({ name: member.name, role: member.role, image: null });
    setEditingId(member._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchMembers();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        {editingId ? "Edit Team Member" : "Add Team Member"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="role"
          value={form.role}
          onChange={handleChange}
          placeholder="Role"
          className="border p-2 w-full"
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingId ? "Update" : "Create"}
        </button>
      </form>

      <h3 className="text-xl font-semibold mb-2">Team Members</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {members.map((member) => (
          <div
            key={member._id}
            className="p-4 border rounded shadow text-center"
          >
            {member.image && (
              <img
                src={`${ BASE_URL }/${member.image}`}
                alt={member.name}
                className="w-32 h-32 object-cover mx-auto rounded-full mb-2"
              />
            )}
            <h4 className="font-bold">{member.name}</h4>
            <p className="text-sm text-gray-600">{member.role}</p>
            <div className="mt-2 flex justify-center gap-2">
              <button
                onClick={() => handleEdit(member)}
                className="bg-yellow-400 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(member._id)}
                className="bg-red-600 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
