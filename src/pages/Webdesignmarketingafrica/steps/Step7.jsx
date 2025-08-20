import React from 'react';

export default function Step7({ formData, onChange, errors }) {
  return (
    <>
      <textarea
        name="notes"
        placeholder="Final Notes"
        value={formData.notes}
        onChange={onChange}
        className={`w-full text-gray-700 placeholder-gray-500 bg-white p-[15px] mb-[5px] rounded-[10px] min-h-[100px] ${
          errors.notes ? 'border-2 border-red-500' : ''
        }`}
      />
      {errors.notes && <p className="mb-3 text-red-200">{errors.notes}</p>}
    </>
  );
}
