import React from 'react'
import { useHistory } from 'react-router'
import { Button, SmolCard } from '../../components'
import { ShowStreamerTitle } from '..'

const ShowSmolStreamCard = ({ className, stream }) => {
  //  --- Variables ---
  const history = useHistory()

  //  --- Response ---
  return (
    <SmolCard className={className || ''}>
      <div className='flex flex-col space-y-2'>
        <ShowStreamerTitle streamer={stream.streamer} />
        <p>Song: {stream.listening_to}</p>
        <p>Viewers: {stream.viewers}</p>
        <p>Listeners: {stream.listeners}</p>
        <Button onClick={() => history.push(`/users/${stream.streamer.uuid}/stream`)}>Go To</Button>
      </div>
    </SmolCard>
  )
}

export default ShowSmolStreamCard
