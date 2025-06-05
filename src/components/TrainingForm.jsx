import React, { useState } from "react";

const TrainingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    website: "",
    purpose: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[1140px] mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-[30px]"
    >
      <input
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        className="border rounded-[2px] px-[23px] py-[6px] text-[17px] font-[600]  border-[#ccc] bg-[#fbfbfb] h-[60px]  w-full "
      />
      <input
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        className="border rounded-[2px] px-[23px] py-[6px] text-[17px] font-[600]  border-[#ccc] bg-[#fbfbfb] h-[60px]  w-full "
      />

      <div className="flex space-x-2">
        <select
          name="countryCode"
          onChange={handleChange}
          className="border rounded-[2px] px-[18px] text-[#787878] py-[6px] text-[17px] font-[600]  border-[#ccc] bg-[#fbfbfb] h-[60px] w-1/3"
        >
          <option value="">Country Code</option>
          <option value="+1">+1</option>
          <option value="+91">+91</option>
          <option value="+44">+44</option>
          {/* Add more as needed */}
        </select>
        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="border rounded-[2px] px-[23px] py-[6px] text-[17px] font-[600]  border-[#ccc] bg-[#fbfbfb] h-[60px] w-2/3"
        />
      </div>
      <input
        name="website"
        placeholder="Your Website"
        onChange={handleChange}
        className="border rounded-[2px] px-[23px] py-[6px] text-[17px] font-[600]  border-[#ccc] bg-[#fbfbfb] h-[60px]w-full"
      />

      <div className="md:col-span-2 mt-4">
        <p className="font-semibold mb-2 text-[22px] text-[#000]">Training Purpose:</p>
        <label className="mr-6 text-[17px] font-[600] text-[#787878]">
          <input
            type="radio"
            name="purpose"
            value="Individuals"
            onChange={handleChange}
            className="mr-2 "
          />
          Individuals
        </label>
        <label className=" text-[17px] font-[600] text-[#787878]">
          <input
            type="radio"
            name="purpose"
            value="Team"
            onChange={handleChange}
            className="mr-2 "
          />
          Team Or Group
        </label>
      </div>

      <textarea
        name="message"
        placeholder="Please give us as many details as possible about your project"
        rows="4"
        onChange={handleChange}
        className="md:col-span-2 border rounded-[2px] pt-[15px] px-[30px] text-[17px] font-[600]  border-[#ccc] bg-[#fbfbfb] h-[200px] w-full mt-4"
      />

      <div className="md:col-span-2 flex justify-center mt-4">
        <button
          type="submit"
          className="bg-[#ff5254] cursor-pointer duration-300 text-white px-[30px] py-3 font-[600] text-[16px] hover:bg-[#011833] hover:text-[#ff5254] rounded"
        >
          Get Start For Training
        </button>
      </div>
    </form>
  );
};

export default TrainingForm;
