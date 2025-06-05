// src/pages/Dashboard.jsx
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import PageForm from "../../components/PageForm";

export default function Dashboard() {
  const [selectedPage, setSelectedPage] = useState("Card Section");

  return (
    <div className="flex h-screen ">
      <Sidebar selected={selectedPage} onSelect={setSelectedPage} />
      <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
        <PageForm page={selectedPage} />
      </div>
    </div>
  );
}
