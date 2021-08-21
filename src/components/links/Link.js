import React, { useCallback } from 'react'
import { useHistory, useLocation } from 'react-router'

const Link = ({ children, className, linkType, to, textSize }) => {
  //  --- Variables ---
  const history = useHistory()
  const location = useLocation()

  //  --- Functionality ---
  const redirectTo = useCallback(
    (path) => {
      if (location.pathname !== path) history.push(path)
    },
    [history, location]
  )

  //  --- Response ---
  if (linkType === 'external')
  return (
    <a className={`cursor-pointer text-gold hover:text-gold-light ${className || ''} ${textSize || ''}`} href={to}>
      {children}
    </a>
  )

  if (linkType === 'div')
    return (
      <div
        className={`cursor-pointer ${className || ''} ${textSize || ''}`} href={to}
        onClick={() => redirectTo(to)}>
        {children}
      </div>
    )

  return (
    <p
      className={`cursor-pointer text-gold hover:text-gold-light ${className || ''} ${textSize || ''}`}
      onClick={() => redirectTo(to)}>
      {children}
    </p>
  )
}

export default Link
