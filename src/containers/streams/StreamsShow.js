import React from 'react'
import { SmolCard } from '../../components'

const StreamsShow = ({ stream }) => {
  return (
    <SmolCard>
      {stream.streamer}
      {stream.viewers}
      {stream.listeners}
      {stream.listeningTo}
    </SmolCard>
  )
}

export default StreamsShow