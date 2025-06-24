import React from 'react'

const SectionLayout = ({ children, className = '' }) => {
  return (
    <div className={`w-full sm:py-[100px] py-[50px] bg-[#ff5254] ${className}`}>
    {children}
  </div>
  )
}

export default SectionLayout
