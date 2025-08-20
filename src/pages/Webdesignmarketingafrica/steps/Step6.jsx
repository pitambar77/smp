// steps/Step5.jsx
import React from 'react';

function Step6({ formData, onChange, errors }) {
  const businessOptions = [
    'ASAP - within 2 weeks',
    'In 3 - 4 weeks',
    'In 1 - 2 months',
    'Flexible timeline / Just exploring',
 
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
              name="timeline"
              value={option}
              checked={formData.timeline === option}
              onChange={onChange}
              className="w-5 h-5 text-blue-500 form-radio"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      {errors.timeline && (
        <p className="text-sm text-red-300">{errors.timeline}</p>
      )}
    </div>
  );
}

export default Step6;
