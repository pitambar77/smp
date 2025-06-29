// import React, { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import axios from "axios";
// import { CountryCodes } from "../data/CountryCodes";

// export default function GetFreeQuoteForm() {
//   const [form, setForm] = useState({
//     firstName: "",
//     email: "",
//     countryCode: "",
//     phone: "",
//     website: "",
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
//         "https://smp-backend-production.up.railway.app/api/form-contact",
//         {
//           ...form,
//           captchaToken,
//         }
//       );
//       alert(res.data.message);
//       setForm({
//         firstName: "",
//         email: "",
//         countryCode: "",
//         phone: "",
//         website: "",
//       });
//       setCaptchaToken("");
//     } catch (err) {
//       alert(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <form className="p-6 space-y-4" onSubmit={handleSubmit}>
//       <div className="grid grid-cols-2 gap-[10px]">
//         <input
//           name="firstName"
//           value={form.firstName}
//           onChange={handleChange}
//           placeholder="First Name*"
//           className="p-4 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
//           required
//         />
//         <input
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Email Address*"
//           className="p-4 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
//           required
//           type="email"
//         />
//         {/* <select
//           name="countryCode"
//           value={form.countryCode}
//           onChange={handleChange}
//           className="p-4 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
//           required
//         >
//           <option value="">Country Code</option>
//           <option value="+91">+91 (India)</option>
//           <option value="+1">+1 (USA)</option>
//         </select>
//         <input
//           name="phone"
//           value={form.phone}
//           onChange={handleChange}
//           placeholder="Phone*"
//           className="p-4 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
//           required
//         /> */}
//         <div className="relative">
//   <select
//     name="countryCode"
//     value={form.countryCode}
//     onChange={handleChange}
//     className="p-2 md:p-4 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
//     required
//   >
//     <option value="">Country Code</option>
//     {CountryCodes.map(({ code, label }) => (
//       <option key={code} value={code}>
//         {code} ({label})
//       </option>
//     ))}
//   </select>
// </div>

//   <input
//     name="phone"
//     value={form.phone}
//     onChange={handleChange}
//     placeholder="Phone*"
//     className="p-2 md:p-4 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
//     required
//   />

//         <input
//           name="website"
//           value={form.website}
//           onChange={handleChange}
//           placeholder="Website*"
//           className="col-span-2 p-4 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
//           required
//         />
//       </div>

//       <div className="mt-5 flex flex-col gap-[10px]">
//         <ReCAPTCHA
//           sitekey="6Lf2glwrAAAAAPsuvFIyVh24DbavfwihlL8CU2-Z"
//           onChange={(token) => setCaptchaToken(token)}
//         />
//         <button className="bg-[#ff5254] h-[60px] cursor-pointer border border-[#ff5254] hover:bg-[#011833] hover:border-[#011833] duration-500 ease-in-out hover:text-[#ff5254] text-white px-6 py-3 rounded font-semibold">
//           GET MY FREE QUOTE
//         </button>
//       </div>
//     </form>
//   );
// }

// // import React, { useState } from 'react';
// // import ReCAPTCHA from 'react-google-recaptcha';
// // import axios from 'axios';
// // import PhoneInput from 'react-phone-input-2';
// // import 'react-phone-input-2/lib/style.css';

// // export default function GetFreeQuoteForm() {
// //   const [form, setForm] = useState({
// //     firstName: '',
// //     email: '',
// //     countryCode: '',
// //     phone: '',
// //     website: '',
// //   });
// //   const [captchaToken, setCaptchaToken] = useState('');

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!captchaToken) {
// //       alert('Please verify reCAPTCHA');
// //       return;
// //     }

// //     try {
// //       const res = await axios.post('https://smp-backend-production.up.railway.app/api/form-contact', {
// //         ...form,
// //         captchaToken,
// //       });
// //       alert(res.data.message);
// //       setForm({ firstName: '', email: '', countryCode: '', phone: '', website: '' });
// //       setCaptchaToken('');
// //     } catch (err) {
// //       alert(err.response?.data?.message || 'Something went wrong');
// //     }
// //   };

// //   return (
// //     <form className="p-6 space-y-4" onSubmit={handleSubmit}>
// //       <div className="grid grid-cols-2 gap-[10px]">
// //         <input
// //           name="firstName"
// //           value={form.firstName}
// //           onChange={handleChange}
// //           placeholder="First Name*"
// //           className="p-4 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
// //           required
// //         />
// //         <input
// //           name="email"
// //           value={form.email}
// //           onChange={handleChange}
// //           placeholder="Email Address*"
// //           className="p-4 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
// //           required
// //           type="email"
// //         />

// //         {/* PhoneInput replaces select + phone input */}
// //         <div className="col-span-2">
// //           <PhoneInput
// //             country={'us'} // default country
// //             value={form.phone}
// //             onChange={(phone, countryData) =>
// //               setForm({
// //                 ...form,
// //                 phone,
// //                 countryCode: `+${countryData.dialCode}`,
// //               })
// //             }
// //             inputClass="!w-full !p-4 !text-sm !border !rounded !border-gray-300"
// //             containerClass="!w-full"
// //             enableSearch
// //           />
// //         </div>

// //         <input
// //           name="website"
// //           value={form.website}
// //           onChange={handleChange}
// //           placeholder="Website*"
// //           className="col-span-2 p-4 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
// //           required
// //         />
// //       </div>

// //       <div className="mt-5 flex flex-col gap-[10px]">
// //         <ReCAPTCHA
// //           sitekey="6Lf2glwrAAAAAPsuvFIyVh24DbavfwihlL8CU2-Z"
// //           onChange={(token) => setCaptchaToken(token)}
// //         />
// //         <button className="bg-[#ff5254] h-[60px] cursor-pointer border border-[#ff5254] hover:bg-[#011833] hover:border-[#011833] duration-500 ease-in-out hover:text-[#ff5254] text-white px-6 py-3 rounded font-semibold">
// //           GET MY FREE QUOTE
// //         </button>
// //       </div>
// //     </form>
// //   );
// // }

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { CountryCodes } from "../data/CountryCodes";

export default function GetFreeQuoteForm() {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    countryCode: "",
    phone: "",
    website: "",
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
        "https://smp-backend-production.up.railway.app/api/form-contact",
        {
          ...form,
          captchaToken,
        }
      );
      alert(res.data.message);
      setForm({
        firstName: "",
        email: "",
        countryCode: "",
        phone: "",
        website: "",
      });
      setCaptchaToken("");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form className="md:p-6 p-2 mt-2 md:mt-0 space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First Name*"
          className="md:p-4 p-2 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address*"
          className="md:p-4 p-2 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
          required
          type="email"
        />
        {/* <select
      name="countryCode"
      value={form.countryCode}
      onChange={handleChange}
      className="md:p-4 p-2 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
      required
    >
      <option value="">Country Code</option>
      <option value="+91">+91 (India)</option>
      <option value="+1">+1 (USA)</option>
    </select>
    <input
      name="phone"
      value={form.phone}
      onChange={handleChange}
      placeholder="Phone*"
      className="md:p-4 p-2 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
      required
    /> */}

        <div className="relative">
          <select
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
            className="p-2 md:p-4 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
            required
          >
            <option value="">Country Code</option>
            {CountryCodes.map(({ code, label }) => (
              <option key={code} value={code}>
                {code} ({label})
              </option>
            ))}
          </select>
        </div>

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone*"
          className="p-2 md:p-4 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white"
          required
        />

        <input
          name="website"
          value={form.website}
          onChange={handleChange}
          placeholder="Website*"
          className="md:p-4 p-2 rounded w-full border border-gray-300 focus:border-red-400 focus:outline-none bg-white md:col-span-2"
          required
        />
      </div>

      <div className="mt-5 flex mb-5 sm:mb-0 flex-col gap-[10px]">
        <ReCAPTCHA
          sitekey="6Lf2glwrAAAAAPsuvFIyVh24DbavfwihlL8CU2-Z"
          onChange={(token) => setCaptchaToken(token)}
        />
        <button className="bg-[#ff5254] h-[60px] cursor-pointer border border-[#ff5254] hover:bg-[#011833] hover:border-[#011833] duration-500 ease-in-out hover:text-[#ff5254] text-white px-6 py-3  rounded font-semibold">
          GET MY FREE QUOTE
        </button>
      </div>
    </form>
  );
}
