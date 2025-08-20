// import React from 'react';

// import { Link } from "react-router-dom";

// function SubForm() {
//   return (
//     <div className="  bg-[#4779c5] flex flex-col items-center justify-center px-4 pt-[50px] pb-[155px]">
//       {/* Logo */}
//       <div className="mb-6">
//         <Link to="/">
//               <img
//                  src={`https://safarimarketingpro.com/images/smp-logo.png`}
//                 alt="Logo"
//                 className="h-auto max-h-[60px] w-[100px] sm:w-[120px] md:w-[130px] lg:w-[190px] filter invert brightness-0"
//               />
//             </Link>

//       </div>

//       {/* Heading */}
//       <div className="py-[30px">
//       <h2 className="text-[40px] text-white text-center pb-[5px] font-medium">
//         Let's Get to Know You
//       </h2>

//       {/* Subheading */}
//       <p className="mb-6 text-sm font-light text-center text-white mt-2 sm:text-[20px]">
//         Discover powerful marketing ideas to outshine your competition and grow faster.
//       </p>
// </div>
//       {/* Form */}
//       <form className="flex flex-col w-full max-w-[55%] gap-4 mt-2">
//         <input
//           type="text"
//           placeholder="First Name*"
//           className="w-full  text-gray-700 placeholder-gray-500 bg-white  focus:outline-none focus:ring-2 focus:ring-white relative p-[15px] mb-[15px] rounded-[10px] border-none outline-none font-[Montserrat]"
        

//         />
//         <input
//           type="email"
//           placeholder="Email*"
//           className="w-full  text-gray-700 placeholder-gray-500 bg-white  focus:outline-none focus:ring-2 focus:ring-white relative p-[15px] mb-[15px] rounded-[10px] border-none outline-none font-[Montserrat]"
//         />
//         <input
//           type="tel"
//           placeholder="Phone*"
//           className="w-full  text-gray-700 placeholder-gray-500 bg-white  focus:outline-none focus:ring-2 focus:ring-white relative p-[15px] mb-[15px] rounded-[10px] border-none outline-none font-[Montserrat]"
//         />

//         {/* Buttons */}
//        <div className="flex justify-center mt-3 space-x-18">
//   <button
//     type="button"
//     className="px-4 py-3 font-semibold text-white bg-[#ccc] rounded-md"
//   >
//     PREVIOUS
//   </button>
//   <button
//     type="submit"
//     className="px-4 py-3 font-semibold text-white transition bg-[#ff5254] rounded-md hover:bg-red-600"
//   >
//     NEXT
//   </button>
// </div>

//       </form>
//     </div>
//   );
// }

// export default SubForm;


// import axios from "axios";
// import { Link } from "react-router-dom";

// function SubForm() {
//   const [form, setForm] = useState({
//     firstName: "",
//     email: "",
//     phone: "",
//   });

//   const [captchaToken, setCaptchaToken] = useState("");

//   // Handle input changes
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Form submit with validation and captcha check
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!captchaToken) {
//       alert("Please verify reCAPTCHA");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "https://smp-backend-production.up.railway.app/api/sub-form",
//         {
//           ...form,
//           captchaToken,
//         }
//       );
//       alert(res.data.message);

//       // Reset form & captcha after success
//       setForm({
//         firstName: "",
//         email: "",
//         phone: "",
//       });
//       setCaptchaToken("");
//     } catch (err) {
//       alert(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="bg-[#4779c5] flex flex-col items-center justify-center px-4 pt-[50px] pb-[155px]">
//       {/* Logo */}
//       <div className="mb-6">
//         <Link to="/">
//           <img
//             src={`https://safarimarketingpro.com/images/smp-logo.png`}
//             alt="Logo"
//             className="h-auto max-h-[60px] w-[100px] sm:w-[120px] md:w-[130px] lg:w-[190px] filter invert brightness-0"
//           />
//         </Link>
//       </div>

//       {/* Heading */}
//       <div className="py-[30px]">
//         <h2 className="text-[40px] text-white text-center pb-[5px] font-medium">
//           Let's Get to Know You
//         </h2>

//         {/* Subheading */}
//         <p className="mb-6 text-sm font-light text-center text-white mt-2 sm:text-[20px]">
//           Discover powerful marketing ideas to outshine your competition and
//           grow faster.
//         </p>
//       </div>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col w-full max-w-[55%] gap-4 mt-2"
//       >
//         <input
//           name="firstName"
//           value={form.firstName}
//           onChange={handleChange}
//           type="text"
//           placeholder="First Name*"
//           className="w-full text-gray-700 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-white relative p-[15px] mb-[15px] rounded-[10px] border-none outline-none font-[Montserrat]"
//           required
//         />
//         <input
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           type="email"
//           placeholder="Email*"
//           className="w-full text-gray-700 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-white relative p-[15px] mb-[15px] rounded-[10px] border-none outline-none font-[Montserrat]"
//           required
//         />
//         <input
//           name="phone"
//           value={form.phone}
//           onChange={handleChange}
//           type="tel"
//           placeholder="Phone*"
//           className="w-full text-gray-700 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-white relative p-[15px] mb-[15px] rounded-[10px] border-none outline-none font-[Montserrat]"
//           required
//         />

//         {/* Buttons */}
//         <div className="flex justify-center mt-3 space-x-18">
//           <button
//             type="button"
//             className="px-4 py-3 font-semibold text-white bg-[#ccc] rounded-md"
//           >
//             PREVIOUS
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-3 font-semibold text-white transition bg-[#ff5254] rounded-md hover:bg-red-600"
//           >
//             NEXT
//           </button>
//         </div>

//         {/* reCAPTCHA */}
       
//       </form>
//     </div>
//   );
// }

// export default SubForm;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Step1 from './steps/Step1.jsx';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import Step6 from './steps/Step6';
import Step7 from './steps/Step7';

function SubForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    businessName: '',
    website: '',
    goals: '',
    service: '',
    timeline: '',
    notes: '',
    hasWebsite: '',
    inquirySources: [],
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updated = checked
        ? [...prev.inquirySources, value]
        : prev.inquirySources.filter((item) => item !== value);
      return { ...prev, inquirySources: updated };
    });
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
      if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    }

    if (step === 2) {
      if (!formData.hasWebsite) {
        newErrors.hasWebsite = 'Please select Yes or No';
      }
      if (formData.hasWebsite === 'yes' && !formData.website.trim()) {
        newErrors.website = 'Website URL is required';
      }
    }

    if (step === 3) {
      if (!formData.inquirySources.length) {
        newErrors.inquirySources = 'Please select at least one source';
      }
    }

    if (step === 4 && !formData.businessName.trim()) {
  newErrors.businessName = 'Please select your business type';
}


    if (step === 5 && !formData.service.trim()) {
      newErrors.service = 'Please enter your service type';
    }

    if (step === 6 && !formData.timeline.trim()) {
      newErrors.timeline = 'Please enter your project timeline';
    }

    if (step === 7 && !formData.notes.trim()) {
      newErrors.notes = 'Please enter your final notes';
    }

    return newErrors;
  };

  const handleNext = (e) => {
    e.preventDefault();
    const validationErrors = validateStep();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setStep((prev) => prev + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleBack = () => {
    setErrors({});
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateStep();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Submitted form data:', formData);
      navigate('/thank-you');
    } else {
      setErrors(validationErrors);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} onChange={handleChange} errors={errors} />;
      case 2:
        return <Step2 formData={formData} onChange={handleChange} errors={errors} />;
      case 3:
        return <Step3 formData={formData} onCheckboxChange={handleCheckboxChange} errors={errors} />;
      case 4:
        return <Step4 formData={formData} onChange={handleChange} errors={errors} />;
      case 5:
        return <Step5 formData={formData} onChange={handleChange} errors={errors} />;
      case 6:
        return <Step6 formData={formData} onChange={handleChange} errors={errors} />;
      case 7:
        return <Step7 formData={formData} onChange={handleChange} errors={errors} />;
      default:
        return null;
    }
  };

  const stepHeadings = {
    1: "Let's Get to Know You",
    2: 'Get a Free Custom Strategy',
    3: '',
    4: 'How would you best categorize your safari business?',
    5: 'Which of the following services are you interested in?',
    6: 'What is your target timeline for launching or relaunching your website?',
    7: 'Are you interested in expanding your reach through digital marketing ?',
  };

  const stepSubheadings = {
    1: 'Discover powerful marketing ideas to outshine your competition and grow faster.',
    2: 'Do you currently have an active website?',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
  };

  return (
    <div className="bg-[#4779c5] flex flex-col items-center justify-center px-4 pt-[60px] pb-[155px] min-h-screen">
      {/* Logo */}
      <div className="">
        <Link to="/">
          <img
            src="https://safarimarketingpro.com/images/smp-logo.png"
            alt="Logo"
            className="h-auto max-h-[60px] w-[100px] sm:w-[120px] md:w-[130px] lg:w-[190px] filter invert brightness-0"
          />
        </Link>
      </div>

      {/* Heading */}
      <div className="py-[30px] text-center  ">
        <h2 className="text-[40px] text-white text-center pb-[5px] font-medium">{stepHeadings[step]}</h2>
        {stepSubheadings[step] && (
          <p className="text-sm font-light text-center text-white mt-2 sm:text-[20px]">{stepSubheadings[step]}</p>
        )}
      </div>

      {/* Form Section */}
      <form
        className="flex flex-col w-full max-w-[55%] gap-4 mt-2"
        onSubmit={step === 7 ? handleSubmit : handleNext}
        noValidate
      >
        {renderStep()}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-3">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-3 font-semibold text-white bg-[#ccc] rounded-md"
            >
              BACK
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-3 font-semibold text-white bg-[#ff5254] rounded-md hover:bg-red-600"
          >
            {step === 7 ? 'SUBMIT' : 'NEXT'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SubForm;
