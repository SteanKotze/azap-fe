import React from 'react'
import { Link } from '../../components'

const IndexStreamsRedirectCard = ({ children }) => {
  return (
    <Link to='/streams' linkType='div'>
      <div className='animate-pulse-slow bg-maroon md:border md:rounded-2xl md:shadow-xl'>
        <div className='flex h-full justify-center md:pt-8 p-8 pt-0'>
          <p className='text-xl'>View all active audio streams!</p>
        </div>
      </div>
    </Link>
  )
}

export default IndexStreamsRedirectCard
