import React from 'react';

export default function Step2({ formData, onChange, errors }) {
  return (
    <div className="flex flex-col gap-4 text-white">
      {/* <p className="text-lg font-medium">Get a Free Custom Strategy
</p> */}
      <div className="flex flex-col gap-2">
        <label className="inline-flex items-center gap-2">
          <input
            type="radio"
            name="hasWebsite"
            value="yes"
            checked={formData.hasWebsite === 'yes'}
            onChange={onChange}
            className="w-4 h-4 text-blue-500 form-radio"
          />
          <span>Yes</span>
        </label>

        <label className="inline-flex items-center gap-2">
          <input
            type="radio"
            name="hasWebsite"
            value="no"
            checked={formData.hasWebsite === 'no'}
            onChange={onChange}
            className="w-4 h-4 text-blue-500 form-radio"
          />
          <span>No</span>
        </label>
      </div>
      {errors.hasWebsite && <p className="text-red-300">{errors.hasWebsite}</p>}

      {formData.hasWebsite === 'yes' && (
        <>
          <input
            type="text"
            name="website"
            placeholder="Enter your website URL"
            value={formData.website}
            onChange={onChange}
            className={`w-full text-gray-700 placeholder-gray-500 bg-white p-[15px] rounded-[10px] mt-2 ${
              errors.website ? 'border-2 border-red-500' : ''
            }`}
          />
          {errors.website && <p className="text-red-300">{errors.website}</p>}
        </>
      )}
    </div>
  );
}
