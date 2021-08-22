import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Card, Input, Select } from '../../components'
import { musicPlatforms, streamingPlatforms } from '../../constants/PlatformConstants'
import ApiHelper from '../../helpers/ApiHelper'

const CreateStreamView = () => {
  //  --- Variables ---
  const history = useHistory()
  const [name, setName] = useState('')
  const [streamingPlatform, setStreamingPlatform] = useState(streamingPlatforms[0]['value'])
  const [musicPlatform, setMusicPlatform] = useState(musicPlatforms[0]['value'])

  //  --- Functionality ---
  const createStream = useCallback(async () => {
    if (!name || !streamingPlatform || !musicPlatform) return
    await ApiHelper.createStream(name, streamingPlatform, musicPlatform)
    history.push('/streams/me')
  }, [history, name, streamingPlatform, musicPlatform])

  //  --- Response ---
  return (
    <Card>
      <div className='flex flex-col space-y-6'>
        <p className='mx-auto text-2xl'>Create a New Stream</p>
        <label className='flex flex-row justify-between w-full mt-5'>
          <p className='w-1/3'>Stream Title:</p>
          <Input className='text-azap-dark w-2/3' type='text' onChange={(e) => setName(e.target.value)} />
        </label>
        <form className='flex flex-row w-full'>
          <p className='w-1/3'>Stream Platform:</p>
          <Select options={streamingPlatforms} setValue={setStreamingPlatform} className='w-40' />
        </form>
        <label className='flex flex-row w-full mt-5'>
          <p className='w-1/3'>Music Platform:</p>
          <Select options={musicPlatforms} setValue={setMusicPlatform} className='w-40' />
        </label>
        <Button className='mx-auto' onClick={createStream}>
          Start Stream
        </Button>
      </div>
    </Card>
  )
}

export default CreateStreamView
