import React, { useCallback } from 'react'
import { useHistory } from 'react-router'
import ApiHelper from '../../helpers/ApiHelper'

const UsersLoginView = () => {
  //  --- Variables ---
  const history = useHistory()

  //  --- Functionality ---
  const redirectToLogin = useCallback(() => {
    const oauthRedirect = ApiHelper.showLoginRedirect()
    history.push(oauthRedirect)
  }, [history])

  //  --- Response ---
  return ( 
    <div className='h-full flex'>
      <div className='m-auto'>
        <button className='bg-gray-700 hover:bg-gray-600 p-4 rounded' onClick={redirectToLogin}>
          Login With Spotify
        </button>
      </div>
    </div>
  )
}

export default UsersLoginView