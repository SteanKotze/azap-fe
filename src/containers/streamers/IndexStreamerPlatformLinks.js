import React, { useCallback } from 'react'
import { Link } from '../../components'

const IndexStreamerPlatformLinks = ({ streamer }) => {
  const renderPlatfomLink = useCallback((platform) => {
    switch (platform)
    {
      case 'spotify':
        return (
          <Link linkType='external' className='my-auto'>
            <img className='w-5 h-5' src='/images/logos/spotify.png' alt='spotify-logo' />
          </Link>
        )
      case 'twitch':
        return (
          <Link linkType='external' className='my-auto'>
            <img className='w-5 h-6' src='/images/logos/twitch.png' alt='twitch-logo' />
          </Link>
        )
      case 'youtube':
        return (
          <Link linkType='external' className='my-auto'>
            <img className='w-7 h-5' src='/images/logos/youtube.png' alt='youtube-logo' />
          </Link>
        )
      case 'google':
        return (
          <Link linkType='external' className='my-auto'>
            <img className='w-5 h-5' src='/images/logos/google.png' alt='google-logo' />
          </Link>
        )
      case 'apple':
        return (
          <Link linkType='external' className='my-auto'>
            <img className='w-5 h-6' src='/images/logos/apple.svg' alt='apple-logo' />
          </Link>
        )
      default:
        return (
          <Link linkType='external' className='my-auto'>
            <img className='w-5 h-5' src={`/images/logos/${platform}.png`} alt={`${platform}-logo`} />
          </Link>
        )
    }
  }, [])

  return (
    <div className='flex flex-row space-x-2'>
      {
        streamer.platforms.map(platform => {
          if (!platform.authenticated) return null
          return renderPlatfomLink(platform.name.toLowerCase())
        })
      }
    </div>
  )
}

export default IndexStreamerPlatformLinks