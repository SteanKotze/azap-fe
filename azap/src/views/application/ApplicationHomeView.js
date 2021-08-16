import React from 'react'
import { StreamsIndex } from '../../containers'

const ApplicationHomeView = () => {
  return (
    <div className='h-full'>
      Azap
      <StreamsIndex />
      {/* ToDo: Check if the user is logged in, else redirect to UserLoginView */}
    </div>
  )
}

export default ApplicationHomeView
