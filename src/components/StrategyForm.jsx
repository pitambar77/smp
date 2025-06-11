// components/StrategyForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

import grecaptcha from 'react-google-recaptcha'
const StrategyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    countryCode: '',
    phone: '',
    website: '',
    service: '',
    timeToCall: '',
    captchaToken: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptcha = async () => {
    const token = grecaptcha.getResponse();
    if (!token) return alert("Please verify reCAPTCHA.");
    setFormData((prev) => ({ ...prev, captchaToken: token }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleCaptcha();

    try {
      const res = await axios.post('/api/contacts', formData);
      alert(res.data.message);
    } catch (err) {
      alert('Submission failed',err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-blue-800 text-white p-8 rounded-md w-full max-w-3xl mx-auto space-y-4 mt-[120px]">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="firstName" required placeholder="First Name*" onChange={handleChange} className="p-2 text-black" />
        <input type="email" name="email" required placeholder="Email Address*" onChange={handleChange} className="p-2 text-black" />
        <input type="text" name="countryCode" required placeholder="Country Code*" onChange={handleChange} className="p-2 text-black" />
        <input type="text" name="phone" required placeholder="Phone*" onChange={handleChange} className="p-2 text-black" />
        <input type="text" name="website" required placeholder="Website*" onChange={handleChange} className="p-2 text-black col-span-2" />
        <select name="service" onChange={handleChange} required className="text-black p-2">
          <option>Select Service</option>
          <option>SEO</option>
          <option>Social Media</option>
        </select>
        <select name="timeToCall" onChange={handleChange} required className="text-black p-2">
          <option>Best Time To Call</option>
          <option>Morning</option>
          <option>Evening</option>
        </select>
      </div>
      <div className="mt-4">
        <div className="g-recaptcha" data-sitekey="6LeFRVsrAAAAAEfgOzVimk_7BG5hM0hQFzgsYyZ9"></div>
      </div>
      <button type="submit" className="bg-red-500 text-white px-4 py-2 mt-4 rounded">Get My Free Quote</button>
    </form>
  );
};

export default StrategyForm;
