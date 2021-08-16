import React from 'react'
import { StreamsIndex } from '../../components'

const ApplicationHomeView = () => {
  return (
    <div>
      This is the home view
      <StreamsIndex />
      {/* ToDo: Check if the user is logged in, else redirect to UserLoginView */}
    </div>
  )
}

export default ApplicationHomeView
