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



import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Navbar from "./Navbar";
import smplogo from '../assets/images/smp-logo.png'
import { Link, useNavigate } from "react-router-dom";

export default function HeaderContainer() {

    const navigate = useNavigate()


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
            className="fixed top-0 left-0 w-full z-[999] bg-[#0057ff]  shadow-[0_1px_7px_0_rgba(0,0,0,0.4)] py-[15px]"
          >
           <div className=" max-w-[1140px] mx-auto">
                <div className=" flex justify-between items-center">
                    <button className=" cursor-pointer"
                        onClick={() => {navigate('/');window.scrollTo(0, 0); }}>
                         <img src={smplogo} alt="smp logo"  className=" w-24 filter invert brightness-0"/>
                       
                       
                    </button>
                    <div className="">
                        <Header/>
                    </div>
                </div>
           </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
