import React from 'react'
import { useQuery } from 'react-query'
import { Spinner } from '../../components'
import ApiHelper from '../../helpers/ApiHelper'
import StreamsShowCard from './StreamsShowCard'

const StreamsIndex = () => {
  //  --- Variables ---
  const { data } = {
    data: [
      {
        streamer: {
          platform: 'twitch',
          channel: 'AnthonyZ',
          name: 'AnthonyZ',
        },
        viewers: 12987,
        listeners: 3607,
        listening_to: 'Kream - Drowning',
        up_time: '4h25m17',
      },
      {
        streamer: {
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
          return <StreamsShowCard key={`streamShow-${index}`} stream={stream} />
        })}
      </div>
    </div>
  )
}

export default StreamsIndex
