// import React, { useEffect, useRef, useState } from "react";
// import Header from "./Header";
// import Navbar from "./Navbar";

// export default function HeaderContainer() {
//   const headerRef = useRef(null);
//   const [showSticky, setShowSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!headerRef.current) return;
//       const headerHeight = headerRef.current.getBoundingClientRect().height;
//       const scrollTop = window.scrollY;

//       // Show sticky Navbar when user scrolls past Header
//       if (scrollTop > headerHeight) {
//         setShowSticky(true);
//       } else {
//         setShowSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Original full header */}
//       <div ref={headerRef}>
//         <Header />
//       </div>

//       {/* Backdrop header */}
//       {showSticky && (
//         <div  className={`fixed top-0 left-0 w-full z-[999] transition-all duration-[1000ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform bg-white/90 backdrop-blur-md shadow-md ${
//     showSticky ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
//   }`}>
//           <Navbar />
//         </div>
//       )}
//     </>
//   );
// }

// import React, { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Header from "./Header";
// import Navbar from "./Navbar";
// import smplogo from "../assets/images/smp-logo.png";
// import { Link, useNavigate } from "react-router-dom";

// export default function HeaderContainer() {
//   const navigate = useNavigate();

//   const headerRef = useRef(null);
//   const [showSticky, setShowSticky] = useState(false);
//   const ticking = useRef(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!headerRef.current) return;
//       if (!ticking.current) {
//         window.requestAnimationFrame(() => {
//           const headerHeight = headerRef.current.getBoundingClientRect().height;
//           const scrollTop = window.scrollY;

//           setShowSticky(scrollTop > headerHeight);
//           ticking.current = false;
//         });
//         ticking.current = true;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Framer Motion variants for smooth spring animation and delay
//   const variants = {
//     hidden: { opacity: 0, y: -20, pointerEvents: "none" },
//     visible: {
//       opacity: 1,
//       y: 0,
//       pointerEvents: "auto",
//       transition: {
//         type: "spring",
//         stiffness: 60,
//         damping: 18,
//         delay: 0.15,
//       },
//     },
//   };

//   return (
//     <>
//       {/* Original full header */}
//       <div ref={headerRef}>
//         <Header />
//       </div>

//       {/* Backdrop header with framer-motion */}
//       <AnimatePresence>
//         {showSticky && (
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             variants={variants}
//             className="fixed top-0 left-0 w-full z-[999] bg-[#0057ff]  shadow-[0_1px_7px_0_rgba(0,0,0,0.4)] py-[13px]"
//           >
//             <div className=" max-w-[1140px] mx-auto">
//               <div className=" flex justify-between items-center">
//                 <button
//                   className=" cursor-pointer"
//                   onClick={() => {
//                     navigate("/");
//                     window.scrollTo(0, 0);
//                   }}
//                 >
//                   <img
//                     src={smplogo}
//                     alt="smp logo"
//                     className=" w-[92px]  filter invert brightness-0"
//                   />
//                 </button>
//                 <div className="">
//                   <Header />
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
// ----------------------------------------------------------------------------------------responsive--------------------
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Navbar from "./Navbar";
import smplogo from "../assets/images/smp-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import RequestForm from "./RequestForm";

export default function HeaderContainer() {
  const navigate = useNavigate();

  const headerRef = useRef(null);
  const [showSticky, setShowSticky] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const headerHeight = headerRef.current.getBoundingClientRect().height;
          const scrollTop = window.scrollY;

          setShowSticky(scrollTop > headerHeight);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion variants for smooth spring animation and delay
  const variants = {
    hidden: { opacity: 0, y: -20, pointerEvents: "none" },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
        delay: 0.15,
      },
    },
  };
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const dropdownLinks = {
    about: [
      { label: "Our Company", href: "/about-us" },
      { label: "Our Team", href: "/team" },
      { label: "Reviews", href: "/review" },
    ],
    services: [
      { label: "360 Marketing", href: "/" },
      { label: "Web Designing", href: "/web-designing" },
      { label: "Organic Marketing", href: "/organic-marketing" },
      { label: "Google Ads", href: "/google-ads" },
      { label: "Content Marketing", href: "/content-marketing" },
      { label: "Social Media Marketing", href: "/social-media-marketing" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "EBooks", href: "/ebook" },
    ],
  };

  const navItemWithDropdown = (label, id, isBold = false) => (
    <div
      className="relative group"
      onMouseEnter={() => setOpenDropdown(id)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <Link
        to={`#${id}`}
        className={`flex items-center ${
          isBold ? "font-semibold" : "font-semibold"
        }
            text-white group-hover:text-red-400 transition-all duration-500 ease-out py-[15px]  text-[13px] md:text-[10px] lg:text-[12px] xl:text-[15px]`}
      >
        <p className="flex items-center">
          {label}
          <IoMdArrowDropdown
            className={`text-[14px] md:text-[18px] xl:text-[24px] transition-all duration-500 ease-out ${
              openDropdown === id ? "rotate-180" : ""
            } group-hover:text-red-400`}
          />
        </p>
      </Link>

      {openDropdown === id && (
        <div
          className="absolute top-full left-0 bg-white shadow-lg rounded-md w-50 z-50 text-sm text-gray-700"
          onMouseEnter={() => setOpenDropdown(id)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <div className="flex flex-col py-4">
            {dropdownLinks[id].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="p-3 text-[rgba(61,114,194,0.95)] font-bold font-segoe text-center uppercase hover:text-amber-400 hover:bg-gray-100 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Original full header */}
      <div ref={headerRef}>
        <Header />
      </div>

      {/* Backdrop header with framer-motion */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            className="fixed top-0 left-0 w-full z-[999] bg-[#0057ff]  shadow-[0_1px_7px_0_rgba(0,0,0,0.4)] py-[13px]"
          >
            <div className=" max-w-[1140px] mx-auto md:px-2 xl:px-0">
              <div className=" flex justify-between items-center">
                <button
                  className=" cursor-pointer"
                  onClick={() => {
                    navigate("/");
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    src={smplogo}
                    alt="smp logo"
                    className=" xl:w-[92px] w-[85px] lg:w-[120px] filter invert brightness-0"
                  />
                </button>
                <div className="">
                  <nav className="hidden md:block bg-transparent relative z-50 pt-1 m-0">
                    <div className="max-w-[1140px] mx-auto pl-1 ">
                      <div
                        className="flex justify-between items-center xl:px-0 lg:px-2 md:px-2 h-[52px] gap-2 text-[13px] md:text-[10px] lg:text-[15px] text-white font-[600] w-full transition-all duration-500 ease-out"
                        style={{ letterSpacing: "0.2px" }}
                      >
                        {navItemWithDropdown("ABOUT US", "about", true)}
                        {navItemWithDropdown("SERVICES", "services")}
                        <Link
                          to="/pricing"
                          className="text-[13px] md:text-[10px] lg:text-[12px] xl:text-[15px] hover:text-red-400 transition-all duration-500 ease-out"
                        >
                          PRICING
                        </Link>
                        <Link
                          to="/our-clients"
                          className="text-[13px] md:text-[10px] lg:text-[12px] xl:text-[15px] hover:text-red-400 transition-all duration-500 ease-out"
                        >
                          OUR CLIENTS
                        </Link>
                        <Link
                          to="/training"
                          className="text-[13px] md:text-[10px] lg:text-[12px] xl:text-[15px] hover:text-red-400 transition-all duration-500 ease-out"
                        >
                          TRAINING
                        </Link>
                        {navItemWithDropdown("RESOURCES", "resources")}

                        <button
                          onClick={() => setShowForm(true)}
                          className="bg-[#FF5254] text-white cursor-pointer text-[13px] md:text-[10px] lg:text-[15px] font-semibold hover:bg-black hover:text-red-500 transition-all
                                duration-500 ease-out py-[10px] sm:py-[10px] lg:py-[15px] px-[6px] sm:px-[8px] lg:px-[20px] rounded-[4px]"
                        >
                          REQUEST A FREE STRATEGY SESSION
                        </button>
                      </div>
                    </div>

                    {/* Modal */}
                    {showForm && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat]">
                        <div className="relative w-[90%] max-w-[600px] bg-gradient-to-b from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg animate-slide-down-fade">
                          <button
                            onClick={() => setShowForm(false)}
                            className="absolute cursor-pointer -top-6 -right-5 bg-red-400 hover:bg-[#396bb1] text-white hover:text-red-400 font-bold text-[32px] w-10 h-10 flex items-center justify-center shadow-md"
                          >
                            ×
                          </button>
                          <div className="text-white text-center md:py-8 py-2 -mt-5 rounded-t-lg">
                            <h3 className="text-[24px] font-medium leading-snug">
                              REQUEST A FREE STRATEGY SESSION
                            </h3>
                            <div className="border-t border-white w-full mx-auto mt-4 -mb-4" />
                          </div>

                          <RequestForm />
                        </div>
                      </div>
                    )}
                  </nav>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
