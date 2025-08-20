// steps/Step5.jsx
import React from 'react';

function Step5({ formData, onChange, errors }) {
  const businessOptions = [
    'Custom Website Design',
    'Website Redesign',
    'UI/UX Optimization',
    'Website Copywriting',
    'Maintenance & Support',
  ];

  return (
    <div className="flex flex-col items-center w-full text-white">
      <div className="grid w-full max-w-2xl grid-cols-1 gap-6 mb-6 sm:grid-cols-2">
        {businessOptions.map((option) => (
          <label
            key={option}
            className="flex items-center space-x-2 text-lg font-medium"
          >
            <input
              type="radio"
              name="service"
              value={option}
              checked={formData.service === option}
              onChange={onChange}
              className="w-5 h-5 text-blue-500 form-radio"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      {errors.service && (
        <p className="text-sm text-red-300">{errors.service}</p>
      )}
    </div>
  );
}

export default Step5;
