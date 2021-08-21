import React, { useMemo } from 'react'

const StreamersPlatformShow = ({ streamer }) => {
  const renderCss = useMemo(() => {
    switch (streamer.platform) {
      case 'twitch':
        return ' my-auto h-6 w-5'
      case 'youtube':
        return 'my-auto h-5 w-7'
    }
  }, [streamer])

  return <img className={renderCss} src={`images/${streamer.platform}Logo.png`} alt={`${streamer.platform} logo`} />
}

export default StreamersPlatformShow
