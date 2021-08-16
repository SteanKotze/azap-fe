import React from 'react'

const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={`bg-white border focus:outline-none h-9 hover:bg-gray-300 my-auto px-3 rounded-md text-black ${
        className || ''
      }`}
      onClick={onClick}
      {...props}>
      {children}
    </button>
  )
}

export default Button
