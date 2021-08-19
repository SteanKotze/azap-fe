import React from 'react'

const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={`bg-maroon border focus:outline-none h-9 my-auto px-3 rounded-md hover:bg-maroon-light ${
        className || ''
      }`}
      onClick={onClick}
      {...props}>
      {children}
    </button>
  )
}

export default Button
