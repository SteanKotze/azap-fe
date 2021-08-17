import React, { useCallback } from 'react'
import { useHistory, useLocation } from 'react-router'

const Header = () => {
  //  --- Variables ---
  const history = useHistory()
  const location = useLocation()

  //  --- Functionality ---
  const redirectToView = useCallback(
    viewPath => {
      if (location.pathname !== viewPath) history.push(viewPath)
    },
    [history, location]
  )

  //  --- Response ---
  return (
    <div className='flex p-4 w-full bg-asphalt-400 mb-10 shadow-xl'>
      <div className='flex justify-between mx-auto w-full md:w-2/3'>
        <p className='cursor-pointer text-azap-gold' onClick={() => redirectToView('/')}>
          Azap
        </p>
        <p className='cursor-pointer text-azap-gold' onClick={() => redirectToView('/streams/create')}>
          New Stream
        </p>
      </div>
    </div>
  )
}

export default Header
