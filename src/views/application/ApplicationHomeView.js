import React from 'react'
import { Card } from '../../components'
import { StreamsIndex } from '../../containers'

const ApplicationHomeView = () => {
  return (
    <div className='h-full'>
      <Card>
        <StreamsIndex />
      </Card>
      {/* ToDo: Check if the user is logged in, else redirect to UserLoginView */}
    </div>
  )
}

export default ApplicationHomeView
