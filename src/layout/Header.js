import React from 'react'
import { Link } from '../components'
import { UserIcon } from '../components/icons'

const Header = () => {
  //  --- Response ---
  return (
    <div className='flex p-4 w-full bg-asphalt-400 mb-10 shadow-xl'>
      <div className='flex justify-between mx-auto w-full md:w-2/3 lg:w-3/5'>
        <Link to='/'>Azap</Link>
        <Link to='/users/me'>
          <UserIcon />
        </Link>
      </div>
    </div>
  )
}

export default Header
