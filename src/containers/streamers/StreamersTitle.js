import React from 'react'
import { StreamersPlatformShow } from '..'
import { Link } from '../../components'

const StreamersTitle = ({ streamer }) => {
  return (
    <Link
      className='mx-auto my-auto'
      to={`https://www.twitch.tv/${streamer.channel}`}
      textSize='text-lg'
      linkType='external'>
      <div className='flex flex-row mx-auto space-x-3'>
        <StreamersPlatformShow streamer={streamer} />
        <p>{streamer.name}</p>
      </div>
    </Link>
  )
}

export default StreamersTitle
