import React from 'react'
import { useHistory } from 'react-router'
import { Button, Card, Spinner } from '../../components'

const CurrentUserShowView = () => {
  //  --- Variables ---
  const history = useHistory()

  //  --- Response ---
  return (
    <Card>
      CurrentUserShowView
      <div className='flex w-full'>
        <Spinner className='mx-auto' />
      </div>
      <div className='flex justify-center'>
        <Button onClick={() => history.push('/streams/create')}>Create Stream</Button>
      </div>
    </Card>
  )
}

export default CurrentUserShowView
