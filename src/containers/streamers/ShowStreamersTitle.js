import React, { useMemo } from 'react'
import { Link } from '../../components'

const ShowStreamerTitle = ({ streamer }) => {
  const renderCss = useMemo(() => {
    switch (streamer.platform) {
      case 'twitch':
        return ' my-auto h-6 w-5'
      default:
        return 'my-auto h-5 w-7'
    }
  }, [streamer])

  const renderChannelLink = useMemo(() => {
    switch (streamer.platform) {
      case 'twitch':
        return `https://www.twitch.tv/${streamer.channel}`
      default:
        return `https://www.youtube.com/channel/${streamer.channel}`
    }
  }, [streamer])

  return (
    <Link className='mx-auto my-auto' to={renderChannelLink} textSize='text-xl' linkType='external'>
      <div className='flex flex-row mx-auto space-x-3'>
        <img className={renderCss} src={`images/${streamer.platform}Logo.png`} alt={`${streamer.platform} logo`} />
        <p>{streamer.name}</p>
      </div>
    </Link>
  )
}

export default ShowStreamerTitle
