import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdownLinks = {
    about: [
      { label: 'Our Company', href: '/about-us' },
      { label: 'Our Team', href: '/team' },
      { label: 'Reviews', href: '/review' },
    ],
    services: [
      { label: '360 Marketing', href: '/360-marketing' },
      { label: 'Web Designing', href: '/web-designing' },
      { label: 'Organic Marketing', href: '/organic-marketing' },
      { label: 'Google Ads', href: '/google-ads' },
      { label: 'Content Marketing', href: '/content-marketing' },
      { label: 'Social Media Marketing', href: '/social-media-marketing' },
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'EBook', href: '/ebook' },
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
        className={`flex items-center ${isBold ? 'font-semibold' : 'font-semibold'}
          text-white group-hover:text-red-400 transition-colors py-[15px] px-[5px] text-[15px]`}
      >
        <p className="flex items-center gap-2">
          {label}
          <i
            className={`fa-solid fa-sort-down text-[14px] transition-transform duration-200 ${
              openDropdown === id ? 'rotate-180' : ''
            } group-hover:text-red-400 pt-[2px] pb-2`}
          ></i>
        </p>
      </Link>

      {openDropdown === id && (
        <div
          className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-md w-50 z-50 text-sm text-gray-700"
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
      <Navbar />
      <nav className="bg-[rgba(61,114,194,0.95)] m-0 px-8 pt-0 pr-5">
        <div className="mx-[125px] px-8">
          <div className="flex justify-between items-center h-13 text-[16px] tracking-[0.2px]">
            <div className="flex items-center space-x-8 text-[16px]">
              {navItemWithDropdown('ABOUT US', 'about', true)}
              {navItemWithDropdown('SERVICES', 'services')}
              <Link
                to="/pricing"
                className="text-white hover:text-red-400 font-semibold tracking-[0.2px] text-[16px]"
              >
                PRICING
              </Link>
              <Link
                to="/clients"
                className="text-white hover:text-red-400 font-semibold tracking-[0.2px] text-[16px]"
              >
                OUR CLIENTS
              </Link>
              <Link
                to="/training"
                className="text-white hover:text-red-400 font-semibold tracking-[0.2px] text-[16px]"
              >
                TRAINING
              </Link>
              {navItemWithDropdown('RESOURCES', 'resources')}
            </div>
            <div className="px-[10px] py-[10px] text-[16px]">
              <Link to="/signup">
                <button className="bg-[#FF5254] text-white text-[16px] hover:bg-black hover:text-red-500 transition-colors font-semibold duration-300 min-w-[148px] rounded-r-md p-3">
                  <strong>REQUEST A FREE STRATEGY SESSION</strong>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
