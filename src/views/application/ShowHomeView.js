import React from 'react'
import { Card } from '../../components'
import { ShowStatisticsCard, IndexStreamsRedirectCard } from '../../containers'

const ShowHomeView = () => {
  return (
    <div className='flex flex-col space-y-6'>
      <IndexStreamsRedirectCard />
      <ShowStatisticsCard />
      <div className='flex flex-row space-x-6'>
        <Card className='w-1/2'>About Us Card #ToDo</Card>
        <div className='flex flex-col w-1/2 space-y-6'>
          <Card>Documentation Card #ToDo</Card>
          <Card>Contact Us Card #ToDo</Card>
        </div>
      </div>
    </div>
  )
}

export default ShowHomeView
