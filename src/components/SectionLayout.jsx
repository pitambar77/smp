import React from 'react'

const SectionLayout = ({ children, className = '' }) => {
  return (
    <div className={`w-full py-[100px] bg-[#ff5254] ${className}`}>
    {children}
  </div>
  )
}

export default SectionLayout
