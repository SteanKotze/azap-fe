import React, { useCallback } from 'react'
import { useHistory } from 'react-router'
import { Button, Card } from '../../components'
import ApiHelper from '../../helpers/ApiHelper'

const UsersLoginView = () => {
  //  --- Variables ---
  const history = useHistory()

  //  --- Functionality ---
  const redirectToLogin = useCallback(async () => {
    const oauthRedirect = await ApiHelper.showOauthRedirect()
    console.log(oauthRedirect)
    // history.push(oauthRedirect)
  }, [history])

  //  --- Response ---
  return (
    <div className='h-full flex'>
      <div className='m-auto'>
        <Card cardType='login'>
          <Button onClick={redirectToLogin}>Login With Spotify</Button>
        </Card>
      </div>
    </div>
  )
}

export default UsersLoginView
