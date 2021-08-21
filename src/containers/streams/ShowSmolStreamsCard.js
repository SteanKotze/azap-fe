import React from 'react'
import { useHistory } from 'react-router'
import { Button, SmolCard } from '../../components'
import ShowStreamersTitle from '../streamers/ShowStreamersTitle'

const ShowSmolStreamsCard = ({ stream }) => {
  //  --- Variables ---
  const history = useHistory()

  //  --- Response ---
  return (
    <SmolCard>
      <div className='flex flex-col space-y-2'>
        <ShowStreamersTitle streamer={stream.streamer} />
        <p>Viewers: {stream.viewers}</p>
        <p>Listeners: {stream.listeners}</p>
        <p className='pb-2'>Listening To: {stream.listening_to}</p>
        <Button onClick={() => history.push(`/users/${stream.streamer.uuid}/stream`)}>Go To</Button>
      </div>
    </SmolCard>
  )
}

export default ShowSmolStreamsCard
