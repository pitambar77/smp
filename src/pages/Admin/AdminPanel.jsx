
// import React from 'react'
// import Dashboard from './Dashbord'

// const AdminPanel = () => {
//   return (
//     <div>
//       <Dashboard/>
//     </div>
//   )
// }

// export default AdminPanel
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";

export default function AdminPanel() {
  const [selectedPage, setSelectedPage] = useState("Home");
  const [selectedSubpage, setSelectedSubpage] = useState("Banner");
  const [selectedChildSubpage, setSelectedChildSubpage] = useState("");

  const handleSelect = (page, subpage, childSubpage = "") => {
    setSelectedPage(page);
    setSelectedSubpage(subpage);
    setSelectedChildSubpage(childSubpage); // optional, only for nested subpages
  };

  return (
    <div className="flex">
      <Sidebar
        onSelect={handleSelect}
        activePage={selectedPage}
        activeSubpage={selectedSubpage}
        activeChildSubpage={selectedChildSubpage}
      />
      <MainContent
        page={selectedPage}
        subpage={selectedSubpage}
        childSubpage={selectedChildSubpage}
      />
    </div>
  );
}


// import React, { useState } from "react";
// import AdminForm from "../../components/AdminForm";
// import Sidebar from "../../components/Sidebar";

// const pages = {
//   "About us": ["Our Company", "Team", "Reviews"],
//   Service: ["Web Design", "Organic Marketing", "Google Ads"],
//   Pricing: ["Plan A", "Plan B"],
//   Training: ["Card Section", "Pricing"],
// };

// function AdminPanel() {
//   const [selectedPage, setSelectedPage] = useState("About us");
//   const [selectedSubpage, setSelectedSubpage] = useState("Our Company");

//   return (
//     <div className="flex min-h-screen bg-gray-100">
      
//       <div className="w-64 bg-[#1f2937] text-white p-4">
//         <h2 className="text-2xl font-bold mb-6">Admin</h2>
//         <ul>
//           {Object.entries(pages).map(([page, subpages]) => (
//             <li key={page} className="mb-2">
//               <p className="font-semibold">{page}</p>
//               <ul className="ml-4 mt-1">
//                 {subpages.map((sub) => (
//                   <li
//                     key={sub}
//                     className={`cursor-pointer text-sm py-1 px-2 rounded hover:bg-gray-600 ${
//                       selectedPage === page && selectedSubpage === sub
//                         ? "bg-gray-700"
//                         : ""
//                     }`}
//                     onClick={() => {
//                       setSelectedPage(page);
//                       setSelectedSubpage(sub);
//                     }}
//                   >
//                     {sub}
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right Panel */}
//       <div className="flex-1 p-6">
//         <AdminForm page={selectedPage} subpage={selectedSubpage} />
//       </div>
//     </div>
//   );
// }

// export default AdminPanel;

