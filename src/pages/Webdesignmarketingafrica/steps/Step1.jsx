import React from 'react';

export default function Step1({ formData, onChange, errors }) {
  return (
    <>
      <input
        type="text"
        name="firstName"
        placeholder="First Name*"
        value={formData.firstName}
        onChange={onChange}
        className={`w-full text-gray-700 placeholder-gray-500 bg-white p-[15px] mb-[5px] rounded-[10px] ${
          errors.firstName ? 'border-2 border-red-500' : ''
        }`}
      />
      {errors.firstName && <p className="mb-3 text-red-200">{errors.firstName}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email*"
        value={formData.email}
        onChange={onChange}
        className={`w-full text-gray-700 placeholder-gray-500 bg-white p-[15px] mb-[5px] rounded-[10px] ${
          errors.email ? 'border-2 border-red-500' : ''
        }`}
      />
      {errors.email && <p className="mb-3 text-red-200">{errors.email}</p>}

      <input
        type="tel"
        name="phone"
        placeholder="Phone*"
        value={formData.phone}
        onChange={onChange}
        className={`w-full text-gray-700 placeholder-gray-500 bg-white p-[15px] mb-[5px] rounded-[10px] ${
          errors.phone ? 'border-2 border-red-500' : ''
        }`}
      />
      {errors.phone && <p className="mb-3 text-red-200">{errors.phone}</p>}
    </>
  );
}
