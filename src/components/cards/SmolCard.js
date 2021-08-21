import React from 'react'

const SmolCard = ({ children, className, ...props }) => {
  return (
    <div className={`bg-asphalt-300 hover:shadow-2xl p-4 rounded-2xl ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

export default SmolCard
