import React from 'react'

const SmolCard = ({ children, className, ...props }) => {
  return (
    <div className={`bg-azap hover:shadow-2xl p-4 rounded-2xl ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

export default SmolCard
