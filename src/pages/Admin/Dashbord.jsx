 import React, { useState } from "react";
import { pages } from '../../data/pages'
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Dashbord({ selected, onSelect }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (page) => {
    setOpenDropdown(openDropdown === page ? null : page);
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-full px-4">
      <div className=' px-20 py-10 '>
                <img src="https://wanderwave-ng-blog.netlify.app/assets/adminLog-UUbddI60.png" alt=" admin image" className=' size-14 items-center'/>
                <p className=' font-semibold '>Admin</p>
            </div>
      {Object.entries(pages).map(([page, subPages]) => (
        <div key={page} className="mb-2">
          {Array.isArray(subPages) ? (
            <>
              <div
                className="flex justify-between items-center cursor-pointer hover:text-blue-400"
                onClick={() => toggleDropdown(page)}
              >
                <h2 className=" font-semibold text-[16px] ">{page}</h2>
                {openDropdown === page ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              </div>
              {openDropdown === page && (
                <ul className="ml-4 mt-2">
                  {subPages.map((sub) => (
                    <li
                      key={sub}
                      onClick={() => onSelect(sub)}
                      className={`cursor-pointer mt-1 text-sm hover:text-blue-300 ${
                        selected === sub ? "text-blue-400 font-semibold" : ""
                      }`}
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <div
              onClick={() => onSelect(page)}
              className={`cursor-pointer font-semibold text-[16px] hover:text-blue-400 ${
                selected === page ? "text-blue-400" : ""
              }`}
            >
              {page}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}