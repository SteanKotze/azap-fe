import React from 'react'

const SmolCard = ({ children, ...props }) => {
  return (
    <div className='bg-asphalt-300 hover:shadow-2xl p-4 rounded-2xl' {...props}>
      {children}
    </div>
  )
}

export default SmolCard
