import React from 'react'
import { Card } from '../../components'
import { IndexStreams } from '../../containers'

const ShowHomeView = () => {
  return (
    <div className='h-full'>
      <Card>
        <IndexStreams />
      </Card>
      {/* ToDo: Check if the user is logged in, else redirect to UserLoginView */}
    </div>
  )
}

export default ShowHomeView
