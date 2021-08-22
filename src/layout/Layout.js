import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div>
      <div className='bg-azap-dark min-h-screen pb-10'>
        <Header />
        <div className='flex w-full justify-center overflow-auto'>
          <div className='w-full md:w-2/3 lg:w-3/5 mx-auto'>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
