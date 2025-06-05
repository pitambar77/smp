"use client"
 
import { useState } from "react"
import { MapPin, Phone, Youtube } from "lucide-react";
 
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
 
 
 
 
 
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    message: "",
    notRobot: false,
  })
 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }
 
  return (
    <div className="max-w-[1210px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Location Card */}
        <div className="bg-white rounded shadow-[0px_8px_40px_-5px_rgb(9_31_67_/_10%)] p-8 flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="w-18 h-14 rounded-full flex text-start ">
              <img
                src="https://safarimarketingpro.com/images/olpnea-icn-1.png"
                alt="Map Pin"
                className="w-32 h-18 "
              />
            </div>
          </div>
 
          <div>
            <h3 className="text-[20px] text-left font-semibold capitalize text-[#011833] leading-[inherit]   pb-[10px] font-montserrat">
              Our Location
            </h3>
            <p className="text-[17px] font-medium leading-[inherit] font-montserrat text-[#787878] text-left">
 
              Plot No- 26.1996/2231,
              <br />
              Arundhati Resident, B2,
              <br />
              Patrapada, 751019
            </p>
          </div>
        </div>
 
        {/* Phone Card */}
        <div className="bg-white rounded-lg shadow-[0px_8px_40px_-5px_rgb(9_31_67_/_10%)] p-6 flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="w-18 h-14 rounded-full flex items-center justify-center">
              <img
                src="https://safarimarketingpro.com/images/olpnea-icn-2.png"
                alt="Map Pin"
                className="w-32 h-18 "
              />            </div>
          </div>
          <div>
            <h3 className="text-[20px] text-left font-semibold capitalize text-[#011833] leading-[inherit]   pb-[10px] font-montserrat">
              Phone Number</h3>
            <p className="text-[17px] font-medium leading-[inherit] font-montserrat text-[#787878] text-left p-0 m-0">
              +91-6371-223-581</p>
          </div>
        </div>
 
        {/* Email Card */}
        <div className="bg-white rounded shadow-[0px_8px_40px_-5px_rgb(9_31_67_/_10%)] p-6 flex justify-center flex-col">
          <h3 className="text-[20px] text-left font-semibold capitalize text-[#011833] leading-[inherit]   pb-[10px] font-montserrat">
            Email Address</h3>
          <p className="text-[17px] font-medium leading-[inherit] font-montserrat text-[#787878] text-left p-0 m-0">
            sales@manoramaseoservice.com</p>
        </div>
      </div>
 
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Form */}
        <div>
          <h2 className="text-[30px] font-semibold text-[#011833] capitalize leading-[inherit] mt-6 pb-[50px] font-montserrat">
            Find Out How We Can Accelerate Your Booking Flow Online
          </h2>
 
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-[240px] px-4 py-3 border border-gray-300  font-semibold text-[17px] hover:border-red-500 rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                required
              />
            </div>
 
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-[240px] px-4 py-3 border  border-gray-300  font-semibold text-[17px] hover:border-red-500  rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                required
              />
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 text-gray-500 font-semibold text-[17px] hover:border-red-500 rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                  required
                >
                  <option value="">Country Code</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+91">+91 (India)</option>
                  <option value="+61">+61 (Australia)</option>
                  <option value="+86">+86 (China)</option>
                </select>
              </div>
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Your Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border  border-gray-300 font-semibold text-[17px] hover:border-red-500  rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                  required
                />
              </div>
            </div>
 
            <div>
              <textarea
                name="message"
                placeholder="Write Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-[570px] px-4 py-3 border  border-gray-300  font-semibold text-[17px] hover:border-red-500  rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                required
              ></textarea>
            </div>
 
            <div className="flex w-[350px]  items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-6 mt-2 shadow-sm space-x-3">
              <input
                type="checkbox"
                name="notRobot"
                id="notRobot"
                checked={formData.notRobot}
                onChange={handleChange}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="notRobot" className="block text-sm text-gray-700 font-semibold select-none">
                I'm not a robot
              </label>
              <span className="ml-auto flex items-center space-x-1">
                {/* Google reCAPTCHA logo SVG */}
                <svg width="24" height="28" viewBox="0 0 24 24" fill="none">
                  <g>
                    <path d="M12 2C6.48 2 2 6.48 2 12h2a8 8 0 1 1 8 8v2c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="#4285F4" />
                    <path d="M21.74 13.06A9.98 9.98 0 0 1 12 22v-2a8 8 0 0 0 7.75-6.94l1.99.34z" fill="#34A853" />
                    <path d="M2.26 10.94A9.98 9.98 0 0 1 12 2v2a8 8 0 0 0-7.75 6.94l-1.99-.34z" fill="#FBBC05" />
                    <path d="M12 4a8 8 0 0 1 8 8h2c0-5.52-4.48-10-10-10v2z" fill="#EA4335" />
                  </g>
                </svg>
                <span className="text-xs text-gray-400 font-semibold">reCAPTCHA</span>
              </span>
            </div>
 
            <div>
              <button
                type="submit"
                className="w-full mt-6 mb-10 bg-[#ff2425] hover:bg-gray-900 text-white hover:text-red-600  font-medium py-3 px-5 rounded-md transition duration-300"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
 
        {/* Right Column - Social and Image */}
        <div>
          <h2 className="text-[30px] font-semibold text-[#011833] capitalize leading-[inherit]  pb-[10px] font-montserrat">Connect With Us</h2>
 
          <div className="flex space-x-4 mb-8">
            <a
              href="#"
              className="w-15 h-15 bg-[#75b6ff] rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition duration-300"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-15 h-15 bg-[#75b6ff] rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition duration-300"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-15 h-15 bg-[#75b6ff] rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition duration-300"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-15 h-15 bg-[#75b6ff] rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition duration-300"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
 
          <div className="mt-12">
            <img
              src="https://safarimarketingpro.com/images/contact-us-fig-1.jpg"
              alt="Customer service representative on phone"
              className="rounded shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}