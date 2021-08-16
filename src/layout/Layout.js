import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='flex w-full justify-center'>
        <div className='w-full md:w-2/3 mx-auto'>{children}</div>
      </div>
    </div>
  )
}

export default Layout
