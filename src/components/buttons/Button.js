import React from 'react'

const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={`bg-gray-300 border focus:outline-none h-9 my-auto px-3 rounded-md text-asphalt-100 hover:text-white hover:bg-azap-red ${
        className || ''
      }`}
      onClick={onClick}
      {...props}>
      {children}
    </button>
  )
}

export default Button
