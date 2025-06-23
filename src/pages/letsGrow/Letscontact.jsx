// "use client"
 
// import React from "react"
// import { useState } from "react"
 
// export default function Letscontact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     countryCode: "",
//     phone: "",
//     whatsapp: "",
//     website: "",
//     service: "",
//     budget: "",
//     serviceType: "trekking",
//     projectDetails: "",
//   })
 
//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }
 
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//   }
 
//   return (
//     <div className="min-h-screen bg-white py-[70px]  ">
//         <div className="max-w-[1140px] mb-4 mx-auto md:text-[50px] text-[24px] px-4 md:px-0 text-center font-bold text-[#3467d8] md:px-20  " >
//             <h1>Tell Us More About Your Business To Get Started!</h1>
//         </div>
//       <div className="max-w-[1140px] mx-auto  md:mt-8">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name and Email Row */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-4 border text-gray-500 font-semibold text-[17px] border-gray-300 rounded focus:outline-none    placeholder-gray-400"
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-4   rounded focus:outline-none  border border-gray-300 text-gray-500 font-semibold text-[17px] placeholder-gray-400"
//               />
//             </div>
//           </div>
 
//           {/* Country Code, Phone, WhatsApp Row */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div>
//               <select
//                 name="countryCode"
//                 value={formData.countryCode}
//                 onChange={handleInputChange}
//                 className="w-[240px] px-4 py-4 border border-gray-300 text-gray-500 font-semibold text-[17px] rounded focus:outline-none    placeholder-gray-400"
//               >
//                 <option className="text-gray-200" value="">Country Code</option>
//                 <option value="+1">+1 (USA)</option>
//                 <option value="+44">+44 (UK)</option>
//                 <option value="+91">+91 (India)</option>
//                 <option value="+86">+86 (China)</option>
//                 <option value="+49">+49 (Germany)</option>
//               </select>
//             </div>
//             <div>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className="w-[300px] px-4 py-4 -ml-32  rounded focus:outline-none  border border-gray-300 text-gray-500 font-semibold text-[17px] placeholder-gray-400"
//               />
//             </div>
//             <div>
//               <input
//                 type="tel"
//                 name="whatsapp"
//                 placeholder="Whatsapp Number"
//                 value={formData.whatsapp}
//                 onChange={handleInputChange}
//                 className="w-[558px] -ml-48  px-4 py-4 border  border-gray-300 text-gray-500 font-semibold text-[17px] rounded focus:outline-none    placeholder-gray-400"
//               />
//             </div>
//           </div>
 
//           {/* Website and Service Row */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <div>
//               <input
//                 type="url"
//                 name="website"
//                 placeholder="Your Website"
//                 value={formData.website}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-4  rounded focus:outline-none   border border-gray-300 text-gray-500 font-semibold text-[17px] placeholder-gray-400"
//               />
//             </div>
//             <div>
//               <select
//                 name="service"
//                 value={formData.service}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-4 rounded focus:outline-none   border border-gray-300 text-gray-500 font-semibold text-[17px] placeholder-gray-400"
//               >
//                 <option className="text-gray-200" value="">Select Service</option>
//                 <option value="web-development">Web Development</option>
//                 <option value="mobile-app">Mobile App Development</option>
//                 <option value="digital-marketing">Digital Marketing</option>
//                 <option value="seo">SEO Services</option>
//                 <option value="consulting">Business Consulting</option>
//               </select>
//             </div>
//           </div>
 
//           {/* Budget Row */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <div>
//               <select
//                 name="budget"
//                 value={formData.budget}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-4  rounded focus:outline-none border border-gray-300 text-gray-500 font-semibold text-[17px] placeholder-gray-400"
//               >
//                 <option className="text-gray-200" value="">Your Budget</option>
//                 <option value="under-5k">Under $5,000</option>
//                 <option value="5k-10k">$5,000 - $10,000</option>
//                 <option value="10k-25k">$10,000 - $25,000</option>
//                 <option value="25k-50k">$25,000 - $50,000</option>
//                 <option value="over-50k">Over $50,000</option>
//               </select>
//             </div>
//             <div className="space-y-4">
//             <h3 className="text-[22px] font-semibold text-gray-800">Service You Are Deal In:</h3>
//             <div className="flex flex-wrap gap-6">
//               <label className="flex items-center space-x-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="serviceType"
//                   value="trekking"
//                   checked={formData.serviceType === "trekking"}
//                   onChange={handleInputChange}
//                   className="w-4 h-4 text-red-500 border-gray-300 "
//                 />
//                 <span className="  text-gray-500 font-semibold text-[17px]">Trekking</span>
//               </label>
//               <label className="flex items-center space-x-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="serviceType"
//                   value="safari"
//                   checked={formData.serviceType === "safari"}
//                   onChange={handleInputChange}
//                   className="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
//                 />
//                 <span className="  px-2 py-1 rounded  text-gray-500 font-semibold text-[17px]">Safari</span>
//               </label>
//               <label className="flex items-center space-x-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="serviceType"
//                   value="both"
//                   checked={formData.serviceType === "both"}
//                   onChange={handleInputChange}
//                   className="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
//                 />
//                 <span className=" text-gray-500 font-semibold text-[17px]">Both</span>
//               </label>
//             </div>
//           </div>
//           </div>
 
          
 
//           {/* Project Details Textarea */}
//           <div>
//             <textarea
//               name="projectDetails"
//               placeholder="Please give us as many details as possible about your project"
//               value={formData.projectDetails}
//               onChange={handleInputChange}
//               rows={8}
//               className="w-full px-4 py-4 border border-gray-300 rounded focus:outline-none   font-semibold placeholder-gray-400"
//             />
//           </div>
 
//           {/* Submit Button */}
//           <div className="flex justify-center mb-10">
//             <button
//               type="submit"
//               className="font-semibold mt-3 bg-red-500 hover:bg-gray-900 text-white hover:text-red-500 px-8 py-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//             >
//               {"Let's Grow Your Business"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }
"use client"

import React, { useState } from "react"

export default function Letscontact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    whatsapp: "",
    website: "",
    service: "",
    budget: "",
    serviceType: "trekking",
    projectDetails: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white py-[70px]">
      <div className="max-w-[1140px] mb-4 mx-auto md:text-[50px] text-[24px] px-4 text-center font-bold text-[#3467d8]">
        <h1>Tell Us More About Your Business To Get Started!</h1>
      </div>

      <div className="max-w-[1140px] mx-auto md:mt-8 px-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-4 border text-gray-500 font-semibold text-[17px] border-gray-300 rounded focus:outline-none placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-4 rounded focus:outline-none border border-gray-300 text-gray-500 font-semibold text-[17px] placeholder-gray-400"
            />
          </div>

          {/* Country Code, Phone, WhatsApp Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleInputChange}
              className="w-full px-4 py-4 border border-gray-300 text-gray-500 font-semibold text-[17px] rounded focus:outline-none placeholder-gray-400"
            >
              <option value="">Country Code</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+91">+91 (India)</option>
              <option value="+86">+86 (China)</option>
              <option value="+49">+49 (Germany)</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-4 rounded focus:outline-none border border-gray-300 text-gray-500 font-semibold text-[17px] placeholder-gray-400"
            />
            <input
              type="tel"
              name="whatsapp"
              placeholder="Whatsapp Number"
              value={formData.whatsapp}
              onChange={handleInputChange}
              className="w-full px-4 py-4 border border-gray-300 text-gray-500 font-semibold text-[17px] rounded focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* Website and Service Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <input
              type="url"
              name="website"
              placeholder="Your Website"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-4 py-4 rounded focus:outline-none border border-gray-300 text-gray-500 font-semibold text-[17px] placeholder-gray-400"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-4 rounded focus:outline-none border border-gray-300 text-gray-500 font-semibold text-[17px] placeholder-gray-400"
            >
              <option value="">Select Service</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-app">Mobile App Development</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="seo">SEO Services</option>
              <option value="consulting">Business Consulting</option>
            </select>
          </div>

          {/* Budget and Service Type */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <select
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-4 rounded focus:outline-none border border-gray-300 text-gray-500 font-semibold text-[17px] placeholder-gray-400"
            >
              <option value="">Your Budget</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="over-50k">Over $50,000</option>
            </select>

            <div className="space-y-4">
              <h3 className="text-[22px] font-semibold text-gray-800">
                Service You Are Deal In:
              </h3>
              <div className="flex flex-wrap gap-6">
                {["trekking", "safari", "both"].map((type) => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="serviceType"
                      value={type}
                      checked={formData.serviceType === type}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-red-500 border-gray-300"
                    />
                    <span className="text-gray-500 font-semibold text-[17px] capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <textarea
            name="projectDetails"
            placeholder="Please give us as many details as possible about your project"
            value={formData.projectDetails}
            onChange={handleInputChange}
            rows={8}
            className="w-full px-4 py-4 border border-gray-300 rounded focus:outline-none font-semibold placeholder-gray-400"
          />

          {/* Submit */}
          <div className="flex justify-center mb-10">
            <button
              type="submit"
              className="font-semibold mt-3 bg-red-500 hover:bg-gray-900 text-white hover:text-red-500 px-8 py-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              {"Let's Grow Your Business"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
