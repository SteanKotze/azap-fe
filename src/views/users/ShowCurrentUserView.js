import React from 'react'
import { useHistory } from 'react-router'
import { Button, Card, Spinner } from '../../components'

const ShowCurrentUserView = () => {
  //  --- Variables ---
  const history = useHistory()

  //  --- Response ---
  return (
    <Card>
      ShowCurrentUserView
      <div className='flex w-full'>
        <Spinner className='mx-auto' />
      </div>
      <div className='flex justify-center mt-4'>
        <Button onClick={() => history.push('/streams/create')}>Create Stream</Button>
      </div>
    </Card>
  )
}

export default ShowCurrentUserView
