import React from 'react'
import { useQuery } from 'react-query'
import { Spinner } from '../../components'
import ApiHelper from '../../helpers/ApiHelper'
import StreamsShow from './StreamsShow'

const StreamsIndex = () => {
  //  ToDo
  //  --- Variables ---
  const { data } = {
    data: [
      {
        streamer: 'AnthonyZ',
        viewers: 12987,
        listeners: 3607,
        listeningTo: 'Kream - Drowning',
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
      <p className='text-center pb-4'>Active Audio Streams</p>
      <div className='flex flex-row flex-wrap'>
        {data.map((stream, index) => {
          return <StreamsShow key={`streamShow-${index}`} stream={stream} />
        })}
      </div>
    </div>
  )
}

export default StreamsIndex
