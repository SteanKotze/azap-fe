import React, { useState } from 'react'
import { Button, Card, Input, Spinner } from '../../components'

const CreateStreamView = () => {
  //  --- Variables ---
  const [name, setName] = useState('')

  //  --- Response ---
  return (
    <Card>
      <div className='flex flex-col space-y-6'>
        <p className='mx-auto text-2xl'>Create a New Stream</p>
        <label className='flex flex-row justify-between w-full mt-5'>
          <p className='w-1/3'>Stream Title:</p>
          <Input className='text-azap-dark w-2/3' type='text' onChange={e => setName(e.target.value)} />
        </label>
        <form className='flex flex-row w-full'>
          <p className='w-1/3'>Stream Platform:</p>
          <div className='flex flex-col'>
            <label className='flex flex-row space-x-4'>
              <Input className='text-azap-dark my-auto' type='radio'/>
              <p className='my-auto'>test</p>
            </label>
            <label className='flex flex-row space-x-4'>
              <Input className='text-azap-dark my-auto' type='radio'/>
              <p className='my-auto'>test</p>
            </label>
          </div>
        </form>
        <label className='flex flex-row w-full mt-5'>
          <p className='w-1/3'>Music Platform:</p>
          <Input className='text-azap-dark' type='radio'/>
        </label>
        <Button className='mx-auto'>
          Start Stream
        </Button>
      </div>
    </Card>
  )
}

export default CreateStreamView
