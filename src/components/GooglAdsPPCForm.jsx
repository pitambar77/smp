import axios from "axios";
import React, { useState } from "react";

const GooglAdsPPCForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await axios.post(
        "https://your-backend-url.com/api/ppc-analysis",
        formData
      );
      alert("Your analysis request has been sent!");
      setFormData({ fullName: "", email: "", phone: "" });
    } catch (error) {
      alert("Failed to send. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat] ">
        <div
          className=" mt-[80px] relative w-[90%] max-w-[500px] bg-gradient-to-b from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg
                 animate-slide-down-fade  "
        >
          <button className="absolute top-2 right-2 text-white text-lg">
            ✕
          </button>
          <div className="p-6">
            <h2 className="text-[30px] font-[600] text-white mb-4">
              Free PPC Analysis
            </h2>
            <div className="border-t border-white w-full mx-auto mt-4 mb-6" />
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter Your Full Name"
                className="p-4 rounded-[10px] w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
              />
              {errors.fullName && <p className="text-sm">{errors.fullName}</p>}

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="p-4 rounded-[10px] w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
              />
              {errors.email && <p className="text-sm">{errors.email}</p>}

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                className="p-4 rounded-[10px] w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
              />
              {errors.phone && <p className="text-sm">{errors.phone}</p>}
              <div className="border-t border-white w-full mx-auto mt-8 mb-4" />

              <div className="flex justify-between mt-4">
                <button type="button" className="bg-gray-600 px-4 py-2 rounded">
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-red-500 px-4 py-2 rounded"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GooglAdsPPCForm;
