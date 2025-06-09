// src/components/Sidebar.jsx
//  import React, { useState } from "react";
// import { pages } from "../data/pages";
// import { ChevronDown, ChevronRight } from "lucide-react";

// export default function Sidebar({ selected, onSelect }) {
//   const [openDropdown, setOpenDropdown] = useState(null);



//   return (
//     <div className="w-64 bg-gray-800 text-white h-full px-4">
     
//       {Object.entries(pages).map(([page, subPages]) => (
//         <div key={page} className="mb-2">
//           {Array.isArray(subPages) ? (
//             <>
//               <div
//                 className="flex justify-between items-center cursor-pointer hover:text-blue-400"
//                 onClick={() => toggleDropdown(page)}
//               >
//                 <h2 className=" font-semibold text-[16px] ">{page}</h2>
//                 {openDropdown === page ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
//               </div>
//               {openDropdown === page && (
//                 <ul className="ml-4 mt-2">
//                   {subPages.map((sub) => (
//                     <li
//                       key={sub}
//                       onClick={() => onSelect(sub)}
//                       className={`cursor-pointer mt-1 text-sm hover:text-blue-300 ${
//                         selected === sub ? "text-blue-400 font-semibold" : ""
//                       }`}
//                     >
//                       {sub}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </>
//           ) : (
//             <div
//               onClick={() => onSelect(page)}
//               className={`cursor-pointer font-semibold text-[16px] hover:text-blue-400 ${
//                 selected === page ? "text-blue-400" : ""
//               }`}
//             >
//               {page}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }


// import React, { useState } from "react";

// const pages = {
//   "About us": {
//     "Our Company": {
//       "About Director": null,
//       "Company Gallery": null,
//     },
//     Team: {
//       "Soft Banner":null,
//       Card: null,
//       Gallery: null,
//     },
//     Review: null,
//   },
//   Home: {
//     Banner: null,
//     Logo: null,
//     Overview: null,
//     Educator:null

//   },
//   Service: {
//     "Web Design": {
//       Video:null,
//       Craft:null,
//     },
//     "Organic": {
//       Video:null,
//       Craft:null,
//     },
//     "Content Marketing": {
//       Video:null,
//       Craft:null,
//     },
//     "Social Media": {
//       Video:null,
//       Craft:null,
//       "Social User":null
//     },
//     "Google Ads": {
//       Video:null,
//       Craft:null,
//     },
//   },
//   Training: {
//     "Wining Gallery": null,
//     "Video": null,
//   },
//   "All Banner":{
//     Banner:null,
//   },
//   Resource:{
//     Ebook:null
//   }
// };

// export default function Sidebar({ onSelect, activePage, activeSubpage, activeChildSubpage }) {
//   const [openGroups, setOpenGroups] = useState({});


   

//   const toggleGroup = (group) => {
//     setOpenGroups((prev) => ({ ...prev, [group]: !prev[group] }));
//   };

//   const renderSubpages = (page, subpages) => {
//     return Object.entries(subpages).map(([sub, child]) => {
//       const isNested = child && typeof child === "object";

//       return (
//         <div key={sub} className="ml-2">
//           <div
//             onClick={() => {
//               if (isNested) {
//                 toggleGroup(`${page}-${sub}`);
//               } else {
//                 onSelect(page, sub, "");
//               }
//             }}
//             className={`cursor-pointer px-2 py-1 rounded hover:bg-gray-700 ${
//               activePage === page && activeSubpage === sub && !activeChildSubpage ? "bg-gray-700" : ""
//             }`}
//           >
//             {sub}
//           </div>

//           {isNested && openGroups[`${page}-${sub}`] && (
//             <div className="ml-4">
//               {Object.keys(child).map((childSub) => (
//                 <div
//                   key={childSub}
//                   onClick={() => onSelect(page, sub, childSub)}
//                   className={`cursor-pointer px-2 py-1 rounded hover:bg-gray-700 ${
//                     activePage === page &&
//                     activeSubpage === sub &&
//                     activeChildSubpage === childSub
//                       ? "bg-gray-700"
//                       : ""
//                   }`}
//                 >
//                   {childSub}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       );
//     });
//   };

//   return (
//     <div className="w-64 bg-gray-800 text-white p-4 ">
//       <div className=' px-20 py-10 '>
//                 <img src="https://wanderwave-ng-blog.netlify.app/assets/adminLog-UUbddI60.png" alt=" admin image" className=' size-14 items-center'/>
//                 <p className=' font-semibold '>Admin</p>
//             </div>
//       {Object.entries(pages).map(([page, subpages]) => (
//         <div key={page}>
//           <p
//             className="text-gray-400 font-semibold mb-1"
//             onClick={() => toggleGroup(page)}
//           >
//             {page}
//           </p>
//           {openGroups[page] && (
//             <div className="ml-2 mb-3">{renderSubpages(page, subpages)}</div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }


import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const pages = {
  "About us": {
    "Our Company": {
      "About Director": null,
      "Company Gallery": null,
    },
    Team: {
      "Soft Banner": null,
      Card: null,
      Gallery: null,
    },
    Review: null,
  },
  Home: {
    Banner: null,
    Logo: null,
    Overview: null,
    Educator: null,
  },
  Service: {
    "Web Design": { Video: null, Craft: null },
    Organic: { Video: null, Craft: null },
    "Content Marketing": { Video: null, Craft: null },
    "Social Media": { Video: null, Craft: null, "Social User": null },
    "Google Ads": { Video: null, Craft: null },
  },
  Training: {
    "Wining Gallery": null,
    Video: null,
  },
  "All Banner": {
    Banner: null,
  },
  Resource: {
    Ebook: null,
  },
};

export default function Sidebar({ onSelect, activePage, activeSubpage, activeChildSubpage }) {
  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (group) => {
    setOpenGroups((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  const renderSubpages = (page, subpages) =>
    Object.entries(subpages).map(([sub, child]) => {
      const isNested = child && typeof child === "object";
      const key = `${page}-${sub}`;
      const isOpen = openGroups[key];

      return (
        <div key={sub} className="ml-2">
          <div
            onClick={() => {
              if (isNested) {
                toggleGroup(key);
              } else {
                onSelect(page, sub, "");
              }
            }}
            className={`flex items-center justify-between cursor-pointer px-2 py-1 rounded hover:bg-gray-700 ${
              activePage === page && activeSubpage === sub && !activeChildSubpage ? "bg-gray-700" : ""
            }`}
          >
            <span>{sub}</span>
            {isNested &&
              (isOpen ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              ))}
          </div>

          {isNested && isOpen && (
            <div className="ml-4">
              {Object.keys(child).map((childSub) => (
                <div
                  key={childSub}
                  onClick={() => onSelect(page, sub, childSub)}
                  className={`cursor-pointer px-2 py-1 rounded hover:bg-gray-700 ${
                    activePage === page && activeSubpage === sub && activeChildSubpage === childSub
                      ? "bg-gray-700"
                      : ""
                  }`}
                >
                  {childSub}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    });

  return (
    <div className="w-64 h-screen fixed left-0 top-0 bg-gray-800 text-white p-4 overflow-y-auto">
      <div className="flex flex-col items-center py-6 border-b border-gray-700">
        <img
          src="https://wanderwave-ng-blog.netlify.app/assets/adminLog-UUbddI60.png"
          alt="admin"
          className="size-14 mb-2"
        />
        <p className="font-semibold">Admin</p>
      </div>
      <div className="mt-4">
        {Object.entries(pages).map(([page, subpages]) => (
          <div key={page} className="mb-2">
            <div
              onClick={() => toggleGroup(page)}
              className="cursor-pointer text-gray-300 font-semibold flex items-center justify-between px-2 py-1 hover:bg-gray-700 rounded"
            >
              <span>{page}</span>
              {typeof subpages === "object" &&
                (openGroups[page] ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
            </div>
            {openGroups[page] && <div className="ml-2">{renderSubpages(page, subpages)}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
