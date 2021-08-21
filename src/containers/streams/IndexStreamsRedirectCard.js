import React from 'react'
import { Link } from '../../components'

const IndexStreamsRedirectCard = ({ children }) => {
  return (
    <Link to='/streams' linkType='div'>
      <div className={`md:rounded-2xl md:shadow-xl bg-maroon animate-pulse-slow`}>
        <div className='h-full p-8 pt-0 md:pt-8 flex justify-center'>
          <p className='text-xl'>View all active audio streams!</p>          
        </div>
      </div>
    </Link>
  )
}

export default IndexStreamsRedirectCard