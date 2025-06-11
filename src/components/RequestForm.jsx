

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

export default function RequestForm() {
  const [form, setForm] = useState({
    firstName: '', email: '', countryCode: '', phone: '', website: '',selectServices:'', bestTimetoCall:''
  });
  
  const [captchaToken, setCaptchaToken] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert('Please verify reCAPTCHA');
      return;
    }

    try {
      const res = await axios.post('https://smp-backend-production.up.railway.app/api/request-form', {
        ...form,
        captchaToken
      });
      alert(res.data.message);
      setForm({ firstName: '', email: '', countryCode: '', phone: '', website: '', selectServices:'', bestTimetoCall:'' });
      setCaptchaToken('');
    } catch (err) {
      alert(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <>
       
  
        {/* Heading */}
        {/* <div className="text-white text-center py-8 -mt-5 rounded-t-lg">
          <h3 className="text-[24px] font-medium leading-snug">
            REQUEST A FREE STRATEGY SESSION
          </h3>
          <div className="border-t border-white w-full mx-auto mt-4 -mb-4" />
        </div> */}

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
            <input
            name="firstName"
            value={form.firstName} onChange={handleChange}
              
              placeholder="First Name*"
              className="p-4 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white" required />
            <input
            name="email"
              value={form.email} onChange={handleChange}  
             
              placeholder="Email Address*"
              className="p-4 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white" required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
            <select 
                name="countryCode"
                value={form.countryCode} onChange={handleChange}
                className="p-4 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white">
              <option value=''>Country Code</option>
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+28">+28</option>
              <option value="+92">+92</option>
            </select>
            <input
            value={form.phone} onChange={handleChange}
              name="phone"
              placeholder="Phone*"
               className="p-4 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white" required
            />
          </div>

          <input
          name="website"
          value={form.website} onChange={handleChange}
            type="text"
            placeholder="Website*"
            className="p-4 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white" required
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
            <select
            name="selectServices"
            value={form.selectServices} onChange={handleChange}
             className="rounded p-4 border border-white text-[15px] font-semibold w-full text-gray-600 bg-white hover:border-red-500">
              <option value='' >Select Services</option>
              <option value='Organic Marketing'>Organic Marketing</option>
              <option value='Paid Advertising'>Paid Advertising</option>
              <option value='360 Marketing'>360 Marketing</option>
              <option value='Web Design & Development'>Web Design & Development</option>
            </select>
            <select 
             name="bestTimetoCall"
            value={form.bestTimetoCall} onChange={handleChange}
            className="rounded p-4 border border-white text-[15px] font-semibold w-full text-gray-600 bg-white hover:border-red-500">
              <option value=''>Best Time To Call</option>
              <option value='12 AM - 3 AM'>12 AM - 3 AM</option>
              <option value='3 AM - 6 AM'>3 AM - 6 AM</option>
              <option value='6 AM - 9 AM'>6 AM - 9 AM</option>
              <option value='9 AM - 12 PM'>9 AM - 12 PM</option>
              <option value='12 PM - 3 PM'>12 PM - 3 PM</option>
              <option value='3 PM - 6 PM'>3 PM - 6 PM</option>
              <option value='6 PM - 9 PM'>6 PM - 9 PM</option>
              <option value='9 PM - 12 '>9 PM - 12 AM</option>
              <option value='Any Time'>Any Time</option>
            </select>
          </div>

          {/* CAPTCHA */}
           <div className="mt-5 flex flex-col gap-[10px]">
        <ReCAPTCHA
          sitekey="6Lf2glwrAAAAAPsuvFIyVh24DbavfwihlL8CU2-Z"
          onChange={(token) => setCaptchaToken(token)}
        />
        <button className="bg-[#ff5254] w-1/2  cursor-pointer border border-[#ff5254] hover:bg-[#011833] hover:border-[#011833] duration-500 ease-in-out hover:text-[#ff5254] text-white px-[30px] py-3 rounded font-semibold">
          Get My Free Quote
        </button>
      </div>

         </form>
    
     
    
    </>
  );
}

