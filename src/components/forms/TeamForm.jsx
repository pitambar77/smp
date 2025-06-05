import React, { useState } from "react";

export default function TeamForm() {
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading] = useState("");
 
  return (
    <div className="p-6 bg-white rounded shadow max-w-3xl">
      <h2 className="text-2xl font-bold mb-4">Our Team</h2>
      <input
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        placeholder="Banner Heading"
        className="border p-2 w-full mb-2"
      />
      <input
        value={subheading}
        onChange={(e) => setSubheading(e.target.value)}
        placeholder="Subheading"
        className="border p-2 w-full mb-2"
      />
      <input type="file"  className="mb-4" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </div>
  );
}
