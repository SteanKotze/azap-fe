import React from 'react'

const Button = ({ children, className, enabled = true, onClick, ...props }) => {
  if (enabled)
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

  return (
    <div
      className={`bg-maroon border cursor-not-allowed flex focus:outline-none h-9 my-auto opacity-30 px-3 rounded-md ${
        className || ''
      }`}>
      <p className='m-auto'>{children}</p>
    </div>
  )
}

export default Button
