import React from 'react';

export default function Step3({ formData, onCheckboxChange, errors }) {
  const inquiryOptions = [
    'Website',
    'B2B',
    'Email Campaigns',
    'Social Media',
    'Referrals',
  ];

  return (
    <div className="flex flex-col items-center w-full text-white">
      <h2 className="text-[40px] text-white text-center pb-[5px] font-medium -mt-10">
        Where are your current safari inquiries coming from?
      </h2>
      <p className="text-center text-white text-[20px] mb-15">Select all that apply:</p>

      <div className="grid w-full max-w-md grid-cols-1 gap-4 mb-6 sm:grid-cols-2">
        {inquiryOptions.map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input
              type="checkbox"
              name="inquirySources"
              value={option}
              checked={formData.inquirySources.includes(option)}
              onChange={onCheckboxChange}
              className="w-5 h-5 text-blue-600 form-checkbox"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      {errors.inquirySources && (
        <p className="text-sm text-red-300">{errors.inquirySources}</p>
      )}
    </div>
  );
}
