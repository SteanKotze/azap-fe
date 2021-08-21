import React from 'react'
import { useHistory } from 'react-router'
import { Button, SmolCard } from '../../components'
import { ShowStreamerTitle } from '..'

const ShowSmolStreamCard = ({ stream }) => {
  //  --- Variables ---
  const history = useHistory()

  //  --- Response ---
  return (
    <SmolCard>
      <div className='flex flex-col space-y-2'>
        <ShowStreamerTitle streamer={stream.streamer} />
        <p>Viewers: {stream.viewers}</p>
        <p>Listeners: {stream.listeners}</p>
        <p className='pb-2'>Listening To: {stream.listening_to}</p>
        <Button onClick={() => history.push(`/users/${stream.streamer.uuid}/stream`)}>Go To</Button>
      </div>
    </SmolCard>
  )
}

export default ShowSmolStreamCard
