import React from 'react'
import { useQuery } from 'react-query'
import { Spinner } from '../../components'
import ApiHelper from '../../helpers/ApiHelper'
import StreamsShow from './StreamsShow'

const StreamsIndex = () => {
  //  --- Variables ---
  const { data } = {data: [
    {
      streamer: "AnthonyZ",
      viewers: 12987,
      listeners: 3607,
      listeningTo: "Kream - Drowning"
    }
  ]}
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

  console.log(data)
  return (
    <div>
      <p className='text-center pb-4'>Active Audio Streams</p>
      {
        data.map((stream, index) => {
          return (
            <StreamsShow key={`streamShow-${index}`} stream={stream} />
          )
        })
      }
    </div>
  )
}

export default StreamsIndex
