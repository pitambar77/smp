// import React, { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import axios from "axios";

// const ContactusForm = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     countryCode: "",
//     phone: "",
//     message: "",
//   });
//   const [captchaToken, setCaptchaToken] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!captchaToken) {
//       alert("Please verify reCAPTCHA");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "https://smp-backend-production.up.railway.app/api/contactus-form",
//         {
//           ...form,
//           captchaToken,
//         }
//       );
//       alert(res.data.message);
//       setForm({ name: "", email: "", countryCode: "", phone: "", message: "" });
//       setCaptchaToken("");
//     } catch (err) {
//       alert(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="space-y-4 text-gray-500 ">
//         <div>
//           <input
//             placeholder="Your Name"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             className=" w-full px-4 py-3 border text-gray-500 border-gray-300  font-semibold text-[17px] hover:border-red-500 rounded-[1px] focus:outline-none  focus:ring-red-500"
//             required
//           />
//         </div>

//         <div>
//           <input
//             name="email"
//             placeholder="Your Email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border  border-gray-300  font-semibold text-[17px] hover:border-red-500  rounded-[1px] focus:outline-none  focus:ring-red-500"
//             required
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <select
//               name="countryCode"
//               value={form.countryCode}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 text-gray-500 font-semibold text-[17px] hover:border-red-500 rounded-[1px] focus:outline-none  focus:ring-red-500"
//               required
//             >
//               <option value="">Country Code</option>
//               <option value="+1">+1 (US)</option>
//               <option value="+44">+44 (UK)</option>
//               <option value="+91">+91 (India)</option>
//               <option value="+61">+61 (Australia)</option>
//               <option value="+86">+86 (China)</option>
//             </select>
//           </div>
//           <div>
//             <input
              
//               name="phone"
//               placeholder="Your Phone Number"
//               value={form.phone}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border  border-gray-300 font-semibold text-[17px] hover:border-red-500  rounded-[1px] focus:outline-none  focus:ring-red-500"
//               required
//             />
//           </div>
//         </div>

//         <div>
//           <textarea
//             name="message"
//             placeholder="Write Your Message"
//             value={form.message}
//             onChange={handleChange}
//             rows={6}
//             className="w-full px-4 py-3 border  border-gray-300  font-semibold text-[17px] hover:border-red-500  rounded-[1px] focus:outline-none  focus:ring-red-500"
//             required
//           ></textarea>
//         </div>

//         <div className="mt-5 flex flex-col gap-[10px]">
//           <ReCAPTCHA
//             sitekey="6Lf2glwrAAAAAPsuvFIyVh24DbavfwihlL8CU2-Z"
//             onChange={(token) => setCaptchaToken(token)}
//           />
//           <button className="bg-[#ff5254] mt-4 uppercase  cursor-pointer border border-[#ff5254] hover:bg-[#011833] hover:border-[#011833] duration-500 ease-in-out hover:text-[#ff5254] text-white px-[30px] py-3 rounded-[4px] font-semibold">
//             Send Message
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactusForm;

//--------------------------------------------------responsive------------------------------------

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
 
const ContactusForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState("");
 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please verify reCAPTCHA");
      return;
    }
 
    try {
      const res = await axios.post(
        "https://smp-backend-production.up.railway.app/api/contactus-form",
        {
          ...form,
          captchaToken,
        }
      );
      alert(res.data.message);
      setForm({ name: "", email: "", countryCode: "", phone: "", message: "" });
      setCaptchaToken("");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 text-gray-500 ">
        <div>
          <input
            placeholder="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className=" w-full px-4 py-3 border text-gray-500 border-gray-300  font-semibold text-[14px] md:text-[17px] hover:border-red-500 rounded-[1px] focus:outline-none  focus:ring-red-500"
            required
          />
        </div>
 
        <div>
          <input
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border  border-gray-300  font-semibold text-[14px] md:text-[17px] hover:border-red-500  rounded-[1px] focus:outline-none  focus:ring-red-500"
            required
          />
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <select
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 text-gray-500 font-semibold text-[14px] md:text-[17px] hover:border-red-500 rounded-[1px] focus:outline-none  focus:ring-red-500"
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
             
              name="phone"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border  border-gray-300 font-semibold text-[14px] md:text-[17px] hover:border-red-500  rounded-[1px] focus:outline-none  focus:ring-red-500"
              required
            />
          </div>
        </div>
 
        <div>
          <textarea
            name="message"
            placeholder="Write Your Message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 border  border-gray-300  font-semibold text-[14px] md:text-[17px] hover:border-red-500  rounded-[1px] focus:outline-none  focus:ring-red-500"
            required
          ></textarea>
        </div>
 
        <div className="mt-5 flex flex-col gap-[10px]">
          <ReCAPTCHA
            sitekey="6Lf2glwrAAAAAPsuvFIyVh24DbavfwihlL8CU2-Z"
            onChange={(token) => setCaptchaToken(token)}
          />
          <button className="bg-[#ff5254] text-[14px] md:text-[16px] mt-4 uppercase  cursor-pointer border border-[#ff5254] hover:bg-[#011833] hover:border-[#011833] duration-500 ease-in-out hover:text-[#ff5254] text-white md:px-[30px] md:py-3  py-2 rounded-[4px] font-semibold">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
 
export default ContactusForm;
 