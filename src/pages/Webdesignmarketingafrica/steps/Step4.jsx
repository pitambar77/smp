// steps/Step4.jsx
import React from 'react';

function Step4({ formData, onChange, errors }) {
  const businessOptions = [
    'Startup',
    'Small Business',
    'Medium-sized Business',
    'Large Operator',
  ];

  return (
    <div className="flex flex-col items-center w-full text-white">
      {/* <h2 className="text-[32px] sm:text-[36px] font-semibold text-center mb-4">
        How would you best categorize your safari business?
      </h2> */}

      <div className="grid w-full max-w-2xl grid-cols-1 gap-6 mb-6 sm:grid-cols-2">
        {businessOptions.map((option) => (
          <label
            key={option}
            className="flex items-center space-x-2 text-lg font-medium"
          >
            <input
              type="radio"
              name="businessName"
              value={option}
              checked={formData.businessName === option}
              onChange={onChange}
              className="w-5 h-5 text-blue-500 form-radio"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      {errors.businessName && (
        <p className="text-sm text-red-300">{errors.businessName}</p>
      )}
    </div>
  );
}

export default Step4;
