import React, { useState } from "react";
import { Link } from "react-router-dom";
import smplogo from "../assets/images/smp-logo.png";
import phonelogo from "../assets/images/phone-receiver.png";
{/* <Route path="/SubForm" element={<SubForm />} /> */}
 
import { IoMdArrowDropdown } from "react-icons/io";
import SubForm from "../pages/Webdesignmarketingafrica/SubForm";
 
export default function WebHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const [activeItem, setActiveItem] = useState(null);
 
  const mobiledropdownLinks = {
    about: [
      { label: "Our Company", href: "/about-us" },
      { label: "Our Team", href: "/team" },
      { label: "Reviews", href: "/reviews" },
    ],
    services: [
      { label: "Web Designing", href: "/web-designing" },
      { label: "Organic Marketing", href: "/organic-marketing" },
      { label: "Google Ads", href: "/google-ads" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "EBooks", href: "/ebook" },
    ],
  };
 
  const MobileDropdown = ({ title, id }) => {
    const isActive = activeItem === id;
    return (
      <details
        className="group"
        open={isActive}
        onClick={() => setActiveItem(id)}
      >
        <summary className="flex justify-between items-center px-4 py-3 border-b border-gray-300 text-white cursor-pointer uppercase font-semibold w-full bg-[#FF5254]">
          {title}
          <IoMdArrowDropdown className="text-xl transition-transform group-open:rotate-180" />
        </summary>
        <div className="flex flex-col bg-[#02152c] w-full">
          {mobiledropdownLinks[id].map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-[14px] font-semibold px-5 py-3 hover:text-yellow-300 uppercase border-b border-gray-300 w-full"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </details>
    );
  };
 
  return (
    <div className="relative z-50 w-full bg-transparent ">
      <nav className="bg-[#3D72C2F2]">
        <div className="max-w-[1170px] mx-auto py-[10px] ">
          <div className="flex justify-between items-center px-[15px]">
            <Link to="/">
              <img
                src={smplogo}
                alt="Logo"
                className="h-auto max-h-[50px] w-[100px] sm:w-[120px] md:w-[130px] lg:w-[158px] filter invert brightness-0"
              />
            </Link>
 
            <div className="hidden md:flex text-white items-center cursor-pointer hover:text-[#ff5254]">
              <button
                         
                          className="font-[Montserrat]
    bg-[#ff5254] border border-[#ff5254] hover:text-[#ff5254]  hover:border-black text-white px-[30px] py-[12px] relative  rounded-[4px]
    z-0 overflow-hidden text-[16px] tracking-[0] font-semibold capitalize no-underline float-none outline-none  w-fit m-0 hover:bg-black" >
                          REQUEST A FREE STRATEGY SESSION
                        </button>
            </div>
 
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="bg-[#ff5254] p-2 rounded"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
 
          <div className="max-w-[1155px] h-[1.5px] bg-gradient-to-r from-white/0 to-white opacity-25 mt-2" />
 
          {/* Sliding mobile menu */}
          <div
            className={`fixed top-14 left-0 h-full w-[100%] sm:w-[300px] bg-[#447acc]  z-50 shadow-md transform transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden`}
          >
            <div className="flex flex-col w-full  text-[14px]  font-[600]">
              <MobileDropdown title="ABOUT US" id="about" />
              <MobileDropdown title="SERVICES" id="services" />
 
              {[
                { label: "PRICING", id: "pricing", href: "/pricing" },
                { label: "OUR CLIENTS", id: "clients", href: "/our-clients" },
                { label: "TRAINING", id: "training", href: "/training" },
              ].map((link) => (
                <Link
                  key={link.id}
                  to={link.href}
                  onClick={() => {
                    setActiveItem(link.id);
                    setMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 text-white font-semibold uppercase border-b border-gray-300 bg-[#FF5254]"
                >
                  {link.label}
                </Link>
              ))}
 
              <MobileDropdown title="RESOURCES" id="resources" />
 
              <div className="p-4 text-center">
                <Link
  to="/subform"
  onClick={() => {
    setMenuOpen(false);
  }}
  className="sm:w-full px-[15px] bg-[#FF5254] text-white sm:py-3 py-[10px] sm:text-[17px] text-[14px] rounded hover:bg-black hover:text-[#FF5254] transition block text-center"
>
  REQUEST A FREE STRATEGY SESSION
</Link>
 
 
                <div className="px-[15px] pb-6 pt-4 text-center">
                  <div className="flex text-white items-center justify-center cursor-pointer hover:text-[#ff5254]">
                    <img
                      src={phonelogo}
                      alt="Phone"
                      className="w-auto h-6 mr-2 filter invert brightness-0"
                    />
                    <p
                      style={{ fontFamily: "Lato, sans-serif" }}
                      className="text-[18px] font-[600] leading-inherit "
                    >
                      +91 6371 223 581
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
 
      {/* Modal Request Form */}
     
    </div>
  );
}