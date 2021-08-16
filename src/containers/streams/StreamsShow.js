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
        <a href={`https://www.twitch.tv/${stream.streamer}`} className='text-center'>{stream.streamer}</a>
        <p>Viwers: {stream.viewers}</p>
        <p>Listernes: {stream.listeners}</p>
        <p>Listening To: {stream.listeningTo}</p>
        <Button onClick={() => history.push(`/streams/${stream.streamer}`)}>Join</Button>
      </div>
    </SmolCard>
  )
}

export default StreamsShow