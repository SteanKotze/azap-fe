import React from 'react'
import { useHistory } from 'react-router'
import { Button, Card, SmolCard } from '../../components'
import { IndexStreamerPlatformLinks } from '../../containers'

const ShowCurrentUserView = () => {
  //  --- Variables ---
  const history = useHistory()
  const { data } = {
    data: {
      user: {
        username: 'Spotify User Name',
      },
      platforms: [
        {
          name: 'Spotify',
          authenticated: true,
        },
        {
          name: 'Twitch',
          authenticated: true,
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
      <div className='flex flex-col space-y-4'>
        <div className='flex flex-row mx-auto space-x-2'>
          <p className='text-2xl'>{data.user.username} -</p>
          <IndexStreamerPlatformLinks streamer={data} />
        </div>
        <div className='flex flex-row space-x-4'>
          <SmolCard className='w-1/3'>
            <div className='flex flex-col space-y-4 py-2'>
              <Button
                className='mx-auto w-2/3'
                onClick={() => history.push('/streams/create')}>
                Go Live!
              </Button>
              {data.platforms.map((platform) => {
                return (
                  <Button
                    className='mx-auto w-2/3'
                    enabled={!platform.authenticated}
                    key={`${platform.name}-oauth`}
                    onClick={() => history.push(`/api/oauth/${platform.name.toLowerCase()}`)}>
                    + {platform.name}
                  </Button>
                )
              })}
            </div>
          </SmolCard>
          <SmolCard className='w-2/3'>User Details from Spotify</SmolCard>
        </div>
        <SmolCard>User Past Stream Statistics</SmolCard>
      </div>
    </Card>
  )
}

export default ShowCurrentUserView
