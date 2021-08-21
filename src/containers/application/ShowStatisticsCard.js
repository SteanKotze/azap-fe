import React from 'react'
import { useHistory } from 'react-router'
import { Button, Card } from '../../components'

const ShowStatisticsCard = () => {
  //  --- Variables ---
  const history = useHistory()

  //  --- Response ---
  return (
    <Card>
      Here we will display a summary of the platform statistics #ToDo
      <div className='flex justify-center pt-4'>
        <Button onClick={() => history.push('/statistics')}>All the Numbers!</Button>
      </div>
    </Card>
  )
}

export default ShowStatisticsCard
