import React from 'react'
import { Link } from '../components'

const Footer = () => {
  //  --- Response ---
  return (
    <div className='flex p-4 w-full bg-asphalt-400 mb-10 shadow-xl'>
      <div className='flex justify-between mx-auto w-full md:w-2/3 lg:w-3/5'>
        <Link to='/statistics'>Statistics</Link>
        <Link to='/about_us'>About Us</Link>
        <Link to='/contact_us'>Contact Us</Link>
        <Link to='/documentation'>Documentation</Link>
      </div>
    </div>
  )
}

export default Footer
