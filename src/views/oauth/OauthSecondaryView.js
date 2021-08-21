import React, { useCallback } from 'react'
import { Button, Card } from '../../components'

const OauthSecondaryView = () => {
  //  --- Variables ---

  //  --- Functionality ---
  const twitchLogin = useCallback(() => {
    console.log('logging in with twitch')
  }, [])

  const youtubeLogin = useCallback(() => {
    console.log('logging in with youtube')
  }, [])

  //  --- Response ---
  return (
    <div className='h-full flex'>
      <div className='m-auto'>
        <Card cardType='login'>
          <div className='flex flex-col space-y-4'>
            <Button onClick={twitchLogin}>Login With Twitch</Button>
            <Button onClick={youtubeLogin}>Login With Youtube</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default OauthSecondaryView
