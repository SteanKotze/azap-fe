import React from 'react'

const Input = ({ children, className, type, onChange, ...props }) => {
  return (
    <input
      className={`bg-asphalt-ddd focus:outline-none px-3 py-1 rounded-lg text-azap-dark ${className || ''}`}
      type={type}
      onChange={onChange}>
      {children}
    </input>
  )
}

export default Input
