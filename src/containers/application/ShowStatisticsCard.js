import React from 'react'
import { useHistory } from 'react-router'
import { Button, Card } from '../../components'

const ShowStatisticsCard = () => {
  //  --- Variables ---
  const history = useHistory()

  //  --- Response ---
  return (
    <Card>
      ShowStatisticsCard #ToDo
      <div className='flex justify-center'>
        <Button onClick={() => history.push('/statistics')}>All the Numbers!</Button>
      </div>
    </Card>
  )
}

export default ShowStatisticsCard