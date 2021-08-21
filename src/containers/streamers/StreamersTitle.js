import React from 'react'
import { Link } from '../../components'

const StreamersTitle = ({ streamer }) => {
  return (
      <Link className='mx-auto my-auto' to={`https://www.twitch.tv/${streamer.channel}`} textSize='text-lg' linkType='external'>
        <div className='flex flex-row mx-auto space-x-3'>
          <img className='h-6 w-5' src={`images/${streamer.platform}Logo.png`} alt={`${streamer.platform} logo`} />
          <p>{streamer.name}</p>
        </div>
      </Link>
  )
}

export default StreamersTitle
