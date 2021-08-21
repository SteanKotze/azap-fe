import React from 'react'
import { useQuery } from 'react-query'
import { Spinner } from '../../components'
import ApiHelper from '../../helpers/ApiHelper'
import ShowSmolStreamsCard from './ShowSmolStreamsCard'

const IndexStreams = () => {
  //  --- Variables ---
  const { data } = {
    data: [
      {
        streamer: {
          uuid: '4fedf1a9-5fe7-44e1-83fb-ca5c431042b6',
          platform: 'twitch',
          channel: 'gtawiseguy',
          name: 'GTAWiseGuy',
        },
        viewers: 12987,
        listeners: 3607,
        listening_to: 'Kream - Drowning',
        up_time: '4h25m17',
      },
      {
        streamer: {
          uuid: 'fd01d47d-8191-4571-b792-7a0ced6a5527',
          platform: 'youtube',
          channel: 'UCWxlUwW9BgGISaakjGM37aw',
          name: 'Valkyrae',
        },
        viewers: 21370,
        listeners: 7016,
        listening_to: 'Kream - Drowning',
        up_time: '4h25m17',
      },
    ],
  }
  //  --- Variables ---
  // const { data, isLoading } = useQuery(['indexStreams'], () => ApiHelper.indexStreams(), {
  //   refetchOnWindowFocus: false,
  // })

  //  --- Response ---
  // if (isLoading || !data)
  //   return (
  //     <div className='h-full flex'>
  //       <Spinner className='m-auto' />
  //     </div>
  //   )

  return (
    <div>
      <p className='text-center pb-4 text-2xl'>Active Audio Streams</p>
      <div className='flex flex-row flex-wrap space-x-4'>
        {data.map((stream, index) => {
          return <ShowSmolStreamsCard key={`streamShow-${index}`} stream={stream} />
        })}
      </div>
    </div>
  )
}

export default IndexStreams
