import React, { useCallback } from 'react'
import { useHistory } from 'react-router'
import { Button, SmolCard } from '../../components'

const StreamsShow = ({ stream }) => {
  //  --- Variables ---
  const history = useHistory()

  //  --- Response ---
  return (
    <SmolCard>
      <div className='flex flex-col space-y-2'>
        <a href={`https://www.twitch.tv/${stream.streamer}`} className='text-center text-azap-gold text-lg'>
          {stream.streamer}
        </a>
        <p>Viewers: {stream.viewers}</p>
        <p>Listeners: {stream.listeners}</p>
        <p className='pb-2'>Listening To: {stream.listening_to}</p>
        <Button onClick={() => history.push(`/streams/${stream.streamer}`)}>Go To</Button>
      </div>
    </SmolCard>
  )
}

export default StreamsShow
