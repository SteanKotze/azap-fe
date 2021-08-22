import React from 'react'

const Input = ({ children, className, type, onChange, ...props }) => {
  return (
    <input className={`focus:outline-none px-4 py-1 rounded-lg ${className || ''}`} type={type} onChange={onChange}>
      {children}
    </input>
  )
}

export default Input