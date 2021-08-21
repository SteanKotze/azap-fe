import React from 'react'
import { useHistory } from 'react-router'
import { Button, SmolCard } from '../../components'
import StreamersTitle from '../streamers/StreamersTitle'

const StreamsShowCard = ({ stream }) => {
  //  --- Variables ---
  const history = useHistory()

  //  --- Response ---
  return (
    <SmolCard>
      <div className='flex flex-col space-y-2'>
        <StreamersTitle streamer={stream.streamer} />
        <p>Viewers: {stream.viewers}</p>
        <p>Listeners: {stream.listeners}</p>
        <p className='pb-2'>Listening To: {stream.listening_to}</p>
        <Button onClick={() => history.push(`/streams/${stream.streamer}`)}>Go To</Button>
      </div>
    </SmolCard>
  )
}

export default StreamsShowCard
