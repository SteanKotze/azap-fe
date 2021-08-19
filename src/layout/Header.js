import React from 'react'
import { Link } from '../components'

const Header = () => {
  //  --- Response ---
  return (
    <div className='flex p-4 w-full bg-asphalt-400 mb-10 shadow-xl'>
      <div className='flex justify-between mx-auto w-full md:w-2/3'>
        <Link to='/'>Azap</Link>
        <Link to='/streams/create'>New Stream</Link>
      </div>
    </div>
  )
}

export default Header
