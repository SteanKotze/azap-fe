import React, { useCallback } from 'react'
import { Button, Card } from '../../components'
import ApiHelper from '../../helpers/ApiHelper'

const OauthPrimaryView = () => {
  //  --- Functionality ---
  const spotifyLogin = useCallback(async () => {
    const oauthRedirect = await ApiHelper.showOauthRedirect()
    console.log(oauthRedirect)
  }, [])

  //  --- Response ---
  return (
    <div className='h-full flex'>
      <div className='m-auto'>
        <Card cardType='login'>
          <Button onClick={spotifyLogin}>Login With Spotify</Button>
        </Card>
      </div>
    </div>
  )
}

export default OauthPrimaryView
