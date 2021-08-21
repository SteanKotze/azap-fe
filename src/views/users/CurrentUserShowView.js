import React from 'react'
import { Card, Spinner } from '../../components'

const CurrentUserShowView = () => {
  return (
    <Card>
      CreateStreamView
      <div className='flex w-full'>
        <Spinner className='mx-auto' />
      </div>
    </Card>
  )
}

export default CurrentUserShowView