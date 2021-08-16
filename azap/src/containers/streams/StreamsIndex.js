import React from 'react'
import { useQuery } from 'react-query'
import ApiHelper from '../../helpers/ApiHelper'
import { Spinner } from '../../components'

const StreamsIndex = () => {
  //  --- Variables ---
  const { data, isLoading } = useQuery(['indexStreams'], () => ApiHelper.indexStreams(), {
    refetchOnWindowFocus: false,
  })

  //  --- Response ---
  if (isLoading || !data) return (
    <div className='h-full flex'>
      <Spinner className='m-auto' />
    </div>
  )

  return (
    <div>
      {/* ToDo Impelement streams index component */}
      Streams Index
    </div>
  )
}

export default StreamsIndex
