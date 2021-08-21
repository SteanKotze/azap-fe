import React from 'react'
import { useHistory } from 'react-router'
import { Button, Card, SmolCard, Spinner } from '../../components'

const ShowCurrentUserView = () => {
  //  --- Variables ---
  const history = useHistory()

  const { data } = {
    data: {
      user: {},
      platforms: [
        {
          name: 'Spotify',
          authenticated: true,
        },
        {
          name: 'Twitch',
          authenticated: false,
        },
        {
          name: 'Youtube',
          authenticated: false,
        },
        {
          name: 'Google',
          authenticated: false,
        },
        {
          name: 'Apple',
          authenticated: false,
        },
      ],
    },
  }

  //  --- Response ---
  return (
    <Card>
      <div className='flex w-full'>
        <Spinner className='mx-auto' />
      </div>
      <div className='flex flex-row mt-4'>
        <SmolCard className='w-1/3'>
          <div className='flex flex-col space-y-4'>
            <Button className='mx-auto w-2/3' onClick={() => history.push('/streams/create')}>
              Go Live!
            </Button>
            {data.platforms.map((platform) => {
              if (!platform.authenticated)
                return (
                  <Button
                    className='mx-auto w-2/3'
                    onClick={() => history.push(`/api/oauth/${platform.name.toLowerCase()}`)}>
                    + {platform.name}
                  </Button>
                )
            })}
          </div>
        </SmolCard>
      </div>
    </Card>
  )
}

export default ShowCurrentUserView
