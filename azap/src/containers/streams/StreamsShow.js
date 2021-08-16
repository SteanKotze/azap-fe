import React from 'react'

const StreamsShow = ({ stream }) => {
  return (
    <div>
      {stream.streamer}
      {stream.viewers}
      {stream.listeners}
      {stream.listeningTo}
      This is totally a stream
    </div>
  )
}

export default StreamsShow